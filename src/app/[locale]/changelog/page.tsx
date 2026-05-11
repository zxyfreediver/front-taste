import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/fronttaste";

export default async function ChangelogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold tracking-tight">{isZh ? "更新日志" : "Changelog"}</h1>
      <Card className="mt-8 border-zinc-200 bg-white p-5">
        <div className="font-mono text-sm text-zinc-500">2026-05-11</div>
        <h2 className="mt-2 text-2xl font-semibold">FrontTaste v0.1 MVP</h2>
        <p className="mt-3 text-zinc-600">
          {isZh
            ? "启动 6 个完整风格、18 个真实预览、双语主站和 Markdown-only Skill 下载。"
            : "Launched six complete styles, eighteen live previews, bilingual site pages, and Markdown-only Skill downloads."}
        </p>
      </Card>
    </section>
  );
}
