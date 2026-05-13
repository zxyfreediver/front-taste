import type { Locale } from "@/lib/fronttaste";

export const copy = {
  en: {
    nav: {
      demo: "Demo",
      styles: "Styles",
      install: "Install",
      request: "Request",
      changelog: "Changelog",
      language: "中文",
    },
    hero: {
      title: "Preview a frontend style then download the Skill",
      body: "FrontTaste lets you compare reusable frontend Skills before installing them. Pick a style, inspect the same MemoPilot demo in that taste, then download the Skill for your AI coding workflow.",
      primary: "Preview styles",
      tertiary: "Install selected Skill",
    },
    sections: {
      published: "Eight strong styles",
      planned: "Next styles",
      samePrompt: "Same prompt. Different taste.",
      why: "Skills, not templates",
      install: "Install the selected taste.",
      styleListIntro:
        "Choose one of eight distinctive frontend Skills. The page, demos, install panel, and request panel all render in the selected style.",
      plannedIntro: "More FrontTaste originals can be added later based on requests.",
      publishedIntro: "Eight complete FrontTaste style Skills with pre-rendered landing, dashboard, and settings demos.",
      samePromptBody:
        "The point is not changing a color token. Each Skill changes layout rhythm, density, typography, and product detail.",
      viewAll: "View all",
    },
    stats: {
      styles: "published styles",
      previews: "demo screenshots",
      scripts: "scripts in skills",
    },
    valueCards: {
      previewTitle: "Preview first",
      previewBody: "Judge frontend taste from real product screens instead of README promises.",
      downloadTitle: "Download Markdown Skills",
      downloadBody: "FrontTaste originals contain instructions only: no scripts, no external requests.",
      reuseTitle: "Reusable taste",
      reuseBody: "Install a style once and keep future AI-generated UI in the same direction.",
    },
    footer: {
      line: "FrontTaste v0.1 MVP · CSS-driven frontend style Skills.",
      what: "What is a frontend Skill",
      changelog: "Changelog",
      contact: "Contact",
    },
    requestPage: {
      title: "Request a style",
      body: "Have a visual direction, product reference, or use case you want FrontTaste to cover? Send a short email and it can become a future Skill.",
      button: "Email your request",
      note: "Good requests include product type, desired mood, and one or two references.",
      emailLabel: "Contact email",
    },
    installPage: {
      safe: "Downloads are intentionally safe: Markdown instructions only, no scripts, no external requests.",
      downloads: "Available FrontTaste downloads",
      folderTitle: "Folder format",
      folderBody: "Each Skill contains SKILL.md with style DNA, layout, component, material, motion, and checklist rules.",
      previewTitle: "Preview before install",
      previewBody: "Use the landing, dashboard, and settings demos to decide whether the style fits your product.",
    },
    sharedPrompt: "Build a landing page for an AI meeting notes app.",
    cta: {
      preview: "View demo",
      download: "Download Skill",
      coming: "Coming soon",
      request: "Request this style",
      details: "View details",
      backToStyles: "Back to styles",
    },
    collections: {
      originals: "FrontTaste Originals",
      originalsIntro: "Eight downloadable style Skills written for FrontTaste, each with landing, dashboard, and settings demos.",
    },
  },
  zh: {
    nav: {
      demo: "演示",
      styles: "风格库",
      install: "安装",
      request: "请求",
      changelog: "更新日志",
      language: "English",
    },
    hero: {
      title: "先预览风格 再下载对应 Skill",
      body: "FrontTaste 让你在安装前先比较可复用的 frontend Skill。选择一个风格，查看同一个 MemoPilot demo 在该审美下的效果，再把对应 Skill 下载到你的 AI 编程工作流里。",
      primary: "预览风格",
      tertiary: "安装当前 Skill",
    },
    sections: {
      published: "8 个强识别风格",
      planned: "后续风格",
      samePrompt: "同一个 prompt，不同审美。",
      why: "这是 Skill，不是模板",
      install: "安装当前审美。",
      styleListIntro:
        "从 8 个特色鲜明的 frontend Skill 中选择一个。首页、demo、安装区和请求区都会按当前风格实时渲染。",
      plannedIntro: "后续可以根据请求继续补充更多 FrontTaste 自写风格。",
      publishedIntro: "8 个完整 FrontTaste 风格 Skill，每个都有 landing、dashboard、settings 预渲染 demo。",
      samePromptBody:
        "重点不是换一套颜色，而是让布局节奏、信息密度、字体层级和产品细节都跟着审美一起变化。",
      viewAll: "查看全部",
    },
    stats: {
      styles: "已发布风格",
      previews: "demo 截图",
      scripts: "Skill 内脚本",
    },
    valueCards: {
      previewTitle: "先看效果",
      previewBody: "不用只靠 README 想象风格，先看真实产品页面长什么样。",
      downloadTitle: "下载 Markdown Skill",
      downloadBody: "FrontTaste 自写 Skill 只包含 Markdown 指令：无脚本、无外部请求。",
      reuseTitle: "持续复用审美",
      reuseBody: "把风格装进 AI 编程工作流，后续页面也能保持同一审美方向。",
    },
    footer: {
      line: "FrontTaste v0.1 MVP · CSS 驱动的前端审美 Skill 库。",
      what: "什么是 frontend Skill",
      changelog: "更新日志",
      contact: "联系",
    },
    requestPage: {
      title: "想要某种新风格？",
      body: "如果你有想看的审美方向、产品场景或参考网站，可以直接发邮件给我。这些需求会进入后续风格计划。",
      button: "给我发邮件",
      note: "建议写上产品类型、想要的气质，以及一两个参考对象。",
      emailLabel: "联系邮箱",
    },
    installPage: {
      safe: "下载包刻意保持安全：只有 Markdown 指令，没有脚本，也没有外部请求。",
      downloads: "可下载的 FrontTaste 风格",
      folderTitle: "文件夹格式",
      folderBody: "每个 Skill 都包含 SKILL.md，里面写清 style DNA、布局、组件、材质、动效和输出 checklist。",
      previewTitle: "先预览再安装",
      previewBody: "用 landing、dashboard、settings demo 判断这个风格是否适合你的产品。",
    },
    sharedPrompt: "Build a landing page for an AI meeting notes app.",
    cta: {
      preview: "查看 demo",
      download: "下载 Skill",
      coming: "即将推出",
      request: "想要这个风格",
      details: "查看详情",
      backToStyles: "返回风格库",
    },
    collections: {
      originals: "FrontTaste 自写风格",
      originalsIntro: "8 个由 FrontTaste 整理的可下载风格 Skill，每个都有 landing、dashboard、settings demo。",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}
