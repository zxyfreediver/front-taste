import {
  Apple,
  Gamepad2,
  Gem,
  Monitor,
  Newspaper,
  ScanLine,
  Shapes,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Locale = "en" | "zh";
export type StyleStatus = "published" | "planned";
export type PreviewType = "landing" | "dashboard" | "settings";

export const styleSlugs = [
  "pixel-arcade",
  "liquid-glass",
  "mono-ink",
  "neon-cyberpunk",
  "fresh-minimal",
  "vintage-computing",
  "clay-play",
  "luxury-noir",
] as const;

export type StyleSlug = (typeof styleSlugs)[number];
export type StyleVariant = StyleSlug;

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

export type StyleSkill = {
  slug: StyleSlug;
  name: string;
  status: StyleStatus;
  localDownloadPath: string;
  tagline: Record<Locale, string>;
  description: Record<Locale, string>;
  tags: string[];
  useCases: string[];
  stack: string[];
  compatibleAgents: string[];
  theme: StyleTheme;
  styleSignature: {
    variant: StyleSlug;
    typography: string;
    texture: string;
    componentShape: string;
    motif: string;
    promptEffect: string;
  };
  visualDNA: {
    typography: string;
    color: string;
    layout: string;
    motion: string;
    density: string;
  };
  demoScreenshots: Record<PreviewType, string>;
  skillMeta: {
    fileSize: string;
    hasScripts: boolean;
    hasExternalRequests: boolean;
    lastUpdated: string;
    license: string;
  };
};

export const locales: Locale[] = ["en", "zh"];
export const previewTypes: PreviewType[] = ["landing", "dashboard", "settings"];
export const defaultStyleSlug: StyleSlug = "pixel-arcade";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isStyleSlug(value: string | null | undefined): value is StyleSlug {
  return Boolean(value && styleSlugs.includes(value as StyleSlug));
}

function demoScreenshots(slug: StyleSlug): Record<PreviewType, string> {
  return {
    landing: `/demos/${slug}-landing.png`,
    dashboard: `/demos/${slug}-dashboard.png`,
    settings: `/demos/${slug}-settings.png`,
  };
}

const common = {
  status: "published" as const,
  stack: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  compatibleAgents: ["ChatGPT", "Codex", "Claude Code", "Cursor"],
  skillMeta: {
    fileSize: "18KB",
    hasScripts: false,
    hasExternalRequests: false,
    lastUpdated: "2026-05-12",
    license: "MIT",
  },
};

function style(skill: Omit<StyleSkill, keyof typeof common | "localDownloadPath" | "demoScreenshots">): StyleSkill {
  return {
    ...skill,
    ...common,
    localDownloadPath: downloadPath(skill.slug),
    demoScreenshots: demoScreenshots(skill.slug),
  };
}

export const fronttasteStyles: StyleSkill[] = [
  style({
    slug: "pixel-arcade",
    name: "Pixel Arcade",
    tagline: {
      en: "8-bit product UI with hard pixels, chunky controls, and arcade status cards.",
      zh: "8-bit 像素产品 UI：硬边格子、块状控件和街机状态牌。",
    },
    description: {
      en: "Turns MemoPilot into a playable mission console with pixel windows, scoreboards, inventory slots, and crisp game feedback.",
      zh: "把 MemoPilot 变成可玩的任务控制台：像素窗口、计分板、道具栏和清晰的游戏反馈。",
    },
    tags: ["Pixel", "8-bit", "Game UI", "Grid"],
    useCases: ["Game launches", "Creator tools", "Playful onboarding", "Community apps"],
    theme: {
      icon: Gamepad2,
      bg: "#171022",
      surface: "#241734",
      surfaceAlt: "#ffd447",
      text: "#fff7d6",
      muted: "#b6a4d8",
      border: "#08050d",
      accent: "#4df7ff",
      accentText: "#12091c",
      radius: "0px",
      shadow: "8px 8px 0 #08050d",
      pattern:
        "linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px)",
      density: "balanced",
    },
    styleSignature: {
      variant: "pixel-arcade",
      typography: "monospace uppercase labels, chunky counters, compact game hierarchy",
      texture: "pixel grid, tile maps, block shadows, low-resolution status fills",
      componentShape: "square panels, stepped buttons, inventory slots, score cards",
      motif: "mission console, player owners, quest follow-ups, risk hazards",
      promptEffect: "The same AI meeting notes prompt becomes an arcade mission dashboard.",
    },
    visualDNA: {
      typography: "Chunky mono labels and large game-title headings.",
      color: "Purple arcade base with cyan, yellow, and pink power-up accents.",
      layout: "Tile maps, score windows, inventory rows, and blocky status panels.",
      motion: "Snap transitions and one-step hover offsets.",
      density: "Medium density with obvious modular grouping.",
    },
  }),
  style({
    slug: "liquid-glass",
    name: "Liquid Glass",
    tagline: {
      en: "Apple-like translucent UI with floating glass, blur, and soft layered depth.",
      zh: "苹果式半透明 UI：漂浮玻璃、模糊背景和柔和层叠。",
    },
    description: {
      en: "Turns MemoPilot into a light OS-native workspace with frosted surfaces, capsule controls, soft color fields, and airy depth.",
      zh: "把 MemoPilot 变成轻盈的系统级工作区：毛玻璃表面、胶囊控件、柔和彩色背景和空气感层次。",
    },
    tags: ["Glass", "Apple-like", "Translucent", "Light"],
    useCases: ["AI assistants", "Productivity apps", "OS-like tools", "Consumer SaaS"],
    theme: {
      icon: Apple,
      bg: "#eaf4ff",
      surface: "rgba(255,255,255,0.62)",
      surfaceAlt: "rgba(210,231,255,0.62)",
      text: "#122033",
      muted: "#637084",
      border: "rgba(255,255,255,0.72)",
      accent: "#4f7cff",
      accentText: "#ffffff",
      radius: "28px",
      shadow: "0 28px 90px rgba(67, 102, 166, 0.22)",
      pattern:
        "radial-gradient(circle at 18% 8%, rgba(105,149,255,.26), transparent 30%), radial-gradient(circle at 82% 12%, rgba(130,240,210,.22), transparent 28%)",
      density: "loose",
    },
    styleSignature: {
      variant: "liquid-glass",
      typography: "clean system UI, calm headings, small capsule labels",
      texture: "blurred glass, soft highlights, liquid color fields",
      componentShape: "capsules, floating panes, translucent sheets, soft depth",
      motif: "assistant layers, OS dock, frosted workspace",
      promptEffect: "The prompt feels like an ambient AI layer inside a modern operating system.",
    },
    visualDNA: {
      typography: "Spacious system type with light native hierarchy.",
      color: "Mist blue base, translucent white panels, and crisp blue actions.",
      layout: "Floating glass layers, pill controls, stacked assistant sheets.",
      motion: "Gentle blur, opacity, and hover lift transitions.",
      density: "Low-to-medium density with airy depth.",
    },
  }),
  style({
    slug: "mono-ink",
    name: "Mono Ink",
    tagline: {
      en: "Black-and-white editorial UI with severe typography and print-like rules.",
      zh: "黑白墨水风 UI：强排版、粗分割线和印刷式秩序。",
    },
    description: {
      en: "Turns MemoPilot into a stark operating paper with thick rules, ledger tables, oversized typography, and almost no decorative color.",
      zh: "把 MemoPilot 变成强烈黑白工作报纸：粗线、账本表格、超大排版和几乎没有装饰色。",
    },
    tags: ["Black White", "Editorial", "Typography", "Minimal"],
    useCases: ["Serious tools", "Research products", "Founder pages", "Knowledge apps"],
    theme: {
      icon: Newspaper,
      bg: "#f7f7f2",
      surface: "#ffffff",
      surfaceAlt: "#111111",
      text: "#0a0a0a",
      muted: "#4d4d4d",
      border: "#0a0a0a",
      accent: "#0a0a0a",
      accentText: "#ffffff",
      radius: "0px",
      shadow: "0 0 0 2px #0a0a0a",
      pattern: "linear-gradient(#0a0a0a 1px, transparent 1px)",
      density: "balanced",
    },
    styleSignature: {
      variant: "mono-ink",
      typography: "oversized black headlines, mono captions, editorial columns",
      texture: "paper white, black ink, thick rules, newspaper grids",
      componentShape: "rectangular slabs, ledger rows, typographic badges",
      motif: "executive brief, operating memo, printed command sheet",
      promptEffect: "The prompt becomes a decisive black-and-white meeting brief.",
    },
    visualDNA: {
      typography: "Oversized black headings, tiny mono captions, and rigid rules.",
      color: "Pure black and paper white with gray only for secondary copy.",
      layout: "Editorial columns, ledgers, horizontal dividers, and stark whitespace.",
      motion: "Minimal state changes that feel like marking ink on paper.",
      density: "Medium density with high scan clarity.",
    },
  }),
  style({
    slug: "neon-cyberpunk",
    name: "Neon Cyberpunk",
    tagline: {
      en: "Game HUD cyberpunk UI with neon rails, scanlines, and mission panels.",
      zh: "游戏 HUD 赛博朋克 UI：霓虹轨道、扫描线和任务面板。",
    },
    description: {
      en: "Turns MemoPilot into a night-city command HUD with angled panels, glowing risk signals, radar cards, and hot pink/cyan contrast.",
      zh: "把 MemoPilot 变成夜城指挥 HUD：斜切面板、发光风险信号、雷达卡和粉蓝霓虹对比。",
    },
    tags: ["Cyberpunk", "HUD", "Neon", "Game"],
    useCases: ["Game tools", "Security demos", "Technical launches", "Developer communities"],
    theme: {
      icon: ScanLine,
      bg: "#080713",
      surface: "#111426",
      surfaceAlt: "#1d1234",
      text: "#f8f7ff",
      muted: "#8ea0ff",
      border: "#31f7ff",
      accent: "#ff2fb9",
      accentText: "#090714",
      radius: "4px",
      shadow: "0 0 28px rgba(49, 247, 255, 0.26)",
      pattern:
        "linear-gradient(90deg, rgba(49,247,255,.10) 1px, transparent 1px), linear-gradient(rgba(255,47,185,.08) 1px, transparent 1px)",
      density: "compact",
    },
    styleSignature: {
      variant: "neon-cyberpunk",
      typography: "condensed mono labels, HUD counters, aggressive uppercase headings",
      texture: "scanlines, neon glow, angular rails, dark glass",
      componentShape: "clipped panels, slanted tabs, radar modules, glowing borders",
      motif: "mission control, threat levels, night-city operations",
      promptEffect: "The prompt becomes a mission interface for decisions, owners, and risks.",
    },
    visualDNA: {
      typography: "Tense mono interface labels with bold game-HUD hierarchy.",
      color: "Near-black base, cyan rails, hot pink actions, violet surfaces.",
      layout: "Angled HUD panels, radar modules, dense command strips.",
      motion: "Scanline reveals, electric hovers, and fast status pulses.",
      density: "High density without sacrificing contrast.",
    },
  }),
  style({
    slug: "fresh-minimal",
    name: "Fresh Minimal",
    tagline: {
      en: "Modern fresh minimal SaaS with whitespace, thin lines, and soft greens.",
      zh: "现代清新简约 SaaS：大留白、细线和柔和蓝绿色。",
    },
    description: {
      en: "Turns MemoPilot into a clean, breathable product surface with careful spacing, pale color, thin dividers, and practical SaaS clarity.",
      zh: "把 MemoPilot 变成清爽可呼吸的产品界面：精确留白、淡色、细分割线和实用 SaaS 清晰度。",
    },
    tags: ["Minimal", "Fresh", "SaaS", "Clean"],
    useCases: ["Productivity apps", "AI SaaS", "Team tools", "Wellness tech"],
    theme: {
      icon: Sparkles,
      bg: "#f4fbf8",
      surface: "#ffffff",
      surfaceAlt: "#e5f5ef",
      text: "#10201a",
      muted: "#64746d",
      border: "#d8e8e1",
      accent: "#20a779",
      accentText: "#ffffff",
      radius: "18px",
      shadow: "0 24px 80px rgba(28, 112, 85, 0.12)",
      pattern: "linear-gradient(135deg, rgba(32,167,121,.10), transparent 36%)",
      density: "loose",
    },
    styleSignature: {
      variant: "fresh-minimal",
      typography: "modern sans, generous leading, quiet product labels",
      texture: "clean white space, thin dividers, pale green wash",
      componentShape: "rounded cards, precise pills, fine-line controls",
      motif: "breathable workspace, calm summaries, focused product clarity",
      promptEffect: "The prompt feels simple, fresh, and immediately useful.",
    },
    visualDNA: {
      typography: "Clean product hierarchy with relaxed spacing and readable body text.",
      color: "White and pale mint with one confident green action color.",
      layout: "Large whitespace, thin dividers, simple grids, calm summary rows.",
      motion: "Soft fades and tiny hover lifts only.",
      density: "Low density with strong clarity.",
    },
  }),
  style({
    slug: "vintage-computing",
    name: "Vintage Computing",
    tagline: {
      en: "Retro computer UI with beige shells, CRT glow, and old window chrome.",
      zh: "复古电脑 UI：米色外壳、CRT 光感和旧系统窗口。",
    },
    description: {
      en: "Turns MemoPilot into a classic desktop utility with old window frames, amber terminals, floppy-style buttons, and durable system charm.",
      zh: "把 MemoPilot 变成经典桌面工具：旧窗口框、琥珀终端、软盘式按钮和耐看的系统感。",
    },
    tags: ["Retro", "CRT", "Desktop", "Terminal"],
    useCases: ["Developer tools", "Nostalgic apps", "Personal knowledge bases", "Utilities"],
    theme: {
      icon: Monitor,
      bg: "#d7c7a3",
      surface: "#efe2bd",
      surfaceAlt: "#1e2a1d",
      text: "#2b261c",
      muted: "#6f6148",
      border: "#4d412c",
      accent: "#2f6b3f",
      accentText: "#f5edcf",
      radius: "2px",
      shadow: "6px 6px 0 rgba(48, 40, 25, 0.32)",
      pattern:
        "linear-gradient(90deg, rgba(83,69,43,.12) 1px, transparent 1px), linear-gradient(rgba(83,69,43,.10) 1px, transparent 1px)",
      density: "balanced",
    },
    styleSignature: {
      variant: "vintage-computing",
      typography: "old terminal mono, menu labels, utility headings",
      texture: "beige plastic, CRT lines, inset controls, window chrome",
      componentShape: "beveled buttons, status bars, desktop windows, terminal panes",
      motif: "classic desktop, command prompt, floppy utility",
      promptEffect: "The prompt feels like a trustworthy old-school desktop app.",
    },
    visualDNA: {
      typography: "Terminal-like text, menu labels, and utilitarian headings.",
      color: "Beige hardware surfaces with green terminal and amber highlights.",
      layout: "Window chrome, menu bars, inset panels, and status strips.",
      motion: "Low-motion cursor cues and simple selected states.",
      density: "Medium density with compact utility grouping.",
    },
  }),
  style({
    slug: "clay-play",
    name: "Clay Play",
    tagline: {
      en: "Soft 3D clay UI with rounded modules, plush shadows, and playful depth.",
      zh: "软 3D 黏土 UI：厚圆角、柔和投影和玩具感层次。",
    },
    description: {
      en: "Turns MemoPilot into a friendly clay-like product with chunky controls, pill dashboards, soft 3D cards, and playful but usable states.",
      zh: "把 MemoPilot 变成友好的黏土产品：厚控件、胶囊 dashboard、软 3D 卡片和可用的玩具感状态。",
    },
    tags: ["Clay", "3D", "Playful", "Soft"],
    useCases: ["Consumer AI", "Creator apps", "Education", "Friendly onboarding"],
    theme: {
      icon: Shapes,
      bg: "#fff1e6",
      surface: "#ffffff",
      surfaceAlt: "#ffd6e8",
      text: "#272038",
      muted: "#7b6c86",
      border: "#f0c8b5",
      accent: "#ff7a59",
      accentText: "#271725",
      radius: "28px",
      shadow: "0 16px 0 rgba(103, 74, 92, 0.18), 0 28px 70px rgba(255, 122, 89, 0.18)",
      pattern:
        "radial-gradient(circle at 16% 14%, rgba(255,122,89,.20), transparent 25%), radial-gradient(circle at 86% 12%, rgba(116,211,255,.18), transparent 24%)",
      density: "balanced",
    },
    styleSignature: {
      variant: "clay-play",
      typography: "rounded friendly hierarchy, warm labels, clear numbers",
      texture: "soft 3D clay, plush shadows, pastel surfaces",
      componentShape: "chunky pills, inflated cards, tactile toggles",
      motif: "toy-like productivity desk, friendly AI helper",
      promptEffect: "The prompt feels approachable, playful, and touchable.",
    },
    visualDNA: {
      typography: "Rounded friendly headings with clear operational labels.",
      color: "Pastel peach, pink, sky blue, and coral action color.",
      layout: "Soft 3D modules, chunky controls, playful staggered panels.",
      motion: "Tactile press and plush lift transitions.",
      density: "Medium density with generous touch targets.",
    },
  }),
  style({
    slug: "luxury-noir",
    name: "Luxury Noir",
    tagline: {
      en: "Black-gold premium UI with cinematic spacing and curated decision cards.",
      zh: "黑金高级 UI：电影感留白和精致会员级决策卡片。",
    },
    description: {
      en: "Turns MemoPilot into a premium executive intelligence product with blackened surfaces, metallic hairlines, slow rhythm, and expensive decision cards.",
      zh: "把 MemoPilot 变成高端执行情报产品：黑色表面、金属细线、慢节奏和昂贵感决策卡片。",
    },
    tags: ["Luxury", "Noir", "Premium", "Cinematic"],
    useCases: ["Executive tools", "Finance", "Premium AI", "Membership products"],
    theme: {
      icon: Gem,
      bg: "#080706",
      surface: "#14110d",
      surfaceAlt: "#211a12",
      text: "#f7ecd8",
      muted: "#b6a485",
      border: "#4a3823",
      accent: "#d7b46a",
      accentText: "#120d08",
      radius: "14px",
      shadow: "0 34px 90px rgba(0, 0, 0, 0.52)",
      pattern:
        "radial-gradient(circle at 18% 0%, rgba(215,180,106,.18), transparent 34%), linear-gradient(135deg, rgba(255,255,255,.05), transparent 44%)",
      density: "balanced",
    },
    styleSignature: {
      variant: "luxury-noir",
      typography: "cinematic headings, fine labels, elegant number treatment",
      texture: "black lacquer, brass hairlines, soft spotlight",
      componentShape: "premium cards, fine dividers, quiet controls",
      motif: "private intelligence room, executive brief, membership console",
      promptEffect: "The prompt feels like a premium decision intelligence suite.",
    },
    visualDNA: {
      typography: "Elegant hierarchy with fine metadata and confident headings.",
      color: "Blackened surfaces, warm ivory text, brass highlights.",
      layout: "Cinematic hero, curated cards, fine dividers, premium spacing.",
      motion: "Slow fades and restrained hover highlights.",
      density: "Medium density with high perceived value.",
    },
  }),
];

export const styleSkills = fronttasteStyles;
export const fronttasteOriginals = fronttasteStyles;
export const publishedStyles = fronttasteStyles;
export const plannedStyles: StyleSkill[] = [];

export const allDemoScreenshots = fronttasteStyles.flatMap((style) =>
  previewTypes.map((type) => style.demoScreenshots[type]),
);

export function getStyle(slug: string) {
  return styleSkills.find((style) => style.slug === slug);
}

export function getPublishedStyle(slug: string) {
  const style = getStyle(slug);
  return style?.status === "published" ? style : undefined;
}

export function getFronttasteStyle(slug: string) {
  return getStyle(slug);
}

export function previewPath(slug: string, type: PreviewType) {
  return `/previews/${slug}/${type}`;
}

export function downloadPath(slug: string) {
  return `/downloads/${slug}`;
}
