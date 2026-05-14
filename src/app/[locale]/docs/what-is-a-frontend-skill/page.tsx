import { Card } from "@/components/ui/card";
import { copy } from "@/lib/copy";
import type { Locale } from "@/lib/fronttaste";

export default async function WhatIsSkillPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const cards = copy[locale].docsWhat.cards;

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold tracking-tight">
        {isZh ? "什么是 frontend style Skill？" : "What is a frontend style Skill?"}
      </h1>
      <div className="mt-8 space-y-4 text-lg leading-8 text-zinc-700">
        <p>
          {isZh
            ? "Frontend style Skill 是一组可复用的 AI 编程指令，用来约束 AI 生成前端时的审美方向、布局规则、组件细节和检查清单。"
            : "A frontend style Skill is a reusable set of AI coding instructions that guides visual direction, layout rules, component details, and output checks."}
        </p>
        <p>
          {isZh
            ? "它不是模板。模板通常复制一次就结束；Skill 会持续影响后续页面，让同一个项目保持稳定审美。"
            : "It is not a template. A template is copied once; a Skill keeps shaping future pages so a project can retain the same taste."}
        </p>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {cards.map(({ title, body }) => (
          <Card key={title} className="border-zinc-200 bg-white p-5">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{body}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
