import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/fronttaste";
import { cn } from "@/lib/utils";

const contactEmail = "zxyfreediver@gmail.com";

export default async function RequestPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale].requestPage;
  const subject = encodeURIComponent("FrontTaste style request");
  const body = encodeURIComponent(
    locale === "zh"
      ? "你好，我想给 FrontTaste 提一个新风格需求：\n\n产品类型：\n想要的视觉气质：\n参考产品或网站：\n补充说明："
      : "Hi, I want to request a FrontTaste style:\n\nProduct type:\nDesired visual mood:\nReference products or sites:\nNotes:",
  );
  const mailto = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{t.title}</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-600">{t.body}</p>
      <Card className="mt-8 border-zinc-200 bg-white p-6">
        <Mail className="mb-8 size-7 text-zinc-950" />
        <div className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">{t.emailLabel}</div>
        <a href={`mailto:${contactEmail}`} className="mt-2 block text-2xl font-semibold tracking-tight text-zinc-950 hover:underline">
          {contactEmail}
        </a>
        <p className="mt-4 text-sm leading-6 text-zinc-600">{t.note}</p>
        <a href={mailto} className={cn(buttonVariants({ size: "lg" }), "mt-6 bg-zinc-950 text-white hover:bg-zinc-800")}>
          <Mail className="size-4" />
          {t.button}
        </a>
      </Card>
    </section>
  );
}
