import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const text = (path) => fs.readFileSync(path, "utf8");

const skill = text("public/skills/clay-play/SKILL.md").trim();
assert.equal(fs.existsSync("src/app/downloads/[slug]/route.ts"), false, "downloads should be served as static public zip files");
assert.match(text("src/lib/fronttaste.ts"), /`\/downloads\/\$\{slug\}\.skill\.zip`/, "downloadPath should point directly at the static zip");

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "fronttaste-review-"));
execFileSync("powershell", [
  "-NoProfile",
  "-Command",
  `Expand-Archive -LiteralPath 'public/downloads/clay-play.skill.zip' -DestinationPath '${tempDir}' -Force`,
]);
const zippedSkill = text(path.join(tempDir, "SKILL.md")).trim();
assert.equal(zippedSkill, skill, "clay-play download zip must contain the current public Skill");

const provider = text("src/components/style-provider.tsx");
assert.match(provider, /hasHydrated/, "StyleProvider must guard persistence until client hydration");
assert.match(provider, /if \(!hasHydrated\)/, "StyleProvider must not write default style before reading storage");

const immersiveHome = text("src/components/immersive-home.tsx");
assert.doesNotMatch(immersiveHome, /const installSteps/, "install steps should come from localized copy");
assert.match(immersiveHome, /t\.home\.installSteps/, "home install steps should use localized copy");

const carousel = text("src/components/preview-carousel.tsx");
assert.doesNotMatch(carousel, /MemoPilot demos|Same prompt, different products|Open/, "carousel visible labels should be localized");
assert.match(carousel, /locale/, "carousel should receive locale for localized copy");

const whatIsSkill = text("src/app/[locale]/docs/what-is-a-frontend-skill/page.tsx");
assert.doesNotMatch(whatIsSkill, /See real pages before installation|Download Markdown-only Skill files|Keep AI-generated frontend consistent/, "docs cards should be localized");

const rootLayout = text("src/app/layout.tsx");
assert.match(rootLayout, /HtmlLangSync/, "root layout should sync html lang for locale routes");
