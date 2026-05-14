import { ArrowRight } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { copy } from "@/lib/copy";
import { downloadPath, previewPath, type Locale, type StyleSkill } from "@/lib/fronttaste";

export function StyleCard({ style, locale }: { style: StyleSkill; locale: Locale }) {
  const t = copy[locale];
  const Icon = style.theme.icon;

  return (
    <Card className="overflow-hidden border-zinc-200 bg-white p-0 shadow-sm">
      <div
        className="min-h-48 border-b p-5"
        style={{
          background: `${style.theme.pattern}, ${style.theme.bg}`,
          borderColor: style.theme.border,
          color: style.theme.text,
        }}
      >
        <div
          className="flex h-full min-h-36 flex-col justify-between border p-4"
          style={{
            background: style.theme.surface,
            borderColor: style.theme.border,
            borderRadius: style.theme.radius,
            boxShadow: style.theme.shadow,
          }}
        >
          <div className="flex items-start justify-between gap-4">
            <Icon className="size-7" style={{ color: style.theme.accent }} />
            <span className="font-mono text-xs" style={{ color: style.theme.muted }}>
              fronttaste
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">{style.name}</h3>
            <p className="mt-2 max-w-sm text-sm" style={{ color: style.theme.muted }}>
              {style.tagline[locale]}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-5 p-5">
        <div className="flex flex-wrap gap-2">
          {style.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-md">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-sm leading-6 text-zinc-600">{style.description[locale]}</p>
        <div className="flex flex-wrap gap-2">
          <ButtonLink href={`/${locale}/styles/${style.slug}`} size="sm" className="bg-zinc-950 text-white hover:bg-zinc-800">
            {t.cta.details}
            <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href={previewPath(style.slug, "commerce")} size="sm" variant="outline">
            {t.cta.preview}
          </ButtonLink>
          <ButtonLink href={downloadPath(style.slug)} size="sm" variant="ghost">
            {t.cta.download}
          </ButtonLink>
        </div>
      </div>
    </Card>
  );
}
