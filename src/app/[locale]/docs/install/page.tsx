import { redirect } from "next/navigation";
import type { Locale } from "@/lib/fronttaste";

export default async function InstallPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  redirect(`/${locale}#install`);
}
