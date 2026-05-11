import { notFound } from "next/navigation";
import { ArrowLeft, Download } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { PreviewRenderer } from "@/components/preview-renderer";
import { downloadPath, getFronttasteStyle, previewTypes, publishedStyles, type PreviewType } from "@/lib/fronttaste";

export function generateStaticParams() {
  return publishedStyles.flatMap((style) =>
    previewTypes.map((type) => ({
      slug: style.slug,
      type,
    })),
  );
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string; type: string }>;
}) {
  const { slug, type } = await params;
  const style = getFronttasteStyle(slug);

  if (!style || !previewTypes.includes(type as PreviewType)) {
    notFound();
  }

  return (
    <div>
      <div className="sticky top-0 z-30 border-b border-zinc-200 bg-white/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <ButtonLink href={`/en/styles/${style.slug}`} variant="ghost" size="sm">
            <ArrowLeft className="size-4" />
            {style.name}
          </ButtonLink>
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-500">
            {type} preview
          </div>
          <ButtonLink href={downloadPath(style.slug)} size="sm" className="bg-zinc-950 text-white hover:bg-zinc-800">
            <Download className="size-4" />
            Skill
          </ButtonLink>
        </div>
      </div>
      <PreviewRenderer style={style} type={type as PreviewType} />
    </div>
  );
}
