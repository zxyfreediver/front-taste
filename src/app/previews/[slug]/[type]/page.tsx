import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PreviewRenderer } from "@/components/preview-renderer";
import { getPublishedStyle, previewTypes, styleSkills, type PreviewType } from "@/lib/fronttaste";

const previewLabels: Record<PreviewType, string> = {
  commerce: "Ecommerce",
  admin: "Admin Dashboard",
  auth: "Login & Auth",
  profile: "User Profile",
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string; type: string }> }): Promise<Metadata> {
  const { slug, type } = await params;
  const style = getPublishedStyle(slug);
  const label = previewLabels[type as PreviewType] ?? type;

  if (!style) {
    return { title: "Preview - FrontTaste" };
  }

  return {
    title: `${style.name} ${label} Preview - FrontTaste`,
    description: `${style.name}: ${style.tagline.en} See the "${label}" demo page rendered in this style.`,
    openGraph: {
      title: `${style.name} ${label} Preview - FrontTaste`,
      description: style.tagline.en,
    },
  };
}

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
