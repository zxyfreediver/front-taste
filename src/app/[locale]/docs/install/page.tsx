import { Download, FolderDown, MousePointer2 } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Card } from "@/components/ui/card";
import { copy } from "@/lib/copy";
import { publishedStyles, type Locale } from "@/lib/fronttaste";

export default async function InstallPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = copy[locale];
  const steps = [
    ["ChatGPT / Codex", "Download skill.zip and install it in your Skills workflow."],
    ["Claude Code", "Use the skill folder or zip. Keep SKILL.md at the root of the skill directory."],
    ["Cursor", "Copy the generated rules markdown into .cursor/rules/."],
    ["Windsurf", "Copy the plain rules markdown into the Windsurf rules file."],
    ["Plain SKILL.md", "Use the Markdown instructions with any AI coding agent that supports reusable rules."],
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-semibold tracking-tight">{t.sections.install}</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.installPage.safe}</p>
      <div className="mt-10 grid gap-4">
        {steps.map(([title, body], index) => (
          <Card key={title} className="border-zinc-200 bg-white p-5">
            <div className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-zinc-950 font-mono text-sm text-white">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="mt-1 text-zinc-600">{body}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="mt-10 border-zinc-200 bg-white p-5">
        <h2 className="text-2xl font-semibold">{t.installPage.downloads}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {publishedStyles.map((style) => (
            <ButtonLink key={style.slug} href={`/downloads/${style.slug}`} variant="outline" className="justify-start">
              <Download className="size-4" />
              {style.name}
            </ButtonLink>
          ))}
        </div>
      </Card>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="border-zinc-200 bg-white p-5">
          <FolderDown className="mb-8 size-6" />
          <h3 className="font-semibold">{t.installPage.folderTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{t.installPage.folderBody}</p>
        </Card>
        <Card className="border-zinc-200 bg-white p-5">
          <MousePointer2 className="mb-8 size-6" />
          <h3 className="font-semibold">{t.installPage.previewTitle}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{t.installPage.previewBody}</p>
        </Card>
      </div>
    </section>
  );
}
