"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  defaultStyleSlug,
  fronttasteStyles,
  getStyle,
  isStyleSlug,
  stylePickerStyles,
  type StyleSkill,
  type StyleSlug,
} from "@/lib/fronttaste";

type StyleContextValue = {
  selectedStyle: StyleSlug;
  style: StyleSkill;
  isAutoSwitching: boolean;
  setSelectedStyle: (slug: StyleSlug) => void;
  setAutoSwitching: (enabled: boolean) => void;
};

const AUTO_SWITCH_STORAGE_KEY = "fronttaste:auto-switch";
const StyleContext = createContext<StyleContextValue | null>(null);

function readInitialStyle() {
  if (typeof window === "undefined") {
    return defaultStyleSlug;
  }

  const urlStyle = new URLSearchParams(window.location.search).get("style");
  if (isStyleSlug(urlStyle)) {
    return urlStyle;
  }

  return defaultStyleSlug;
}

function readInitialAutoSwitching() {
  if (typeof window === "undefined") {
    return true;
  }

  return window.localStorage.getItem(AUTO_SWITCH_STORAGE_KEY) !== "false";
}

function writeStyleToUrl(slug: StyleSlug) {
  const url = new URL(window.location.href);
  url.searchParams.set("style", slug);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function nextStyleSlug(current: StyleSlug) {
  const currentIndex = stylePickerStyles.findIndex((style) => style.slug === current);
  const nextIndex = currentIndex < 0 ? 0 : (currentIndex + 1) % stylePickerStyles.length;
  return stylePickerStyles[nextIndex]?.slug ?? defaultStyleSlug;
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [selectedStyle, setSelectedStyleState] = useState<StyleSlug>(defaultStyleSlug);
  const [isAutoSwitching, setAutoSwitchingState] = useState(true);
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setSelectedStyleState(readInitialStyle());
      setAutoSwitchingState(readInitialAutoSwitching());
      setHasHydrated(true);
    });
  }, []);

  useEffect(() => {
    if (!hasHydrated) {
      return;
    }

    window.localStorage.setItem(AUTO_SWITCH_STORAGE_KEY, String(isAutoSwitching));
  }, [hasHydrated, isAutoSwitching]);

  useEffect(() => {
    if (!hasHydrated || !isAutoSwitching) {
      return;
    }

    const timer = window.setInterval(() => {
      setSelectedStyleState((current) => {
        const next = nextStyleSlug(current);
        writeStyleToUrl(next);
        return next;
      });
    }, 10000);

    return () => window.clearInterval(timer);
  }, [hasHydrated, isAutoSwitching]);

  const setSelectedStyle = useCallback((slug: StyleSlug) => {
    setSelectedStyleState(slug);
    writeStyleToUrl(slug);
  }, []);

  const setAutoSwitching = useCallback((enabled: boolean) => {
    setAutoSwitchingState(enabled);
    window.localStorage.setItem(AUTO_SWITCH_STORAGE_KEY, String(enabled));
  }, []);

  const value = useMemo<StyleContextValue>(() => {
    return {
      selectedStyle,
      style: getStyle(selectedStyle) ?? getStyle(defaultStyleSlug) ?? fronttasteStyles[0],
      isAutoSwitching,
      setSelectedStyle,
      setAutoSwitching,
    };
  }, [isAutoSwitching, selectedStyle, setAutoSwitching, setSelectedStyle]);

  return (
    <StyleContext.Provider value={value}>
      <div className="ft-root" data-style={selectedStyle}>
        {children}
      </div>
    </StyleContext.Provider>
  );
}

export function useFronttasteStyle() {
  const context = useContext(StyleContext);

  if (!context) {
    throw new Error("useFronttasteStyle must be used within StyleProvider");
  }

  return context;
}
