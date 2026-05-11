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
      styles: "风格",
      compare: "对比",
      install: "安装",
      request: "提交需求",
      changelog: "更新",
      language: "English",
    },
    hero: {
      title: "先看审美，再装 Skill。",
      body: "浏览固定预制的前端风格 Skill。在下载前先预览真实 landing page、dashboard 和 settings 页面，让 AI 持续生成你喜欢的前端审美。",
      primary: "浏览风格",
      secondary: "查看对比",
      tertiary: "安装说明",
    },
    sections: {
      published: "MVP 风格",
      planned: "后续风格",
      samePrompt: "同一个 prompt，不同审美。",
      why: "这是 Skill，不是模板",
      install: "安装一次，持续复用审美。",
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
