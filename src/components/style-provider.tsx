"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  allDemoScreenshots,
  defaultStyleSlug,
  fronttasteStyles,
  getStyle,
  isStyleSlug,
  type StyleSkill,
  type StyleSlug,
} from "@/lib/fronttaste";

type StyleContextValue = {
  selectedStyle: StyleSlug;
  style: StyleSkill;
  setSelectedStyle: (slug: StyleSlug) => void;
};

const STORAGE_KEY = "fronttaste:selected-style";
const StyleContext = createContext<StyleContextValue | null>(null);

function readInitialStyle() {
  if (typeof window === "undefined") {
    return defaultStyleSlug;
  }

  const urlStyle = new URLSearchParams(window.location.search).get("style");
  if (isStyleSlug(urlStyle)) {
    return urlStyle;
  }

  const storedStyle = window.localStorage.getItem(STORAGE_KEY);
  if (isStyleSlug(storedStyle)) {
    return storedStyle;
  }

  return defaultStyleSlug;
}

function writeStyleToUrl(slug: StyleSlug) {
  const url = new URL(window.location.href);
  url.searchParams.set("style", slug);
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

export function StyleProvider({ children }: { children: React.ReactNode }) {
  const [selectedStyle, setSelectedStyleState] = useState<StyleSlug>(defaultStyleSlug);

  useEffect(() => {
    queueMicrotask(() => {
      const initialStyle = readInitialStyle();
      if (initialStyle !== defaultStyleSlug) {
        setSelectedStyleState(initialStyle);
      }
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, selectedStyle);
  }, [selectedStyle]);

  useEffect(() => {
    const decodedImages: HTMLImageElement[] = [];

    for (const src of allDemoScreenshots) {
      const image = new Image();
      image.decoding = "async";
      image.src = src;
      void image.decode?.().catch(() => undefined);
      decodedImages.push(image);
    }

    return () => {
      decodedImages.length = 0;
    };
  }, []);

  const setSelectedStyle = useCallback((slug: StyleSlug) => {
    setSelectedStyleState(slug);
    window.localStorage.setItem(STORAGE_KEY, slug);
    writeStyleToUrl(slug);
  }, []);

  const value = useMemo<StyleContextValue>(() => {
    return {
      selectedStyle,
      style: getStyle(selectedStyle) ?? fronttasteStyles[0],
      setSelectedStyle,
    };
  }, [selectedStyle, setSelectedStyle]);

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
