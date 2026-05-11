import { notFound } from "next/navigation";
import { ArrowRight, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { CopyInstallCommand } from "@/components/copy-install-command";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PreviewRenderer } from "@/components/preview-renderer";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";
import {
  downloadPath,
  getPublishedStyle,
  previewPath,
  styleSkills,
  type Locale,
  type PreviewType,
} from "@/lib/fronttaste";

export function generateStaticParams() {
  return styleSkills.flatMap((style) => [
    { locale: "en", slug: style.slug },
    { locale: "zh", slug: style.slug },
  ]);
}

export default async function StyleDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const style = getPublishedStyle(slug);
  if (!style) notFound();

  const t = copy[locale];
  const Icon = style.theme.icon;

  if (style.sourceType === "external") {
    const source = style.externalSource;
    return (
      <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <Badge variant="secondary" className="mb-5 rounded-md">
          External ready-made Skill
        </Badge>
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-start">
          <div>
            <Icon className="mb-8 size-9" style={{ color: style.theme.accent }} />
            <h1 className="text-5xl font-semibold tracking-tight">{style.name}</h1>
            <p className="mt-5 text-xl leading-8 text-zinc-600">{style.description[locale]}</p>
            <p className="mt-5 text-sm leading-6 text-zinc-500">{t.collections.externalDetail}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {source ? (
                <a
                  href={source.officialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(buttonVariants({ size: "lg" }), "bg-zinc-950 text-white hover:bg-zinc-800")}
                >
                  {t.cta.official}
                  <ExternalLink className="size-4" />
                </a>
              ) : null}
              <ButtonLink href={`/${locale}/styles`} size="lg" variant="outline">
                {t.cta.backToStyles}
              </ButtonLink>
            </div>
          </div>

          <Card className="border-zinc-200 bg-white p-5">
            <h2 className="text-2xl font-semibold">{t.labels.source}</h2>
            <div className="mt-5 space-y-4 text-sm leading-6">
              <div>
                <div className="font-mono text-xs uppercase text-zinc-500">{t.labels.provider}</div>
                <div className="text-zinc-800">{source?.provider ?? "External"}</div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase text-zinc-500">{t.labels.verified}</div>
                <div className="text-zinc-800">{source?.verifiedAt ?? "2026-05-11"}</div>
              </div>
              {source?.sourceUrl ? (
                <div>
                  <div className="font-mono text-xs uppercase text-zinc-500">{t.labels.sourceFile}</div>
                  <a href={source.sourceUrl} target="_blank" rel="noreferrer" className="break-all text-zinc-950 underline">
                    {source.sourceUrl}
                  </a>
                </div>
              ) : null}
            </div>
            {source?.installCommand ? (
              <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-semibold">{t.cta.installCommand}</h3>
                  <CopyInstallCommand command={source.installCommand} label={t.cta.copyInstall} copiedLabel={t.cta.copied} />
                </div>
                <code className="block break-all font-mono text-xs leading-6 text-zinc-700">{source.installCommand}</code>
              </div>
            ) : null}
          </Card>
        </div>
      </section>
    );
  }

  const previews: PreviewType[] = ["landing", "dashboard", "settings"];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <Badge variant="secondary" className="mb-5 rounded-md">
            FrontTaste Original
          </Badge>
          <h1 className="text-6xl font-semibold tracking-tight">{style.name}</h1>
          <p className="mt-5 text-xl leading-8 text-zinc-600">{style.description[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={downloadPath(style.slug)} size="lg" className="bg-zinc-950 text-white hover:bg-zinc-800">
              {t.cta.download}
              <Download className="size-4" />
            </ButtonLink>
            <ButtonLink href={previewPath(style.slug, "landing")} size="lg" variant="outline">
              {t.cta.preview}
              <ExternalLink className="size-4" />
            </ButtonLink>
          </div>
        </div>
        <PreviewRenderer style={style} type="landing" framed />
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-5">
        <Card className="border-zinc-200 bg-white p-5 lg:col-span-2">
          <Icon className="mb-8 size-7" style={{ color: style.theme.accent }} />
          <h2 className="text-2xl font-semibold">Visual DNA</h2>
          <div className="mt-5 space-y-4 text-sm leading-6">
            {Object.entries(style.visualDNA).map(([key, value]) => (
              <div key={key}>
                <div className="font-mono text-xs uppercase text-zinc-500">{key}</div>
                <div className="text-zinc-700">{value}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="border-zinc-200 bg-white p-5 lg:col-span-3">
          <h2 className="text-2xl font-semibold">What is inside</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              ["SKILL.md", "Trigger, usage, rules, and output checklist."],
              ["style-dna.md", "Typography, color, layout, motion, and density."],
              ["component-rules.md", "Buttons, cards, forms, tables, and states."],
              ["example-prompts.md", "Landing, dashboard, and settings prompts."],
            ].map(([title, body]) => (
              <div key={title} className="rounded-lg border border-zinc-200 p-4">
                <div className="font-semibold">{title}</div>
                <p className="mt-1 text-sm text-zinc-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            <ShieldCheck className="size-5" />
            Markdown only. No scripts. No external requests. MIT license.
          </div>
        </Card>
      </div>

      <div className="mt-14">
        <h2 className="text-3xl font-semibold tracking-tight">Live previews</h2>
        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {previews.map((type) => (
            <Card key={type} className="overflow-hidden border-zinc-200 bg-white p-0">
              <PreviewRenderer style={style} type={type} framed />
              <div className="flex items-center justify-between p-4">
                <span className="capitalize">{type}</span>
                <ButtonLink href={previewPath(style.slug, type)} size="sm" variant="outline">
                  Open <ArrowRight className="size-4" />
                </ButtonLink>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
