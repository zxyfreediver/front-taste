import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { PreviewRenderer } from "@/components/preview-renderer";
import { copy } from "@/lib/copy";
import { publishedStyles, type Locale } from "@/lib/fronttaste";

export default async function ComparePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">{t.sections.samePrompt}</h1>
        <p className="mt-4 font-mono text-lg text-zinc-600">Prompt: {t.comparePrompt}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {publishedStyles.map((style) => (
          <Card key={style.slug} className="overflow-hidden border-zinc-200 bg-white p-0">
            <PreviewRenderer style={style} type="landing" framed />
            <div className="flex items-center justify-between p-5">
              <div>
                <h2 className="text-xl font-semibold">{style.name}</h2>
                <p className="mt-1 text-sm text-zinc-600">{style.tagline[locale]}</p>
              </div>
              <ButtonLink href={`/${locale}/styles/${style.slug}`} variant="outline">
                {t.cta.details}
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
