import { ImmersiveHome } from "@/components/immersive-home";
import type { Locale } from "@/lib/fronttaste";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <ImmersiveHome locale={locale} />;
}
