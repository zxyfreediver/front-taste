import type { Locale } from "@/lib/fronttaste";

export const copy = {
  en: {
    nav: {
      styles: "Styles",
      compare: "Compare",
      install: "Install",
      request: "Request",
      changelog: "Changelog",
      language: "中文",
    },
    hero: {
      title: "Preview frontend taste before installing the Skill.",
      body: "Browse fixed, pre-made frontend style Skills. Preview real landing pages, dashboards, and settings screens before downloading the Skill for your AI coding workflow.",
      primary: "Browse styles",
      secondary: "Compare tastes",
      tertiary: "Install docs",
    },
    sections: {
      published: "MVP styles",
      planned: "Next styles",
      samePrompt: "Same prompt. Different taste.",
      why: "Skills, not templates",
      install: "Install once. Reuse the taste.",
      styleListIntro:
        "Browse fixed frontend style Skills. Published styles include downloads and three live previews; planned styles are listed to show the roadmap.",
      plannedIntro: "These six are in the 12-style plan but intentionally outside the MVP build.",
      publishedIntro: "Six complete style Skills with live landing, dashboard, and settings previews.",
      compareBody:
        "The point is not changing a color token. Each Skill changes layout rhythm, density, typography, and product detail.",
      viewAll: "View all",
    },
    stats: {
      styles: "published styles",
      previews: "live previews",
      scripts: "scripts in skills",
    },
    valueCards: {
      previewTitle: "Preview first",
      previewBody: "Judge frontend taste from real pages instead of README promises.",
      downloadTitle: "Download Markdown Skills",
      downloadBody: "MVP Skills contain instructions only: no scripts, no external requests.",
      reuseTitle: "Reusable taste",
      reuseBody: "Install a style once and keep future AI-generated UI in the same direction.",
    },
    footer: {
      line: "FrontTaste v0.1 MVP · Preview-first frontend style Skills.",
      what: "What is a frontend Skill",
      changelog: "Changelog",
      contact: "Contact",
    },
    requestPage: {
      title: "Request a style",
      body: "Have a taste direction, product reference, or use case you want FrontTaste to cover? Send me a short email and I will fold it into the roadmap.",
      button: "Email your request",
      note: "Good requests include the product type, desired mood, and one or two references.",
      emailLabel: "Contact email",
    },
    installPage: {
      safe: "MVP downloads are intentionally safe: Markdown instructions only, no scripts, no external requests.",
      downloads: "Available MVP downloads",
      folderTitle: "Folder format",
      folderBody: "Each Skill contains SKILL.md plus references for style DNA, layout, components, motion, and prompts.",
      previewTitle: "Preview before install",
      previewBody: "Open landing, dashboard, and settings previews before committing a style to your workflow.",
    },
    comparePrompt: "Build a landing page for an AI meeting notes app.",
    cta: {
      preview: "View preview",
      download: "Download Skill",
      coming: "Coming soon",
      request: "Request this style",
      details: "View details",
    },
  },
  zh: {
    nav: {
      styles: "风格库",
      compare: "风格对比",
      install: "安装说明",
      request: "想要新风格",
      changelog: "更新日志",
      language: "English",
    },
    hero: {
      title: "先看审美，再装 Skill。",
      body: "FrontTaste 收集固定预制的前端风格 Skill。下载前先看真实的 landing、dashboard 和 settings 预览，再把喜欢的审美装进你的 AI 编程工作流。",
      primary: "逛逛风格库",
      secondary: "看同题对比",
      tertiary: "安装说明",
    },
    sections: {
      published: "首批 MVP 风格",
      planned: "后续会补的风格",
      samePrompt: "同一个 prompt，不同审美。",
      why: "这是 Skill，不是模板",
      install: "装一次，让审美持续生效。",
      styleListIntro:
        "这里先放 6 个已经做完的风格：都有下载包，也都有 landing、dashboard、settings 三个真实预览。剩下 6 个先放在 roadmap 里。",
      plannedIntro: "这些还在计划中，先不提供预览和下载。你可以通过邮件告诉我最想先做哪一个。",
      publishedIntro: "6 个完整风格，每个都有 landing、dashboard、settings 三个真实预览。",
      compareBody:
        "重点不是换一套颜色，而是让布局节奏、信息密度、字体层级和产品细节都跟着审美一起变化。",
      viewAll: "查看全部",
    },
    stats: {
      styles: "已发布风格",
      previews: "真实预览页",
      scripts: "Skill 内脚本",
    },
    valueCards: {
      previewTitle: "先看效果",
      previewBody: "不用只靠 README 想象风格，先看真实页面长什么样。",
      downloadTitle: "下载 Markdown Skill",
      downloadBody: "MVP 的 Skill 只包含 Markdown 指令：无脚本、无外部请求。",
      reuseTitle: "持续复用审美",
      reuseBody: "把风格装进 AI 编程工作流，后续页面也能保持同一种审美方向。",
    },
    footer: {
      line: "FrontTaste v0.1 MVP · 先预览，再安装的前端审美 Skill 库。",
      what: "什么是前端 Skill",
      changelog: "更新日志",
      contact: "联系我",
    },
    requestPage: {
      title: "想要某种新风格？",
      body: "如果你有想看的审美方向、产品场景或参考网站，直接发邮件给我。我会把这些需求整理进后续风格计划里。",
      button: "给我发邮件",
      note: "建议写上产品类型、想要的气质，以及一两个参考对象。",
      emailLabel: "联系邮箱",
    },
    installPage: {
      safe: "MVP 下载包刻意保持安全：只有 Markdown 指令，没有脚本，也没有外部请求。",
      downloads: "可下载的 MVP 风格",
      folderTitle: "文件夹格式",
      folderBody: "每个 Skill 包含 SKILL.md，以及 style DNA、布局、组件、动效和示例 prompt 等参考文件。",
      previewTitle: "先预览再安装",
      previewBody: "安装前先打开 landing、dashboard 和 settings 预览，确认这个审美适合你的项目。",
    },
    comparePrompt: "Build a landing page for an AI meeting notes app.",
    cta: {
      preview: "查看预览",
      download: "下载 Skill",
      coming: "即将推出",
      request: "想要这个风格",
      details: "查看详情",
    },
  },
} satisfies Record<Locale, object>;

export function otherLocale(locale: Locale): Locale {
  return locale === "en" ? "zh" : "en";
}
