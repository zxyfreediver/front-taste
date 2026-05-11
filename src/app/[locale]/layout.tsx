import { notFound } from "next/navigation";
import { SiteShell } from "@/components/site-shell";
import { isLocale, type Locale } from "@/lib/fronttaste";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <SiteShell locale={locale as Locale}>{children}</SiteShell>;
}
