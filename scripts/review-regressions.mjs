import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const text = (path) => fs.readFileSync(path, "utf8");

assert.equal(fs.existsSync("src/app/downloads/[slug]/route.ts"), false, "downloads should be served as static public zip files");
assert.match(text("src/lib/fronttaste.ts"), /`\/downloads\/\$\{slug\}\.skill\.zip`/, "downloadPath should point directly at the static zip");

const skillSlugs = fs.readdirSync("public/skills", { withFileTypes: true }).filter((entry) => entry.isDirectory()).map((entry) => entry.name);
for (const slug of skillSlugs) {
  const skill = text(`public/skills/${slug}/SKILL.md`).trim();
  assert.match(skill, /## Structure lock/, `${slug} Skill must preserve host structure and sizing`);

  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), `fronttaste-${slug}-`));
  execFileSync("powershell", [
    "-NoProfile",
    "-Command",
    `Expand-Archive -LiteralPath 'public/downloads/${slug}.skill.zip' -DestinationPath '${tempDir}' -Force`,
  ]);
  const zippedSkill = text(path.join(tempDir, "SKILL.md")).trim();
  assert.equal(zippedSkill, skill, `${slug} download zip must contain the current public Skill`);
}

const provider = text("src/components/style-provider.tsx");
assert.match(provider, /hasHydrated/, "StyleProvider must guard persistence until client hydration");
assert.match(provider, /if \(!hasHydrated\)/, "StyleProvider must not write default style before reading storage");

const immersiveHome = text("src/components/immersive-home.tsx");
assert.doesNotMatch(immersiveHome, /const installSteps/, "install steps should come from localized copy");
assert.match(immersiveHome, /t\.home\.installSteps/, "home install steps should use localized copy");

const previewTabs = text("src/components/preview-tabs.tsx");
assert.match(previewTabs, /PreviewRenderer/, "rendered demo tabs should embed the shared preview renderer");
assert.match(previewTabs, /locale/, "preview tabs should receive locale for localized copy");

const globals = text("src/app/globals.css");
const styleRulePattern = /([^{}]+)\{([^{}]*)\}/g;
const structuralStyleProperties = [
  "font-size",
  "line-height",
  "letter-spacing",
  "text-transform",
  "grid-template-columns",
  "padding",
  "padding-top",
  "padding-left",
  "margin-bottom",
  "min-height",
  "max-width",
  "float",
];
let styleRuleMatch;
while ((styleRuleMatch = styleRulePattern.exec(globals))) {
  const selector = styleRuleMatch[1].trim();
  const body = styleRuleMatch[2];

  if (!selector.includes("[data-style=")) {
    continue;
  }

  for (const property of structuralStyleProperties) {
    assert.doesNotMatch(
      body,
      new RegExp(`(^|\\n)\\s*${property}\\s*:`, "m"),
      `style-specific rules should not change structure or text sizing: ${selector} sets ${property}`,
    );
  }
}

const whatIsSkill = text("src/app/[locale]/docs/what-is-a-frontend-skill/page.tsx");
assert.doesNotMatch(whatIsSkill, /See real pages before installation|Download Markdown-only Skill files|Keep AI-generated frontend consistent/, "docs cards should be localized");

const rootLayout = text("src/app/layout.tsx");
assert.match(rootLayout, /HtmlLangSync/, "root layout should sync html lang for locale routes");
