"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function localeFromPathname(pathname: string) {
  return pathname.startsWith("/zh") ? "zh" : "en";
}

export function HtmlLangSync() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.lang = localeFromPathname(pathname);
  }, [pathname]);

  return null;
}
