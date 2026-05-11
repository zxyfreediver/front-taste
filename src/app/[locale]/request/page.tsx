import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Locale } from "@/lib/fronttaste";

export default async function RequestPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold tracking-tight">{isZh ? "提交你想要的风格" : "Request a style"}</h1>
      <p className="mt-4 text-lg leading-8 text-zinc-600">
        {isZh ? "MVP 阶段这个表单是静态占位，用来定义后续接入 waitlist/feedback 的界面。" : "This MVP form is static and defines the future waitlist and feedback surface."}
      </p>
      <Card className="mt-8 border-zinc-200 bg-white p-5">
        <div className="grid gap-4">
          <Input placeholder="your@email.com" />
          <Input placeholder={isZh ? "想要的风格名称" : "Style name you want"} />
          <Textarea placeholder={isZh ? "描述你想要的视觉方向、适合场景或参考产品" : "Describe the visual direction, use case, or references"} rows={6} />
          <Button className="bg-zinc-950 text-white hover:bg-zinc-800">{isZh ? "记录需求" : "Save request"}</Button>
        </div>
      </Card>
    </section>
  );
}
