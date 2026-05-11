import { ArrowRight, Download, Eye, Layers3 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PreviewRenderer } from "@/components/preview-renderer";
import { StyleCard } from "@/components/style-card";
import { copy } from "@/lib/copy";
import { publishedStyles, type Locale } from "@/lib/fronttaste";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const featured = publishedStyles.slice(0, 3);

  return (
    <>
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[.95fr_1.05fr] lg:px-8 lg:py-24">
        <div className="flex flex-col justify-center">
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-zinc-950 sm:text-7xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">{t.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={`/${locale}/styles`} size="lg" className="bg-zinc-950 text-white hover:bg-zinc-800">
              {t.hero.primary}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={`/${locale}/compare`} size="lg" variant="outline">
              {t.hero.secondary}
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-zinc-600 sm:grid-cols-3">
            {[
              ["6", t.stats.styles],
              ["18", t.stats.previews],
              ["0", t.stats.scripts],
            ].map(([value, label]) => (
              <div key={label} className="border-t border-zinc-200 pt-3">
                <div className="font-mono text-2xl font-semibold text-zinc-950">{value}</div>
                <div>{label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <PreviewRenderer style={publishedStyles[0]} type="landing" framed />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">{t.sections.published}</h2>
            <p className="mt-2 text-zinc-600">{t.sections.publishedIntro}</p>
          </div>
          <ButtonLink href={`/${locale}/styles`} variant="outline">
            {t.sections.viewAll} <ArrowRight className="size-4" />
          </ButtonLink>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {featured.map((style) => (
            <StyleCard key={style.slug} style={style} locale={locale} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <Card className="grid gap-8 border-zinc-200 bg-zinc-950 p-6 text-white shadow-sm lg:grid-cols-[.8fr_1.2fr] lg:p-8">
          <div>
            <Badge className="mb-5 rounded-md bg-white text-zinc-950 hover:bg-white">{t.sections.samePrompt}</Badge>
            <h2 className="text-3xl font-semibold tracking-tight">{t.comparePrompt}</h2>
            <p className="mt-4 text-zinc-300">{t.sections.compareBody}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {publishedStyles.slice(0, 3).map((style) => {
              const Icon = style.theme.icon;
              return (
                <div key={style.slug} className="rounded-lg border border-white/10 bg-white/5 p-4">
                  <Icon className="mb-8 size-6" style={{ color: style.theme.accent }} />
                  <h3 className="font-semibold">{style.name}</h3>
                  <p className="mt-2 text-sm text-zinc-300">{style.tagline[locale]}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          [Eye, t.valueCards.previewTitle, t.valueCards.previewBody],
          [Download, t.valueCards.downloadTitle, t.valueCards.downloadBody],
          [Layers3, t.valueCards.reuseTitle, t.valueCards.reuseBody],
        ].map(([Icon, title, body]) => (
          <Card key={title as string} className="border-zinc-200 bg-white p-5 shadow-sm">
            <Icon className="mb-8 size-6 text-zinc-950" />
            <h3 className="text-lg font-semibold">{title as string}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body as string}</p>
          </Card>
        ))}
      </section>
    </>
  );
}
