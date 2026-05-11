"use client";

import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/button-link";
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
  const nextLocale = otherLocale(locale);
  const href = pathname.replace(/^\/(en|zh)(?=\/|$)/, `/${nextLocale}`);

  return (
    <ButtonLink href={href === pathname ? `/${nextLocale}` : href} variant="ghost" size="sm">
      {label}
    </ButtonLink>
  );
}
