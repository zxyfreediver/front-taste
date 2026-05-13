import { notFound, redirect } from "next/navigation";
import { getPublishedStyle, styleSkills, type Locale } from "@/lib/fronttaste";

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

  if (!style) {
    notFound();
  }

  redirect(`/${locale}?style=${style.slug}#demo`);
}
