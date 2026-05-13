import { notFound } from "next/navigation";
import { PreviewRenderer } from "@/components/preview-renderer";
import { getPublishedStyle, previewTypes, styleSkills, type PreviewType } from "@/lib/fronttaste";

export function generateStaticParams() {
  return styleSkills.flatMap((style) =>
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
  const style = getPublishedStyle(slug);

  if (!style || !previewTypes.includes(type as PreviewType)) {
    notFound();
  }

  return <PreviewRenderer style={style} type={type as PreviewType} />;
}
