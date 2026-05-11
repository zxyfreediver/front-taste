import { StyleCard } from "@/components/style-card";
import { copy } from "@/lib/copy";
import { plannedStyles, publishedStyles, type Locale } from "@/lib/fronttaste";

export default async function StylesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-3xl">
        <h1 className="text-5xl font-semibold tracking-tight">{t.sections.published}</h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600">{t.sections.styleListIntro}</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-3">
        {publishedStyles.map((style) => (
          <StyleCard key={style.slug} style={style} locale={locale} />
        ))}
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-semibold tracking-tight">{t.sections.planned}</h2>
        <p className="mt-2 text-zinc-600">{t.sections.plannedIntro}</p>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {plannedStyles.map((style) => (
            <StyleCard key={style.slug} style={style} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
