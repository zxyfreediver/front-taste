import {
  BarChart3,
  Bot,
  Boxes,
  Braces,
  Building2,
  CircuitBoard,
  FileText,
  Gem,
  Grid3X3,
  Layers3,
  MonitorCog,
  Palette,
  PenTool,
  Shapes,
  Sparkles,
  SwatchBook,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

export type Locale = "en" | "zh";
export type StyleStatus = "published" | "planned";
export type PreviewType = "landing" | "dashboard" | "settings";
export type SkillSourceType = "fronttaste" | "external";
export type SkillCollection = "FrontTaste Originals" | "External Ready-made Skills";

export type ExternalSkillSource = {
  provider: string;
  officialUrl: string;
  sourceUrl?: string;
  installCommand?: string;
  verifiedAt: string;
};

export type StyleSkill = {
  slug: string;
  name: string;
  status: StyleStatus;
  sourceType: SkillSourceType;
  collection: SkillCollection;
  localDownloadPath?: string;
  externalSource?: ExternalSkillSource;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  useCases: string[];
  stack: string[];
  compatibleAgents: string[];
  theme: StyleTheme;
  visualDNA: {
    typography: string;
    color: string;
    layout: string;
    motion: string;
    density: string;
  };
  skillMeta: {
    fileSize: string;
    hasScripts: boolean;
    hasExternalRequests: boolean;
    lastUpdated: string;
    license: string;
  };
};

export type StyleTheme = {
  icon: LucideIcon;
  bg: string;
  surface: string;
  surfaceAlt: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accentText: string;
  radius: string;
  shadow: string;
  pattern: string;
  density: "loose" | "balanced" | "compact";
};

export const locales: Locale[] = ["en", "zh"];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const previewTypes: PreviewType[] = ["landing", "dashboard", "settings"];

const originalCommon = {
  status: "published" as const,
  sourceType: "fronttaste" as const,
  collection: "FrontTaste Originals" as const,
  stack: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  compatibleAgents: ["ChatGPT", "Codex", "Claude Code", "Cursor"],
  skillMeta: {
    fileSize: "18KB",
    hasScripts: false,
    hasExternalRequests: false,
    lastUpdated: "2026-05-11",
    license: "MIT",
  },
};

function originalSkill(skill: Omit<StyleSkill, keyof typeof originalCommon | "localDownloadPath" | "externalSource">): StyleSkill {
  return {
    ...skill,
    ...originalCommon,
    localDownloadPath: `/downloads/${skill.slug}`,
  };
}

function externalSkill(skill: Omit<StyleSkill, "status" | "sourceType" | "collection" | "localDownloadPath" | "skillMeta">): StyleSkill {
  return {
    ...skill,
    status: "published",
    sourceType: "external",
    collection: "External Ready-made Skills",
    skillMeta: {
      fileSize: "External",
      hasScripts: false,
      hasExternalRequests: true,
      lastUpdated: skill.externalSource?.verifiedAt ?? "2026-05-11",
      license: "See official source",
    },
  };
}

export const fronttasteOriginals: StyleSkill[] = [
  originalSkill({
    slug: "quiet-saas",
    name: "Quiet SaaS",
    tagline: {
      en: "Calm, premium SaaS interfaces for AI tools.",
      zh: "克制、柔和、适合 AI 工具的高级 SaaS 审美。",
    },
    description: {
      en: "A restrained style for product marketing, onboarding, pricing, and dashboards that should feel trustworthy without looking generic.",
      zh: "适合产品官网、onboarding、pricing 和 dashboard 的克制风格，可信但不模板化。",
    },
    tags: ["SaaS", "Landing", "Dashboard", "Light", "Minimal"],
    useCases: ["AI tools", "B2B SaaS", "Product marketing", "Pricing"],
    theme: {
      icon: Sparkles,
      bg: "#f7f6f2",
      surface: "#ffffff",
      surfaceAlt: "#eeece6",
      text: "#171717",
      muted: "#6d6a62",
      border: "#dedbd2",
      accent: "#3e7668",
      accentText: "#ffffff",
      radius: "14px",
      shadow: "0 22px 70px rgba(36, 38, 34, 0.12)",
      pattern: "linear-gradient(135deg, rgba(62,118,104,.12), transparent 38%)",
      density: "loose",
    },
    visualDNA: {
      typography: "Clear, precise, high-readability hierarchy.",
      color: "Muted neutrals with one restrained green accent.",
      layout: "Generous whitespace, centered sections, calm grids.",
      motion: "Subtle fade and slide transitions.",
      density: "Medium-low information density.",
    },
  }),
  originalSkill({
    slug: "precision-ops",
    name: "Precision Ops",
    tagline: {
      en: "Compact operational interfaces for dashboards and admins.",
      zh: "面向 dashboard 和 admin 的紧凑、清晰运营界面。",
    },
    description: {
      en: "A sharp product-ops system for dense data, status surfaces, tables, filters, and production-like admin workflows.",
      zh: "适合高密度数据、状态面板、表格、筛选器和真实后台流程的产品运营风格。",
    },
    tags: ["Ops", "Admin", "Dashboard", "Data", "Compact"],
    useCases: ["Admin panels", "Team analytics", "Operations", "Back office"],
    theme: {
      icon: MonitorCog,
      bg: "#f4f7fb",
      surface: "#ffffff",
      surfaceAlt: "#e8eef7",
      text: "#0d1625",
      muted: "#596579",
      border: "#ccd7e5",
      accent: "#2251d1",
      accentText: "#ffffff",
      radius: "8px",
      shadow: "0 18px 50px rgba(15, 35, 74, 0.15)",
      pattern: "linear-gradient(90deg, rgba(34,81,209,.12) 1px, transparent 1px)",
      density: "compact",
    },
    visualDNA: {
      typography: "Small, legible, system-like labels and metrics.",
      color: "Cool light surfaces, blue action states, crisp borders.",
      layout: "Split panes, tables, status rows, predictable controls.",
      motion: "Fast utility transitions.",
      density: "High information density.",
    },
  }),
  originalSkill({
    slug: "luxury-noir",
    name: "Luxury Noir",
    tagline: {
      en: "Dark cinematic interfaces for premium AI and finance.",
      zh: "适合高端 AI、金融和会员产品的暗色精品审美。",
    },
    description: {
      en: "A premium dark style with restrained metallic warmth, editorial spacing, and product surfaces that feel expensive.",
      zh: "暗色、金属暖调、编辑式留白与高质感产品界面组合成的高级风格。",
    },
    tags: ["Dark", "Premium", "Finance", "Cinematic", "Luxury"],
    useCases: ["Premium AI", "Finance", "Membership", "Founder products"],
    theme: {
      icon: Gem,
      bg: "#090806",
      surface: "#14110d",
      surfaceAlt: "#211a12",
      text: "#f5ead8",
      muted: "#b9a98e",
      border: "#3d3021",
      accent: "#c9a15d",
      accentText: "#15100a",
      radius: "10px",
      shadow: "0 30px 80px rgba(0, 0, 0, 0.45)",
      pattern: "radial-gradient(circle at 20% 0%, rgba(201,161,93,.22), transparent 32%)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Elegant contrast, larger headings, refined labels.",
      color: "Blackened surfaces with brass accent and warm text.",
      layout: "Cinematic sections, premium panels, deliberate spacing.",
      motion: "Slow fades and subtle reveals.",
      density: "Medium information density.",
    },
  }),
  originalSkill({
    slug: "brutal-grid",
    name: "Brutal Grid",
    tagline: {
      en: "Bold asymmetric pages for open-source and design tools.",
      zh: "适合开源项目和设计工具的强对比、粗网格风格。",
    },
    description: {
      en: "A direct, high-contrast system with hard borders, asymmetric grids, oversized type, and unapologetic interaction states.",
      zh: "硬边框、不对称网格、大字号和强交互状态构成的直接表达系统。",
    },
    tags: ["Brutalist", "Grid", "Open Source", "High Contrast"],
    useCases: ["Open-source tools", "Design tools", "Dev products", "Launches"],
    theme: {
      icon: Grid3X3,
      bg: "#f8f24b",
      surface: "#fffef2",
      surfaceAlt: "#151515",
      text: "#111111",
      muted: "#3b3b3b",
      border: "#111111",
      accent: "#ff4d00",
      accentText: "#111111",
      radius: "0px",
      shadow: "10px 10px 0 #111111",
      pattern: "linear-gradient(90deg, rgba(17,17,17,.16) 1px, transparent 1px), linear-gradient(rgba(17,17,17,.16) 1px, transparent 1px)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Large, blunt, highly structured hierarchy.",
      color: "High-contrast black, off-white, yellow, and orange.",
      layout: "Asymmetric grids, exposed borders, sharp modules.",
      motion: "Immediate state changes and punchy hover offsets.",
      density: "Medium information density.",
    },
  }),
  originalSkill({
    slug: "editorial-launch",
    name: "Editorial Launch",
    tagline: {
      en: "Magazine-like launches for founders and content products.",
      zh: "适合创始人主页和内容产品的杂志式发布风格。",
    },
    description: {
      en: "An editorial style for narrative launches, founder-led pages, essays, changelogs, and thoughtful product storytelling.",
      zh: "为叙事型发布、创始人主页、文章、更新日志和产品故事准备的编辑风格。",
    },
    tags: ["Editorial", "Launch", "Content", "Story"],
    useCases: ["Founder pages", "Content products", "Product essays", "Launch pages"],
    theme: {
      icon: FileText,
      bg: "#fbf5ea",
      surface: "#fffaf1",
      surfaceAlt: "#ede1cc",
      text: "#201915",
      muted: "#715f50",
      border: "#d8c8ae",
      accent: "#9f3d25",
      accentText: "#fff8ed",
      radius: "6px",
      shadow: "0 22px 60px rgba(69, 45, 25, 0.14)",
      pattern: "linear-gradient(180deg, rgba(159,61,37,.12), transparent 44%)",
      density: "loose",
    },
    visualDNA: {
      typography: "Editorial scale, strong headlines, readable prose.",
      color: "Paper tones, warm ink, restrained clay accent.",
      layout: "Article rhythm, side notes, feature-led sections.",
      motion: "Quiet section reveals.",
      density: "Medium-low information density.",
    },
  }),
  originalSkill({
    slug: "cyber-infra",
    name: "Cyber Infra",
    tagline: {
      en: "Terminal-like interfaces for security and developer tools.",
      zh: "适合安全、开发者工具和基础设施产品的终端感风格。",
    },
    description: {
      en: "A technical dark style with terminal panels, protocol details, infrastructure maps, and sharp green signal states.",
      zh: "终端面板、协议细节、基础设施地图和绿色状态信号组成的技术暗色风格。",
    },
    tags: ["Cyber", "Infra", "Terminal", "Security", "Dark"],
    useCases: ["Security", "Developer tools", "Infra", "Monitoring"],
    theme: {
      icon: CircuitBoard,
      bg: "#05100d",
      surface: "#0b1a16",
      surfaceAlt: "#102821",
      text: "#dcfff4",
      muted: "#82b7a7",
      border: "#1f4c3d",
      accent: "#30e69b",
      accentText: "#04100c",
      radius: "4px",
      shadow: "0 25px 70px rgba(17, 255, 157, 0.12)",
      pattern: "linear-gradient(90deg, rgba(48,230,155,.12) 1px, transparent 1px), linear-gradient(rgba(48,230,155,.08) 1px, transparent 1px)",
      density: "compact",
    },
    visualDNA: {
      typography: "Mono-heavy labels, technical hierarchy, compact metrics.",
      color: "Dark green-black surfaces with electric signal accents.",
      layout: "Terminal panels, command rows, network maps.",
      motion: "Scanning, status pulses, fast feedback.",
      density: "High information density.",
    },
  }),
  originalSkill({
    slug: "playful-bento",
    name: "Playful Bento",
    tagline: {
      en: "Colorful modular pages for consumer and creative apps.",
      zh: "适合消费级和创意工具的彩色模块化风格。",
    },
    description: {
      en: "A cheerful style for consumer apps, creator tools, lightweight onboarding, and playful product surfaces that still need structure.",
      zh: "适合消费级应用、创意工具和轻量 onboarding 的明亮模块化风格，活泼但不散乱。",
    },
    tags: ["Consumer", "Creative", "Bento", "Colorful"],
    useCases: ["Consumer apps", "Creative tools", "Personal products"],
    theme: {
      icon: Boxes,
      bg: "#fff7db",
      surface: "#ffffff",
      surfaceAlt: "#ffe9a8",
      text: "#1b1830",
      muted: "#786f58",
      border: "#ead489",
      accent: "#ff7a59",
      accentText: "#1b1830",
      radius: "18px",
      shadow: "0 20px 58px rgba(255, 122, 89, 0.16)",
      pattern: "radial-gradient(circle at 15% 10%, rgba(80,151,255,.20), transparent 28%), radial-gradient(circle at 85% 20%, rgba(255,122,89,.20), transparent 24%)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Friendly rounded hierarchy with clear product labels.",
      color: "Warm yellow base, coral actions, small blue moments.",
      layout: "Bento modules, playful offsets, stable responsive tiles.",
      motion: "Small, tactile hover lifts and soft transitions.",
      density: "Medium information density.",
    },
  }),
  originalSkill({
    slug: "calm-workspace",
    name: "Calm Workspace",
    tagline: {
      en: "Quiet workspace surfaces for docs and collaboration.",
      zh: "适合知识库和协作工具的克制 workspace 风格。",
    },
    description: {
      en: "A document-first style for knowledge bases, collaboration spaces, project notes, and work surfaces that should feel calm and durable.",
      zh: "以文档为核心，适合知识库、协作空间和项目记录的安静耐看型界面。",
    },
    tags: ["Workspace", "Docs", "Collaboration"],
    useCases: ["Knowledge bases", "Collaboration", "Docs"],
    theme: {
      icon: Layers3,
      bg: "#f3f1eb",
      surface: "#fffdf8",
      surfaceAlt: "#e7e2d8",
      text: "#20201d",
      muted: "#6f6a60",
      border: "#d8d1c2",
      accent: "#6f8f83",
      accentText: "#ffffff",
      radius: "10px",
      shadow: "0 18px 54px rgba(53, 48, 40, 0.12)",
      pattern: "linear-gradient(180deg, rgba(111,143,131,.12), transparent 42%)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Document rhythm with readable headings and quiet metadata.",
      color: "Warm workspace neutrals with a muted sage accent.",
      layout: "Sidebars, document columns, calm panels, and collaboration cues.",
      motion: "Subtle focus and selected states.",
      density: "Medium information density.",
    },
  }),
  originalSkill({
    slug: "glass-agent",
    name: "Glass Agent",
    tagline: {
      en: "Layered translucent interfaces for AI agents.",
      zh: "适合 AI agent 和聊天产品的半透明层叠风格。",
    },
    description: {
      en: "A layered style for agent timelines, assistant chat, tool calls, and AI workflow products that need depth without visual noise.",
      zh: "适合 agent 时间线、聊天、工具调用和 AI 工作流产品的轻透明层叠风格。",
    },
    tags: ["AI Agent", "Chat", "Glass", "Layered"],
    useCases: ["AI agents", "Chat products", "Assistants"],
    theme: {
      icon: Bot,
      bg: "#eef5ff",
      surface: "rgba(255,255,255,0.78)",
      surfaceAlt: "rgba(226,237,255,0.72)",
      text: "#132033",
      muted: "#637084",
      border: "rgba(133,160,196,0.45)",
      accent: "#5b7cfa",
      accentText: "#ffffff",
      radius: "16px",
      shadow: "0 24px 70px rgba(40, 74, 130, 0.16)",
      pattern: "radial-gradient(circle at 20% 10%, rgba(91,124,250,.18), transparent 30%), radial-gradient(circle at 80% 0%, rgba(96,211,196,.16), transparent 26%)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Precise UI labels with soft assistant-style hierarchy.",
      color: "Cool blue glass layers with controlled contrast.",
      layout: "Layered panels, agent timelines, message surfaces, and tool call cards.",
      motion: "Light reveals, progress states, and gentle depth changes.",
      density: "Medium information density.",
    },
  }),
  originalSkill({
    slug: "dense-analytics",
    name: "Dense Analytics",
    tagline: {
      en: "Dense BI and trading surfaces for data-heavy products.",
      zh: "适合 BI、数据产品和交易后台的高信息密度风格。",
    },
    description: {
      en: "A high-density style for BI dashboards, trading consoles, analytics products, and data-heavy operational tools.",
      zh: "适合 BI dashboard、交易后台、数据产品和高密度运营工具的专业界面。",
    },
    tags: ["BI", "Analytics", "Trading", "Dense"],
    useCases: ["BI", "Trading", "Analytics", "Data products"],
    theme: {
      icon: BarChart3,
      bg: "#111827",
      surface: "#172033",
      surfaceAlt: "#202b43",
      text: "#eef4ff",
      muted: "#9fb0ca",
      border: "#33415f",
      accent: "#72a7ff",
      accentText: "#08111f",
      radius: "6px",
      shadow: "0 20px 60px rgba(0, 0, 0, 0.28)",
      pattern: "linear-gradient(90deg, rgba(114,167,255,.10) 1px, transparent 1px), linear-gradient(rgba(114,167,255,.08) 1px, transparent 1px)",
      density: "compact",
    },
    visualDNA: {
      typography: "Compact mono metrics and table-first hierarchy.",
      color: "Deep navy surfaces with blue data highlights.",
      layout: "Metric grids, filters, split charts, and dense comparison rows.",
      motion: "Fast state updates and minimal animated feedback.",
      density: "Very high information density.",
    },
  }),
  originalSkill({
    slug: "hardware-premium",
    name: "Hardware Premium",
    tagline: {
      en: "Minimal product pages for hardware and polished app launches.",
      zh: "适合硬件和 App 官网的大图极简质感风格。",
    },
    description: {
      en: "A refined product style for hardware launches, device pages, polished app websites, and premium product storytelling.",
      zh: "适合硬件发布页、设备官网、精品 App 官网和高质感产品叙事。",
    },
    tags: ["Hardware", "Product", "Minimal", "Premium"],
    useCases: ["Hardware", "App launches", "Product sites"],
    theme: {
      icon: Building2,
      bg: "#f0f0ed",
      surface: "#ffffff",
      surfaceAlt: "#d9d9d2",
      text: "#111111",
      muted: "#6b6b66",
      border: "#d0d0c9",
      accent: "#2f3136",
      accentText: "#ffffff",
      radius: "12px",
      shadow: "0 28px 80px rgba(35, 35, 32, 0.14)",
      pattern: "linear-gradient(145deg, rgba(0,0,0,.08), transparent 35%)",
      density: "loose",
    },
    visualDNA: {
      typography: "Quiet premium hierarchy with product-led pacing.",
      color: "True neutrals, soft metal tones, and restrained dark actions.",
      layout: "Large product moments, precise spec rows, and minimal framing.",
      motion: "Slow product reveals and smooth section transitions.",
      density: "Low-to-medium information density.",
    },
  }),
  originalSkill({
    slug: "retro-future",
    name: "Retro Future",
    tagline: {
      en: "Retro neon surfaces for games, creative coding, and Web3.",
      zh: "适合游戏、创意 coding 和 Web3 的复古未来风格。",
    },
    description: {
      en: "A high-character style for games, creative coding tools, Web3 communities, and expressive launch pages with retro-future energy.",
      zh: "适合游戏、创意 coding、Web3 社区和表达型发布页的复古未来风格。",
    },
    tags: ["Retro", "Neon", "Game", "Web3"],
    useCases: ["Games", "Creative coding", "Web3", "Communities"],
    theme: {
      icon: Braces,
      bg: "#160d2b",
      surface: "#24163d",
      surfaceAlt: "#331f52",
      text: "#fff7ff",
      muted: "#cab7e8",
      border: "#62448f",
      accent: "#ff79c6",
      accentText: "#160d2b",
      radius: "8px",
      shadow: "0 24px 70px rgba(255, 121, 198, 0.18)",
      pattern: "linear-gradient(90deg, rgba(255,121,198,.16) 1px, transparent 1px), linear-gradient(rgba(83,255,219,.10) 1px, transparent 1px)",
      density: "balanced",
    },
    visualDNA: {
      typography: "Retro display moments with readable UI text.",
      color: "Purple night base, neon pink and cyan signal accents.",
      layout: "Pixel grids, arcade panels, expressive hero rhythm.",
      motion: "Scanline-inspired transitions and crisp hover feedback.",
      density: "Medium information density.",
    },
  }),
];

const externalTheme = (icon: LucideIcon, accent: string): StyleTheme => ({
  icon,
  bg: "#f6f5f1",
  surface: "#ffffff",
  surfaceAlt: "#efede6",
  text: "#171717",
  muted: "#6b675f",
  border: "#dedbd2",
  accent,
  accentText: "#ffffff",
  radius: "10px",
  shadow: "0 18px 54px rgba(24, 24, 20, 0.1)",
  pattern: "linear-gradient(135deg, rgba(0,0,0,.06), transparent 42%)",
  density: "balanced",
});

const externalCommon = {
  stack: ["Skill", "Prompting", "Frontend design"],
  compatibleAgents: ["Claude Code", "Codex", "ChatGPT", "Cursor"],
};

export const externalDesignSkills: StyleSkill[] = [
  externalSkill({
    slug: "anthropic-frontend-design",
    name: "Anthropic Frontend Design",
    tagline: {
      en: "Official Claude frontend design Skill for distinctive, production-grade UI.",
      zh: "Claude 官方前端设计 Skill，强调高质量、非模板化 UI。",
    },
    description: {
      en: "A strong external reference for anti-generic frontend design, visual craft, and production-grade interface direction.",
      zh: "非常适合作为 anti-generic 前端审美参考，覆盖视觉质量、界面完成度和生产级设计要求。",
    },
    tags: ["Official", "Claude", "Frontend Design", "Anti-generic"],
    useCases: ["Frontend design", "UI taste", "Production UI"],
    ...externalCommon,
    theme: externalTheme(Palette, "#5c6bc0"),
    visualDNA: externalDNA("Official Claude frontend design workflow with strong anti-generic taste constraints."),
    externalSource: {
      provider: "Anthropic / Claude",
      officialUrl: "https://claude.com/plugins/frontend-design",
      sourceUrl: "https://github.com/anthropics/claude-code/blob/main/plugins/frontend-design/skills/frontend-design/SKILL.md",
      verifiedAt: "2026-05-11",
    },
  }),
  externalSkill({
    slug: "openai-frontend-skill",
    name: "OpenAI Frontend Skill",
    tagline: {
      en: "OpenAI curated frontend Skill for visual quality, composition, imagery, and motion.",
      zh: "OpenAI curated 前端 Skill，强调构图、图像、动效和整体视觉质量。",
    },
    description: {
      en: "A curated external Skill for building visually stronger landing pages, apps, dashboards, and games with better hierarchy and restraint.",
      zh: "适合参考更强的 landing、app、dashboard 和 game UI 生成标准，重点是层级、克制和视觉完整度。",
    },
    tags: ["Official", "OpenAI", "Curated", "Frontend"],
    useCases: ["Landing pages", "Apps", "Dashboards", "Games"],
    ...externalCommon,
    theme: externalTheme(Sparkles, "#111111"),
    visualDNA: externalDNA("OpenAI curated frontend visual-quality guidance."),
    externalSource: {
      provider: "OpenAI",
      officialUrl: "https://officialskills.sh/openai/skills/frontend-skill",
      sourceUrl: "https://github.com/openai/skills/blob/main/skills/.curated/frontend-skill/SKILL.md",
      verifiedAt: "2026-05-11",
    },
  }),
  ...[
    ["design-taste-frontend", "Taste Skill", "Default anti-slop frontend taste framework.", "默认 anti-slop 前端审美框架。"],
    ["gpt-taste", "GPT Taste", "Taste Skill variant tuned for GPT and Codex workflows.", "面向 GPT / Codex 工作流的 Taste Skill 变体。"],
    ["minimalist-ui", "Minimalist UI", "Minimal, editorial, clarity-first Taste Skill variant.", "极简、编辑感、清晰结构优先的 Taste Skill 变体。"],
    ["industrial-brutalist-ui", "Industrial Brutalist UI", "Raw mechanical and brutalist Taste Skill variant.", "粗粝、机械、brutalist 方向的 Taste Skill 变体。"],
    ["high-end-visual-design", "High-end Visual Design", "Premium visual-design Taste Skill variant.", "高端视觉设计方向的 Taste Skill 变体。"],
    ["redesign-existing-projects", "Redesign Existing Projects", "Taste Skill workflow for visual audits and redesigns.", "用于现有项目视觉审计和重设计的 Taste Skill 工作流。"],
    ["imagegen-frontend-web", "Imagegen Frontend Web", "Taste Skill workflow for generating frontend web reference images.", "用于生成前端网页参考图的 Taste Skill 工作流。"],
  ].map(([slug, name, en, zh]) =>
    externalSkill({
      slug,
      name,
      tagline: { en, zh },
      description: {
        en: "Part of the Taste Skill family. Included as an external ready-made Skill because it provides a clear reusable design direction.",
        zh: "Taste Skill 系列的一部分。作为现成外部 Skill 收录，因为它提供了明确可复用的审美方向。",
      },
      tags: ["Taste Skill", "External", "Design Taste"],
      useCases: ["Style exploration", "Frontend generation", "Design rules"],
      ...externalCommon,
      theme: externalTheme(SwatchBook, "#9f3dff"),
      visualDNA: externalDNA(`Taste Skill variant: ${name}.`),
      externalSource: {
        provider: "Taste Skill",
        officialUrl: "https://www.tasteskill.dev/",
        sourceUrl: "https://github.com/Leonxlnx/taste-skill",
        installCommand: `npx skills add https://github.com/Leonxlnx/taste-skill --skill ${slug}`,
        verifiedAt: "2026-05-11",
      },
    }),
  ),
  externalSkill({
    slug: "microsoft-frontend-ui-dark-ts",
    name: "Microsoft frontend-ui-dark-ts",
    tagline: {
      en: "Dark React UI system Skill for dashboards, admin, and data-heavy products.",
      zh: "微软 agent-skills 中的暗色 React UI system，适合 dashboard/admin/data 产品。",
    },
    description: {
      en: "A ready-made external Skill focused on modern dark React UI, Tailwind, and motion for operational interfaces.",
      zh: "一个现成外部 Skill，聚焦现代暗色 React UI、Tailwind 和面向运营界面的动效。",
    },
    tags: ["Microsoft", "Dark UI", "Dashboard", "React"],
    useCases: ["Dashboards", "Admin", "Data-heavy apps"],
    ...externalCommon,
    theme: externalTheme(MonitorCog, "#2563eb"),
    visualDNA: externalDNA("Dark operational React UI system."),
    externalSource: {
      provider: "Microsoft / agent-skills",
      officialUrl: "https://skills.sh/microsoft/agent-skills/frontend-ui-dark-ts",
      verifiedAt: "2026-05-11",
    },
  }),
  externalSkill({
    slug: "impeccable",
    name: "Impeccable",
    tagline: {
      en: "Production-grade frontend design iteration Skill.",
      zh: "强调生产级前端设计打磨和迭代质量的 Skill。",
    },
    description: {
      en: "A craft-focused external Skill for improving frontend quality with design gates and stronger implementation standards.",
      zh: "偏设计打磨和质量门槛的外部 Skill，适合参考如何把前端做到更精致。",
    },
    tags: ["Craft", "Production UI", "Design QA"],
    useCases: ["Frontend polish", "Design iteration", "Quality gates"],
    ...externalCommon,
    theme: externalTheme(WandSparkles, "#0f766e"),
    visualDNA: externalDNA("Frontend craft and design QA workflow."),
    externalSource: {
      provider: "pbakaus",
      officialUrl: "https://skills.sh/pbakaus/impeccable/impeccable",
      verifiedAt: "2026-05-11",
    },
  }),
  externalSkill({
    slug: "web-design-studio",
    name: "Web Design Studio",
    tagline: {
      en: "Frontend design plus AI image generation workflow for complete web demos.",
      zh: "前端设计加 AI 图像资产工作流，适合完整网页 demo。",
    },
    description: {
      en: "A complete-page external Skill that combines frontend design direction with visual asset generation.",
      zh: "完整网页设计型外部 Skill，把前端设计方向和视觉资产生成结合起来。",
    },
    tags: ["Web Design", "Image Assets", "Landing"],
    useCases: ["Landing pages", "Visual assets", "Full-page demos"],
    ...externalCommon,
    theme: externalTheme(PenTool, "#d97706"),
    visualDNA: externalDNA("Full-page frontend design and visual asset workflow."),
    externalSource: {
      provider: "xiaodong-wu",
      officialUrl: "https://skills.sh/xiaodong-wu/web-design-studio/web-design-studio",
      verifiedAt: "2026-05-11",
    },
  }),
  externalSkill({
    slug: "frontend-design-pro",
    name: "Frontend Design Pro",
    tagline: {
      en: "Frontend interface design Skill with hero image and visual asset direction.",
      zh: "前端界面设计 Skill，包含 hero image 和视觉资产方向。",
    },
    description: {
      en: "A ready-made external Skill for production frontend interfaces with stronger image and asset guidance.",
      zh: "用于生产级前端界面的现成外部 Skill，补充图片和视觉资产策略。",
    },
    tags: ["ClaudSkills", "Visual Assets", "Frontend Design"],
    useCases: ["Product sites", "Hero imagery", "Interface design"],
    ...externalCommon,
    theme: externalTheme(Shapes, "#e11d48"),
    visualDNA: externalDNA("Frontend interface craft with image and asset guidance."),
    externalSource: {
      provider: "ClaudSkills",
      officialUrl: "https://claudskills.com/skills/frontend-design-pro/",
      verifiedAt: "2026-05-11",
    },
  }),
];

function externalDNA(summary: string) {
  return {
    typography: summary,
    color: "See the official Skill source for exact rules.",
    layout: "External ready-made Skill; FrontTaste does not repackage the source.",
    motion: "See official guidance.",
    density: "Varies by external Skill.",
  };
}

export const styleSkills: StyleSkill[] = [...fronttasteOriginals, ...externalDesignSkills];
export const publishedStyles = fronttasteOriginals;
export const plannedStyles: StyleSkill[] = [];

export function getStyle(slug: string) {
  return styleSkills.find((style) => style.slug === slug);
}

export function getPublishedStyle(slug: string) {
  const style = getStyle(slug);
  return style?.status === "published" ? style : undefined;
}

export function getFronttasteStyle(slug: string) {
  const style = getStyle(slug);
  return style?.sourceType === "fronttaste" ? style : undefined;
}

export function previewPath(slug: string, type: PreviewType) {
  return `/previews/${slug}/${type}`;
}

export function downloadPath(slug: string) {
  return `/downloads/${slug}`;
}
