import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { StyleProvider } from "@/components/style-provider";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/fronttaste";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const t = copy[locale];
  const nav = [
    { href: `/${locale}#demo`, label: t.nav.demo },
    { href: `/${locale}#install`, label: t.nav.install },
    { href: `/${locale}#request`, label: t.nav.request },
  ];

  return (
    <StyleProvider>
      <div className="ft-shell">
        <header className="ft-shell-header">
          <div className="ft-shell-header-inner">
            <Link href={`/${locale}`} className="ft-brand" data-ui="brand">
              <span className="ft-brand-mark">FT</span>
              <span>FrontTaste</span>
            </Link>
            <nav className="ft-nav" aria-label="Primary navigation">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="ft-nav-link">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="ft-header-actions">
              <LanguageSwitch locale={locale} label={t.nav.language} />
              <a
                href="https://github.com/fronttaste/frontend-style-skills"
                target="_blank"
                rel="noreferrer"
                className="ft-header-action"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="ft-footer">
          <div className="ft-footer-line" />
          <div className="ft-footer-inner">
            <p>{t.footer.line}</p>
            <div className="ft-footer-links">
              <a href="mailto:zxyfreediver@gmail.com">{t.footer.contact}: zxyfreediver@gmail.com</a>
              <Link href={`/${locale}/docs/what-is-a-frontend-skill`}>{t.footer.what}</Link>
              <Link href={`/${locale}/changelog`} className="ft-inline-link">
                {t.footer.changelog} <ArrowUpRight className="size-3" />
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </StyleProvider>
  );
}
