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
  Sparkles,
  type LucideIcon,
} from "lucide-react";

export type Locale = "en" | "zh";
export type StyleStatus = "published" | "planned";
export type PreviewType = "landing" | "dashboard" | "settings";

export type StyleSkill = {
  slug: string;
  name: string;
  status: StyleStatus;
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

const common = {
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

export const styleSkills: StyleSkill[] = [
  {
    slug: "quiet-saas",
    name: "Quiet SaaS",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "precision-ops",
    name: "Precision Ops",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "luxury-noir",
    name: "Luxury Noir",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "brutal-grid",
    name: "Brutal Grid",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "editorial-launch",
    name: "Editorial Launch",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "cyber-infra",
    name: "Cyber Infra",
    status: "published",
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
    ...common,
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
  },
  {
    slug: "playful-bento",
    name: "Playful Bento",
    status: "planned",
    tagline: {
      en: "Colorful modular pages for consumer and creative apps.",
      zh: "适合消费级和创意工具的彩色模块化风格。",
    },
    description: {
      en: "A future style pack for friendly bento layouts, soft color systems, and expressive product moments.",
      zh: "后续风格包：友好的 bento 布局、柔和彩色系统和更有表达力的产品时刻。",
    },
    tags: ["Consumer", "Creative", "Bento", "Colorful"],
    useCases: ["Consumer apps", "Creative tools", "Personal products"],
    ...common,
    theme: plannedTheme(Boxes, "#f6d365"),
    visualDNA: plannedDNA("Rounded modules, color chips, and playful hierarchy."),
  },
  {
    slug: "calm-workspace",
    name: "Calm Workspace",
    status: "planned",
    tagline: {
      en: "Quiet workspace surfaces for docs and collaboration.",
      zh: "适合知识库和协作工具的克制 workspace 风格。",
    },
    description: {
      en: "A future style pack for document-first apps, workspaces, and calm collaboration surfaces.",
      zh: "后续风格包：以文档为核心的应用、工作区和克制协作界面。",
    },
    tags: ["Workspace", "Docs", "Collaboration"],
    useCases: ["Knowledge bases", "Collaboration", "Docs"],
    ...common,
    theme: plannedTheme(Layers3, "#a7c5bd"),
    visualDNA: plannedDNA("Document rhythm, calm panels, and collaborative details."),
  },
  {
    slug: "glass-agent",
    name: "Glass Agent",
    status: "planned",
    tagline: {
      en: "Layered translucent interfaces for AI agents.",
      zh: "适合 AI agent 和聊天产品的半透明层叠风格。",
    },
    description: {
      en: "A future style pack for agent workflows, transparent layers, message surfaces, and light motion.",
      zh: "后续风格包：agent 工作流、透明层次、消息界面和轻动效。",
    },
    tags: ["AI Agent", "Chat", "Glass", "Layered"],
    useCases: ["AI agents", "Chat products", "Assistants"],
    ...common,
    theme: plannedTheme(Bot, "#b6d4ff"),
    visualDNA: plannedDNA("Translucent layers, agent timelines, and subtle depth."),
  },
  {
    slug: "dense-analytics",
    name: "Dense Analytics",
    status: "planned",
    tagline: {
      en: "Dense BI and trading surfaces for data-heavy products.",
      zh: "适合 BI、数据产品和交易后台的高信息密度风格。",
    },
    description: {
      en: "A future style pack for BI, data products, trading dashboards, and advanced filters.",
      zh: "后续风格包：BI、数据产品、交易 dashboard 和高级筛选器。",
    },
    tags: ["BI", "Analytics", "Trading", "Dense"],
    useCases: ["BI", "Trading", "Analytics", "Data products"],
    ...common,
    theme: plannedTheme(BarChart3, "#8fb8ff"),
    visualDNA: plannedDNA("Dense charts, filters, split views, and metric grids."),
  },
  {
    slug: "hardware-premium",
    name: "Hardware Premium",
    status: "planned",
    tagline: {
      en: "Minimal product pages for hardware and polished app launches.",
      zh: "适合硬件和 App 官网的大图极简质感风格。",
    },
    description: {
      en: "A future style pack for product renders, hardware launches, and minimal high-polish pages.",
      zh: "后续风格包：产品渲染图、硬件发布页和极简高质感页面。",
    },
    tags: ["Hardware", "Product", "Minimal", "Premium"],
    useCases: ["Hardware", "App launches", "Product sites"],
    ...common,
    theme: plannedTheme(Building2, "#d8d8d2"),
    visualDNA: plannedDNA("Large product visuals, quiet type, and premium spacing."),
  },
  {
    slug: "retro-future",
    name: "Retro Future",
    status: "planned",
    tagline: {
      en: "Retro neon surfaces for games, creative coding, and Web3.",
      zh: "适合游戏、创意 coding 和 Web3 的复古未来风格。",
    },
    description: {
      en: "A future style pack for pixel grids, neon panels, game-like product moments, and expressive launches.",
      zh: "后续风格包：像素网格、霓虹面板、游戏感产品时刻和表达型发布页。",
    },
    tags: ["Retro", "Neon", "Game", "Web3"],
    useCases: ["Games", "Creative coding", "Web3", "Communities"],
    ...common,
    theme: plannedTheme(Braces, "#ff79c6"),
    visualDNA: plannedDNA("Neon grids, pixel accents, and retro-future contrast."),
  },
];

function plannedTheme(icon: LucideIcon, accent: string): StyleTheme {
  return {
    icon,
    bg: "#f5f5f2",
    surface: "#ffffff",
    surfaceAlt: "#ededeb",
    text: "#171717",
    muted: "#73736d",
    border: "#d8d8d2",
    accent,
    accentText: "#171717",
    radius: "12px",
    shadow: "0 18px 54px rgba(24, 24, 20, 0.1)",
    pattern: "linear-gradient(135deg, rgba(0,0,0,.05), transparent 45%)",
    density: "balanced",
  };
}

function plannedDNA(summary: string) {
  return {
    typography: summary,
    color: "Planned palette to be finalized after MVP feedback.",
    layout: "Planned layout rules to be produced in the next style batch.",
    motion: "Planned motion language.",
    density: "Planned density profile.",
  };
}

export const publishedStyles = styleSkills.filter((style) => style.status === "published");
export const plannedStyles = styleSkills.filter((style) => style.status === "planned");

export function getStyle(slug: string) {
  return styleSkills.find((style) => style.slug === slug);
}

export function getPublishedStyle(slug: string) {
  const style = getStyle(slug);
  return style?.status === "published" ? style : undefined;
}

export function previewPath(slug: string, type: PreviewType) {
  return `/previews/${slug}/${type}`;
}

export function downloadPath(slug: string) {
  return `/downloads/${slug}`;
}
