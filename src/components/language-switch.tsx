"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
import { useFronttasteStyle } from "@/components/style-provider";
import { otherLocale } from "@/lib/copy";
import type { Locale } from "@/lib/fronttaste";

export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const { selectedStyle } = useFronttasteStyle();
  const nextLocale = otherLocale(locale);
  const nextPath = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${nextLocale}`);
  const href = `${nextPath === pathname ? `/${nextLocale}` : nextPath}?style=${selectedStyle}`;

  return (
    <ButtonLink href={href} variant="ghost" size="sm">
      {label}
    </ButtonLink>
  );
}
