import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/fronttaste";
import { cn } from "@/lib/utils";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = copy[locale];
  const nav = [
    { href: `/${locale}/styles`, label: t.nav.styles },
    { href: `/${locale}/compare`, label: t.nav.compare },
    { href: `/${locale}/docs/install`, label: t.nav.install },
    { href: `/${locale}/request`, label: t.nav.request },
  ];

  return (
    <div className="min-h-screen bg-[#f6f5f1] text-zinc-950">
      <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#f6f5f1]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex size-8 items-center justify-center rounded-md bg-zinc-950 text-sm text-white">
              FT
            </span>
            <span>FrontTaste</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-zinc-950">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageSwitch locale={locale} label={t.nav.language} />
            <a
              href="https://github.com/fronttaste/frontend-style-skills"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ size: "sm" }), "hidden bg-zinc-950 text-white hover:bg-zinc-800 sm:inline-flex")}
            >
              GitHub
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Separator className="mb-6 bg-zinc-200" />
        <div className="flex flex-col gap-4 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.line}</p>
          <div className="flex flex-wrap gap-4">
            <a href="mailto:zxyfreediver@gmail.com" className="hover:text-zinc-950">
              {t.footer.contact}: zxyfreediver@gmail.com
            </a>
            <Link href={`/${locale}/docs/what-is-a-frontend-skill`} className="hover:text-zinc-950">
              {t.footer.what}
            </Link>
            <Link href={`/${locale}/changelog`} className="inline-flex items-center gap-1 hover:text-zinc-950">
              {t.footer.changelog} <ArrowUpRight className="size-3" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
