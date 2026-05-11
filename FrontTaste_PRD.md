# FrontTaste 产品需求文档（PRD）

> 版本：v0.1 MVP  
> 日期：2026-05-11  
> 产品中文名：前端审美 Skill 库  
> 产品英文名：FrontTaste  
> 推荐域名：fronttaste.dev  
> 一句话定位：先看审美，再装 Skill，让 AI 按你喜欢的风格写前端。

---

## 目录

1. [产品概述](#1-产品概述)
2. [背景与机会](#2-背景与机会)
3. [产品定位](#3-产品定位)
4. [目标用户](#4-目标用户)
5. [用户痛点](#5-用户痛点)
6. [核心价值主张](#6-核心价值主张)
7. [MVP 范围](#7-mvp-范围)
8. [信息架构与页面设计](#8-信息架构与页面设计)
9. [首批 12 个预制前端风格 Skill](#9-首批-12-个预制前端风格-skill)
10. [Skill 内容规范](#10-skill-内容规范)
11. [Preview 预览规范](#11-preview-预览规范)
12. [数据结构设计](#12-数据结构设计)
13. [技术方案与部署](#13-技术方案与部署)
14. [域名与品牌](#14-域名与品牌)
15. [推广计划：中文社区](#15-推广计划中文社区)
16. [推广计划：英文社区](#16-推广计划英文社区)
17. [30 天执行计划](#17-30-天执行计划)
18. [成功指标](#18-成功指标)
19. [商业化路线](#19-商业化路线)
20. [风险与应对](#20-风险与应对)
21. [立刻执行清单](#21-立刻执行清单)
22. [参考资料](#22-参考资料)

---

## 1. 产品概述

### 1.1 产品名称

**FrontTaste**

中文名：

**前端审美 Skill 库**

### 1.2 产品定义

FrontTaste 是一个预制前端风格 Skill 样式大全。用户可以先预览固定风格 Skill 生成出来的网站效果，再下载对应 Skill，让 ChatGPT / Codex / Claude Code / Cursor 等 AI 编程 Agent 持续生成相似审美的前端界面。

### 1.3 一句话介绍

**先看审美，再装 Skill。让 AI 按你喜欢的风格写前端。**

英文：

**Preview frontend taste before installing the Skill.**

### 1.4 产品不是

FrontTaste 不是：

- 实时 AI 前端生成器
- 模板市场
- 泛 Skill 市场
- Prompt 合集
- Figma 插件
- 组件库
- 付费 UI theme 市场

FrontTaste 是：

> 面向 AI 编程 Agent 的前端审美货架。

用户像逛模板市场一样挑审美，但下载到的是可以持续影响 AI 输出的前端风格 Skill。

---

## 2. 背景与机会

### 2.1 AI 写前端正在成为高频工作流

v0、Lovable、Bolt、Cursor、Claude Code、Codex 等工具已经让“用自然语言生成前端”变成常见工作流。Vercel 官方文档将 v0 描述为一个可以用自然语言生成项目代码和 UI 的 pair programmer，并且生成内容可以部署到 Vercel。

### 2.2 Skill 正在成为 AI Agent 的可复用能力包

OpenAI 官方将 Skills 定义为可复用、可分享的工作流，可以包含 instructions、examples 和 code。Claude 官方也将 Skills 定义为包含 instructions、scripts、resources 的目录，并通过 `SKILL.md` 决定何时触发和如何执行。

这说明 Skill 不是普通 prompt，而是 AI Agent 时代的“可安装工作流”。

### 2.3 前端 Skill 的核心问题是“无法提前看到审美”

普通 Skill 只看 README 可能够用。但前端风格 Skill 是视觉产品，用户必须先看到效果。

现在很多 Skill 目录或 Agent marketplace 展示的是：

- Skill 名称
- 描述
- README
- `SKILL.md`
- 安装命令

但它们通常没有展示：

- 这个 Skill 生成的 landing page 长什么样
- dashboard 风格如何
- 同一个 prompt 下不同 Skill 的差异
- 安装后是否能稳定保持同一种审美

FrontTaste 的机会就是补上这个空白。

---

## 3. 产品定位

### 3.1 定位语

中文：

> 一个为 AI 编程 Agent 准备的前端 Skill 样式大全。预览真实页面效果，下载固定风格 Skill，让 AI 持续生成同一种审美的前端。

英文：

> A curated gallery of ready-made frontend style Skills for AI coding agents.

### 3.2 核心定位

FrontTaste 不做泛 Skill 市场，而是只做：

> Curated frontend style skills with visual previews.

### 3.3 差异化

| 类型 | 代表产品 | 解决什么 | 缺什么 | FrontTaste 差异 |
|---|---|---|---|---|
| AI UI 生成器 | v0 / Lovable | 用自然语言生成 UI | 用户仍要自己调审美 | 直接提供固定审美 Skill |
| UI 模板站 | shadcn blocks / templates | 复制组件或模板 | 不是 AI Skill | 下载的是风格生成能力 |
| Skill 目录 | Skills marketplace | 搜索和下载 Skill | 缺少真实视觉预览 | 专注前端审美预览 |
| 前端设计 Skill | frontend-design / Taste Skill | 改善 AI 输出 | 不是多风格 gallery | 多个预制风格可比较、可下载 |

---

## 4. 目标用户

### 4.1 核心用户

#### AI Coding 用户

使用以下工具的人：

- ChatGPT / Codex
- Claude Code
- Cursor
- Windsurf
- v0
- Lovable
- Bolt
- Replit Agent

他们的问题是：AI 能写页面，但审美不稳定。

#### 独立开发者

他们经常要快速做：

- SaaS landing page
- 产品官网
- waitlist page
- dashboard
- admin panel
- pricing page
- portfolio

他们需要一个“好看的默认审美”。

#### 前端开发者 / 设计工程师

他们有技术能力，但不想每次都重新写一大段 prompt 或反复调 Tailwind 样式。

#### AI 产品经理 / 创业者

他们不一定懂前端，但想让 AI 做出来的产品看起来不廉价。

---

## 5. 用户痛点

### 5.1 装 Skill 前不知道效果

前端 Skill 的价值是视觉输出，但用户现在通常只能看到文字说明。README 无法证明审美。

### 5.2 AI 默认前端输出太 generic

常见问题：

- 紫色渐变 hero
- cookie-cutter SaaS layout
- 大圆角卡片堆叠
- 同质化 dashboard
- 字体层级弱
- 缺少真实产品细节
- 动效和 spacing 不稳定

### 5.3 Prompt 难以复用

用户可以写一大段风格 prompt，但每次新项目、新页面，效果都会漂移。Skill 的价值是把审美约束沉淀为可复用文件。

### 5.4 模板不是 AI 工作流

UI 模板只能复制一次，而 Skill 可以持续影响 AI 后续生成。用户需要的不是单页模板，而是一套可复用的审美系统。

---

## 6. 核心价值主张

FrontTaste 的核心价值：

> 把“前端审美”变成可预览、可下载、可复用的 AI Skill。

用户流程：

1. 逛风格
2. 看真实页面预览
3. 选择喜欢的审美
4. 下载 Skill
5. 安装到自己的 AI coding agent
6. 以后让 AI 按这个风格持续生成前端

核心卖点：

- 先看真实效果，而不是只看 README
- 固定预制风格，不需要实时生成
- 免费下载基础 Skill
- 支持多 Agent 使用
- 每个风格都有 landing / dashboard / settings 预览
- 同一个 prompt 可以看到不同审美差异

---

## 7. MVP 范围

### 7.1 MVP 名称

**FrontTaste v0.1**

### 7.2 MVP 目标

在 2–4 周内上线一个可公开访问的网站，包含：

- 12 个预制前端风格 Skill
- 每个 Skill 3 个 preview 页面
- 每个 Skill 可下载 `skill.zip`
- 每个 Skill 有安装说明
- 支持中英文推广
- 收集 email / GitHub star / 下载数据 / 用户反馈

### 7.3 MVP 要做

- 首页
- 风格列表页
- 风格详情页
- 对比页
- 安装说明页
- 下载 Skill
- GitHub repo
- Newsletter / waitlist
- Analytics
- Sitemap / SEO
- Open Graph 分享图

### 7.4 MVP 不做

- 不做实时 prompt 生成
- 不做在线修改 Skill
- 不做 AI 自动生成新 Skill
- 不做用户上传市场
- 不做账号系统
- 不做付费墙
- 不做复杂评分系统
- 不做 Figma 插件
- 不做完整前端模板源码市场

### 7.5 MVP 关键假设

1. 用户会因为看到某个风格预览而下载 Skill。
2. 用户装完 Skill 后，认为 AI 前端输出更符合自己的审美。
3. 用户愿意把这个网站分享给其他 AI coding 用户。
4. 前端 Skill 的价值可以通过视觉预览快速传达。

---

## 8. 信息架构与页面设计

### 8.1 路由结构

```txt
/
  首页

/styles
  风格列表页

/styles/[slug]
  风格详情页

/compare
  同 prompt 多风格对比页

/docs/install
  安装说明页

/docs/what-is-a-frontend-skill
  概念说明页

/downloads/[slug]
  下载跳转或下载统计页

/request
  用户提交想要的风格

/changelog
  更新日志
```

---

### 8.2 首页 `/`

首页目标：让用户在 10 秒内理解产品价值。

#### 首页模块

1. Hero
2. 风格卡片网格
3. Same prompt, different taste 对比区
4. Why Skills, not templates
5. Featured styles
6. Install instructions 简介
7. Newsletter / GitHub CTA

#### Hero 文案

```txt
Preview frontend taste before installing the Skill.

A curated gallery of ready-made frontend style Skills for AI coding agents.
```

中文：

```txt
先看审美，再装 Skill。

一个为 AI 编程 Agent 准备的前端 Skill 样式大全。
```

#### CTA

- Browse Styles
- Download Free Skills
- Star on GitHub

---

### 8.3 风格列表页 `/styles`

这是用户“逛风格”的主页面。

#### 筛选维度

- 用途：Landing / Dashboard / Portfolio / Docs / Admin / Pricing
- 氛围：Minimal / Dark / Luxury / Playful / Brutalist / Cyber / Editorial
- 技术栈：React / Next.js / Tailwind / shadcn/ui
- Agent：ChatGPT / Codex / Claude Code / Cursor

#### Style Card 内容

每张卡片展示：

- 风格名
- 大图预览
- 一句话描述
- 标签
- 支持平台
- 下载量
- `View Preview`
- `Download Skill`

#### 卡片示例

```txt
Quiet SaaS
Calm, premium SaaS interfaces for AI tools.
Tags: Landing / SaaS / Light / Tailwind
[Preview] [Download]
```

---

### 8.4 风格详情页 `/styles/[slug]`

详情页是转化核心。

#### 页面结构

1. Hero preview
2. 风格说明
3. 3 个真实预览
4. Same prompt comparison
5. Visual DNA
6. What’s inside the Skill
7. Install
8. Download
9. Related styles

#### 示例路径

```txt
/styles/quiet-saas
```

#### 示例内容

```txt
Quiet SaaS
Calm, premium SaaS interfaces for AI tools.

Preview:
- Landing page
- Dashboard
- Settings page

Visual DNA:
- Typography: calm, precise, readable
- Color: muted neutrals + one restrained accent
- Layout: generous whitespace, clear hierarchy
- Motion: subtle, useful, never decorative
- Best for: AI SaaS, B2B tools, productivity products
```

---

### 8.5 对比页 `/compare`

这个页面负责传播。

#### 核心概念

同一句 prompt，展示不同 Skill 的输出差异。

固定 prompt：

```txt
Build a landing page for an AI meeting notes app.
```

展示：

- Default AI output
- Quiet SaaS
- Luxury Noir
- Brutal Grid
- Cyber Infra

用户一眼能理解：

> 这不是换颜色，这是换审美系统。

---

### 8.6 安装说明页 `/docs/install`

按照平台写清楚安装方式。

#### 支持平台

- ChatGPT Skills
- Codex Skills
- Claude Code Skills
- Cursor Rules
- Windsurf Rules

#### MVP 阶段交付格式

| 平台 | 交付格式 |
|---|---|
| ChatGPT / Codex | `skill.zip` |
| Claude Code | skill folder / zip |
| Cursor | `.cursor/rules` |
| Windsurf | rules markdown |
| 通用 | `SKILL.md` |

---

## 9. 首批 12 个预制前端风格 Skill

第一版要少而精。每个风格都必须有明显辨识度。

| Slug | 展示名 | 适合场景 | 视觉关键词 |
|---|---|---|---|
| `quiet-saas` | Quiet SaaS | AI 工具、B2B SaaS | 克制、留白、柔和、专业 |
| `precision-ops` | Precision Ops | Dashboard、Admin | 紧凑、清晰、表格、状态感 |
| `luxury-noir` | Luxury Noir | 高端 AI、金融、会员产品 | 深色、金属感、精品感 |
| `brutal-grid` | Brutal Grid | 开源项目、设计工具 | 粗线条、不对称、强对比 |
| `editorial-launch` | Editorial Launch | 创始人主页、内容型产品 | 杂志感、大标题、故事化 |
| `playful-bento` | Playful Bento | Consumer app、创意工具 | 彩色、圆润、模块化 |
| `cyber-infra` | Cyber Infra | 安全、开发者工具、Infra | 终端感、暗色、技术细节 |
| `calm-workspace` | Calm Workspace | 知识库、协作工具 | 类 workspace、克制、文档感 |
| `glass-agent` | Glass Agent | AI agent、聊天产品 | 半透明、层叠、轻动效 |
| `dense-analytics` | Dense Analytics | BI、数据产品、交易后台 | 高信息密度、图表、过滤器 |
| `hardware-premium` | Hardware Premium | 硬件、App 官网 | 大图、极简、产品质感 |
| `retro-future` | Retro Future | 游戏、创意 coding、Web3 | 复古、霓虹、像素/网格 |

### 命名注意

避免直接使用知名品牌名作为风格名，比如：

- Linear Style
- Apple Style
- Notion Style
- Stripe Style

可以使用更抽象的命名：

- Precision Ops
- Hardware Premium
- Calm Workspace
- Quiet SaaS

这样能降低商标和“仿站”风险。

---

## 10. Skill 内容规范

### 10.1 Skill 目录结构

每个 Skill 建议结构：

```txt
quiet-saas/
  SKILL.md
  references/
    style-dna.md
    layout-patterns.md
    component-rules.md
    motion-rules.md
    example-prompts.md
  LICENSE.txt
```

### 10.2 `SKILL.md` 必须包含

- Skill 触发描述
- 适用场景
- 核心审美方向
- 禁止项
- 布局规则
- 字体规则
- 色彩规则
- 组件规则
- 动效规则
- 代码偏好
- 输出检查清单

### 10.3 示例：Quiet SaaS 的 `SKILL.md`

```md
---
name: quiet-saas
description: create calm, premium, conversion-focused saas frontends for ai tools, b2b products, dashboards, pricing pages, onboarding flows, and product marketing websites. use when the user wants clean, restrained, production-ready frontend UI with generous whitespace, muted neutrals, precise hierarchy, subtle motion, and non-generic saas aesthetics.
---

# Quiet SaaS Style

Use this style when building calm, premium, conversion-focused SaaS frontends.

## Core principles

- Use generous whitespace.
- Prefer muted neutral backgrounds.
- Use one restrained accent color.
- Avoid loud gradients.
- Avoid generic purple AI hero sections.
- Avoid oversized emoji.
- Use clear product hierarchy.
- Make every section feel intentional, not decorative.

## Layout rules

- Prefer centered max-width containers.
- Use clear vertical rhythm.
- Use bento layouts only when they clarify product value.
- Avoid excessive card stacking.
- Keep hero sections focused on one product promise.

## Component rules

- Buttons should feel precise and quiet.
- Cards should use subtle borders and soft shadows.
- Tables should be readable and production-like.
- Forms should feel trustworthy and minimal.

## Motion rules

- Use subtle motion only when it clarifies interaction.
- Avoid excessive floating elements.
- Prefer small fade, slide, and scale transitions.
```

---

## 11. Preview 预览规范

### 11.1 每个 Skill 固定生成 3 个 demo 页面

| Preview 类型 | 固定 Prompt | 目的 |
|---|---|---|
| Landing Page | Build a landing page for an AI meeting notes app | 看营销页审美 |
| Dashboard | Build a dashboard for a team analytics product | 看复杂界面能力 |
| Settings / Pricing | Build a billing and settings page for a SaaS product | 看真实产品细节 |

### 11.2 Preview 路由

```txt
/previews/quiet-saas/landing
/previews/quiet-saas/dashboard
/previews/quiet-saas/settings
```

### 11.3 展示方式

MVP 阶段建议：

- 详情页顶部用大截图
- 详情页中部用 iframe 或静态截图切换
- `/compare` 页面用截图网格
- 每个截图都加 Open Graph 版本，便于社交分享

### 11.4 质量标准

每个 preview 必须达到：

- 视觉风格明显
- 不像默认 AI 输出
- 三个页面之间有统一审美
- 组件细节足够真实
- landing / dashboard / settings 都能成立
- 不使用侵权品牌视觉资产
- 不直接模仿某一知名网站

---

## 12. 数据结构设计

MVP 可以不用数据库，直接使用 JSON / MDX 静态内容。

### 12.1 TypeScript 类型

```ts
export type StyleSkill = {
  slug: string
  name: string
  tagline: string
  description: string
  tags: string[]
  useCases: string[]
  stack: string[]
  compatibleAgents: string[]
  screenshots: {
    hero: string
    landing: string
    dashboard: string
    settings: string
  }
  previewUrls: {
    landing: string
    dashboard: string
    settings: string
  }
  downloadUrl: string
  githubUrl: string
  installCommands: {
    chatgpt?: string
    codex?: string
    claudeCode?: string
    cursor?: string
    windsurf?: string
  }
  visualDNA: {
    typography: string
    color: string
    layout: string
    motion: string
    density: string
  }
  skillMeta: {
    fileSize: string
    hasScripts: boolean
    hasExternalRequests: boolean
    lastUpdated: string
    license: string
  }
}
```

### 12.2 示例 JSON

```json
{
  "slug": "quiet-saas",
  "name": "Quiet SaaS",
  "tagline": "Calm, premium SaaS interfaces for AI tools.",
  "description": "A restrained frontend style Skill for AI SaaS products, B2B tools, onboarding flows, pricing pages, and product dashboards.",
  "tags": ["SaaS", "Landing", "Dashboard", "Light", "Minimal"],
  "useCases": ["AI tools", "B2B SaaS", "Product marketing", "Pricing pages"],
  "stack": ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
  "compatibleAgents": ["ChatGPT", "Codex", "Claude Code", "Cursor"],
  "screenshots": {
    "hero": "/images/styles/quiet-saas/hero.png",
    "landing": "/images/styles/quiet-saas/landing.png",
    "dashboard": "/images/styles/quiet-saas/dashboard.png",
    "settings": "/images/styles/quiet-saas/settings.png"
  },
  "previewUrls": {
    "landing": "/previews/quiet-saas/landing",
    "dashboard": "/previews/quiet-saas/dashboard",
    "settings": "/previews/quiet-saas/settings"
  },
  "downloadUrl": "https://github.com/fronttaste/frontend-style-skills/releases/download/quiet-saas/quiet-saas.skill.zip",
  "githubUrl": "https://github.com/fronttaste/frontend-style-skills/tree/main/skills/quiet-saas",
  "installCommands": {
    "cursor": "Copy quiet-saas.cursor-rules.md into .cursor/rules/",
    "claudeCode": "Download the skill folder and install it as a Claude Code skill."
  },
  "visualDNA": {
    "typography": "Clear, restrained, high-readability hierarchy.",
    "color": "Muted neutrals with one restrained accent.",
    "layout": "Generous whitespace, centered sections, precise grid.",
    "motion": "Subtle fade and slide transitions.",
    "density": "Medium-low information density."
  },
  "skillMeta": {
    "fileSize": "18KB",
    "hasScripts": false,
    "hasExternalRequests": false,
    "lastUpdated": "2026-05-11",
    "license": "MIT"
  }
}
```

---

## 13. 技术方案与部署

### 13.1 推荐技术栈

| 模块 | 技术 |
|---|---|
| Web 框架 | Next.js |
| 样式 | Tailwind CSS |
| UI | shadcn/ui |
| 内容 | MDX + JSON |
| 搜索 | Fuse.js 本地搜索 |
| 部署 | Vercel |
| 预览页 | Next.js static routes |
| 下载文件 | GitHub Releases / Cloudflare R2 |
| Analytics | Vercel Analytics / Plausible / Umami |
| Newsletter | Buttondown / Loops / Beehiiv |
| Repo | GitHub public repo |

### 13.2 推荐部署方案

MVP 阶段：

1. 网站部署在 Vercel。
2. 域名绑定 `fronttaste.dev`。
3. Skill ZIP 文件先放 GitHub Releases。
4. Preview 页面作为 Next.js 静态页面。
5. 图片先放在项目 public 目录或对象存储。
6. 等下载量变大后，把 zip 和图片迁移到 Cloudflare R2。

### 13.3 为什么首选 Vercel

- 前端开发者认知强
- Next.js 支持好
- 部署简单
- 适合静态站和半静态内容
- 和 v0 / shadcn / AI coding 用户群重叠

### 13.4 什么时候用 Cloudflare Pages / R2

当出现以下情况时迁移静态资源：

- 图片流量较大
- zip 下载量较大
- Vercel 带宽成本上升
- 需要更便宜的全球 CDN

---

## 14. 域名与品牌

### 14.1 推荐域名

首选：

```txt
fronttaste.dev
```

备用：

```txt
fronttaste.ai
getfronttaste.com
fronttaste.gallery
fronttaste.tools
fronttaste.co
```

### 14.2 是否需要先买域名

需要。

名字确定后应尽快购买 `fronttaste.dev`，不要等产品做完。

### 14.3 为什么推荐 `.dev`

- 面向开发者，语义自然
- 比 `.ai` 更克制
- 适合 SEO
- 不被某个平台绑定
- 未来可覆盖 Skill、rules、prompt pack、design DNA 等多格式

### 14.4 品牌语气

关键词：

- curated
- visual
- taste
- frontend
- agent
- reusable
- preview-first
- not generic

中文关键词：

- 审美
- 风格
- 预览
- 前端
- Skill
- AI 编程
- 可复用
- 不像模板

---

## 15. 推广计划：中文社区

中文推广重点：截图 + 实用 + 独立开发叙事。

### 15.1 小红书

小红书适合图文传播。

#### 标题方向

- 我做了一个「前端 Skill 样式大全」，让 AI 写前端不再土
- 同一个 prompt，不同前端 Skill，效果差这么多
- 独立开发者做产品官网，可以先装一个审美 Skill
- Claude / Codex / Cursor 写前端太像模板？我做了 12 个风格 Skill
- 免费分享：12 个 AI 前端审美 Skill

#### 笔记结构

1. 第一张图：12 个风格预览拼图
2. 第二张图：Same prompt different taste
3. 第三张图：Quiet SaaS vs Brutal Grid
4. 第四张图：下载和安装方式
5. 第五张图：适合谁用
6. 评论区引导：回复 “skill” 获取链接

---

### 15.2 V2EX

适合验证开发者需求。

#### 标题

```txt
我做了一个前端 Skill 样式大全，先预览风格再下载 Skill，想听听大家是否有这个需求
```

#### 正文结构

- AI 写前端越来越强，但默认审美不稳定
- 我做了 12 个固定风格 Skill
- 每个 Skill 有 landing / dashboard / settings 三个预览
- 不是实时生成，不烧 token
- 想问大家：你们会不会根据预览下载某个前端 Skill？

---

### 15.3 掘金

适合技术长文。

#### 标题

```txt
我做了一个 AI 前端审美 Skill 库：为什么前端模板不够，Skill 才是 AI Coding 的新组件
```

#### 文章结构

1. AI 前端生成的问题
2. 什么是 Skill
3. 为什么前端风格适合做成 Skill
4. 12 个风格 Demo
5. Skill 文件结构
6. 如何安装到 Claude Code / Codex / Cursor
7. 开源地址

---

### 15.4 Solo / 独立开发者社区

发布角度：

```txt
一个给独立开发者用的 AI 前端样式 Skill 库，免费预览和下载
```

重点强调：

- 免费
- 可下载
- 适合做 SaaS MVP
- 适合出海产品 landing page

---

### 15.5 即刻 / 微信群 / 公众号

适合 build in public。

#### 内容节奏

- Day 1：我准备做一个前端 Skill 样式大全
- Day 3：第一个 Skill 预览 Quiet SaaS
- Day 5：同 prompt 多风格对比
- Day 7：开放内测
- Day 14：正式上线

---

## 16. 推广计划：英文社区

英文推广重点：Show, don’t tell。

### 16.1 Product Hunt

不要 MVP 一上线就冲 Product Hunt。先做 beta，积累：

- 100+ waitlist
- 100+ GitHub stars
- 10+ 真实用户反馈
- 5+ 社交证明截图

#### Product Hunt 标题

```txt
FrontTaste — Preview frontend Skills before installing them
```

#### Tagline

```txt
A curated gallery of frontend style Skills for AI coding agents.
```

#### Maker comment

```txt
Hey Product Hunt 👋

I built FrontTaste because frontend Skills are hard to judge from README files.

If a Skill is supposed to improve UI taste, users should see the actual visual output before installing it.

FrontTaste is a curated gallery of ready-made frontend style Skills. Each style includes:
- Live previews
- Same-prompt comparisons
- Downloadable skill.zip
- Install docs for AI coding agents

The first version includes 12 styles, from Quiet SaaS to Brutal Grid and Cyber Infra.

Would love feedback from AI coding users, frontend engineers, and indie hackers.
```

---

### 16.2 Hacker News

HN 不喜欢营销，要用工程视角。

#### 标题

```txt
Show HN: FrontTaste – Preview frontend style skills before installing them
```

#### 正文

```txt
I built a small gallery of pre-made frontend style Skills for AI coding agents.

The problem: frontend Skills are usually distributed as README/SKILL.md files, but if the purpose is visual taste, you need to see the output before installing.

Each style has three fixed previews: landing page, dashboard, and settings page. No real-time generation, no accounts, no paywall.

Curious if other people using Claude Code / Codex / Cursor have the same problem.
```

---

### 16.3 Reddit

优先社区：

- r/SideProject
- r/webdev
- r/InternetIsBeautiful
- r/vibecoding
- r/ClaudeAI
- r/cursor
- r/reactjs
- r/tailwindcss
- r/SaaS

#### 标题

```txt
I built a gallery of frontend style skills for AI coding agents
```

#### 正文重点

- Not another AI UI generator
- Fixed style skill previews
- Downloadable Skill files
- Same prompt, different taste
- Looking for feedback from AI coding users

---

### 16.4 X / Twitter

#### Thread 结构

1. AI can code frontend, but it lacks stable taste.
2. Prompts are not enough.
3. Templates are not enough.
4. Skills can encode reusable taste.
5. But Skills need visual previews.
6. Introducing FrontTaste.
7. 12 styles.
8. Same prompt, different result.
9. Download link.
10. Ask for feedback.

---

### 16.5 GitHub

必须开源一部分。

#### Repo 名

```txt
fronttaste/frontend-style-skills
```

#### Repo 结构

```txt
skills/
  quiet-saas/
  luxury-noir/
  brutal-grid/
site/
README.md
CONTRIBUTING.md
LICENSE
```

README 要放大图和预览截图。

---

### 16.6 Dev.to / Hashnode

技术文章标题：

```txt
Why frontend AI agents need style Skills, not just prompts
```

---

## 17. 30 天执行计划

### 第 0 周：准备与预热

目标：让人知道你在做什么。

动作：

- 确认名字 FrontTaste
- 检查并购买 `fronttaste.dev`
- 建 GitHub repo
- 初始化 Next.js 项目
- 做 3 个风格截图
- 发 3 条中文 build in public
- 发 3 条英文 build in public
- 收集 waitlist
- 找 10 个 AI coding 用户试用

---

### 第 1 周：Beta

目标：上线最小可用版本。

动作：

- 上线 `fronttaste.dev`
- 发布 6 个 free styles
- 每个 style 有 3 个 preview
- 发布 V2EX、即刻、小红书
- 发 X thread
- 接入 Analytics
- 接入 newsletter
- 收集下载数据

---

### 第 2 周：内容扩张

目标：建立 SEO 和视觉资产。

动作：

- 补齐 12 个 styles
- 每个 style 写独立页面
- 增加 `/compare`
- 发掘金长文
- 发 Reddit r/SideProject
- 发 Dev.to 文章
- 改进安装文档

---

### 第 3 周：正式英文发布

目标：获取英文社区第一波反馈。

动作：

- Show HN
- Reddit r/webdev
- Reddit r/InternetIsBeautiful
- X thread
- GitHub repo 宣传
- 找 newsletter / curator 收录

---

### 第 4 周：Product Hunt 准备

目标：不要裸发 PH。

动作：

- 收集 100+ 支持者
- 做 Product Hunt gallery assets
- 做 30 秒 demo video
- 准备 maker comment
- 修复安装文档
- 冲 Product Hunt

---

## 18. 成功指标

上线 30 天内目标：

| 指标 | 目标 |
|---|---:|
| 网站访问量 | 3,000+ UV |
| Skill 下载量 | 300+ |
| 邮箱订阅 | 150+ |
| GitHub Star | 100+ |
| 用户反馈 | 30+ 条 |
| 被社区讨论 / 转发 | 10+ 次 |
| 至少 1 个英文社区有效帖子 | 是 |
| 至少 1 个中文社区有效帖子 | 是 |

### 18.1 关键验证问题

1. 用户是否会因为预览图下载 Skill？
2. 用户是否理解“Skill 不是模板”？
3. 用户是否愿意分享同 prompt 多风格对比图？
4. 哪些风格下载量最高？
5. 用户更想要 ChatGPT / Claude Code / Cursor / Codex 哪种格式？

---

## 19. 商业化路线

MVP 阶段先免费。

### 阶段 1：免费验证

- 12 个 free style skills
- GitHub 开源
- 邮箱订阅
- 收集 style request

### 阶段 2：付费包

| 产品 | 价格建议 |
|---|---:|
| Premium Style Pack | $9–19 |
| All Styles Lifetime | $39–79 |
| Team Brand Skill | $199–999 |
| Custom Frontend Skill | $299–1999 |
| Agency License | $99+/month |

### 阶段 3：高价值服务

最有价值的付费功能：

> 上传你的品牌网站 / 设计参考 / Figma 截图，我帮你生成一个专属 frontend style skill，并附带 3 个 preview demo。

这比卖单个模板更值钱。

---

## 20. 风险与应对

### 风险 1：用户不知道 Skill 是什么

应对：

首页不要第一句讲技术。先讲：

```txt
Pick a visual style for your AI-generated frontend.
```

然后再解释 Skill。

---

### 风险 2：用户只想要模板，不想要 Skill

应对：

每个 preview 可以同时给：

- Download Skill
- Copy prompt
- View generated code

但主 CTA 仍然是 Skill。

---

### 风险 3：风格不够好

应对：

宁可少做，也要每个风格明显。第一版如果 12 个做不精，就先发 6 个。

---

### 风险 4：竞品做 API 动态生成

应对：

不跟 API 拼。FrontTaste 拼 curated、固定、可预览、可下载、可信任。

---

### 风险 5：平台 Skill 标准变化

应对：

不要把产品名绑定到某个平台。FrontTaste 的核心资产是 style DNA，可以导出为不同格式。

---

### 风险 6：用户担心下载 Skill 安全

应对：

MVP 阶段所有免费 Skill 只包含 Markdown，不包含可执行脚本。

每个 Skill 页面显示：

- 文件大小
- 是否包含脚本
- 是否包含外部请求
- license
- last updated
- GitHub source
- changelog

---

## 21. 立刻执行清单

今天就做：

1. 确认产品名：FrontTaste。
2. 检查并购买：`fronttaste.dev`。
3. 创建 GitHub repo：`fronttaste/frontend-style-skills`。
4. 用 Next.js + Tailwind + shadcn/ui 初始化网站。
5. 先做 4 个风格：
   - Quiet SaaS
   - Luxury Noir
   - Brutal Grid
   - Cyber Infra
6. 每个风格生成 3 个 preview：
   - landing
   - dashboard
   - settings
7. 首页只放一句话：
   - `Preview frontend taste before installing the Skill.`
8. 一周内发第一版到：
   - V2EX
   - 小红书
   - 即刻
   - X
9. 两周内补齐 12 个风格。
10. 四周内准备 Product Hunt。

---

## 22. 参考资料

> 以下资料用于确认市场背景、Skill 形态、AI UI 生成趋势、部署方式和推广渠道。开发时不需要全部阅读，但可以用于 landing page / README / 投放文案的可信背书。

### Skills 相关

- OpenAI Help Center：Skills in ChatGPT  
  https://help.openai.com/en/articles/20001066-skills-in-chatgpt

- OpenAI Academy：Skills  
  https://academy.openai.com/public/resources/skills

- Anthropic Claude Docs：Skills overview  
  https://claude.com/docs/skills/overview

- Anthropic Support：How to create custom skills  
  https://support.claude.com/en/articles/12512198-how-to-create-custom-skills

- OpenAI Skills GitHub repo  
  https://github.com/openai/skills

### AI 前端生成相关

- Vercel v0 Docs  
  https://vercel.com/docs/v0

- Vercel Academy：UI with v0  
  https://vercel.com/academy/ai-sdk/ui-with-v0

### 相邻产品

- VibeUI  
  https://www.vibeui.org/

- Taste Skill  
  https://www.tasteskill.dev/

- Skillsmith  
  https://www.skillsmith.app/

### 部署与发布

- Vercel Hobby Plan  
  https://vercel.com/docs/accounts/plans/hobby

- Cloudflare Pages Pricing  
  https://developers.cloudflare.com/pages/functions/pricing/

- Product Hunt Launch Guide  
  https://www.producthunt.com/launch/

### 中文社区

- V2EX 独立开发者节点  
  https://v2ex.com/go/isv

- Solo 独立开发者社区  
  https://solo.xin/

- 出海去  
  https://chuhaiqu.newpage.im/

---

## 附录 A：首页首版文案

### Hero

```txt
Preview frontend taste before installing the Skill.

A curated gallery of ready-made frontend style Skills for AI coding agents.
```

中文：

```txt
先看审美，再装 Skill。

一个为 AI 编程 Agent 准备的前端 Skill 样式大全。
```

### Subheading

```txt
Browse fixed, pre-made frontend style Skills. Preview real landing pages, dashboards, and settings screens before downloading the Skill for your AI coding workflow.
```

中文：

```txt
浏览固定预制的前端风格 Skill。在下载前先预览真实 landing page、dashboard 和 settings 页面，让 AI 持续生成你喜欢的前端审美。
```

### CTA

```txt
Browse Styles
Download Free Skills
Star on GitHub
```

---

## 附录 B：同 Prompt 对比文案

```txt
Same prompt. Different taste.

Prompt:
Build a landing page for an AI meeting notes app.

Default AI output:
Generic layout, predictable gradient, weak hierarchy.

Quiet SaaS:
Calm, premium, conversion-focused.

Brutal Grid:
Bold, asymmetric, high-contrast.

Luxury Noir:
Dark, cinematic, premium.

Cyber Infra:
Technical, terminal-like, infrastructure-focused.
```

---

## 附录 C：下载弹窗文案

```txt
Download Quiet SaaS

This Skill only contains Markdown instructions.
No scripts. No external requests.

Available formats:
- ChatGPT / Codex skill.zip
- Claude Code skill folder
- Cursor rules
- Plain SKILL.md

[Download skill.zip]
[Copy Cursor Rules]
[View on GitHub]
```

---

## 附录 D：V2EX 首发帖草稿

```txt
标题：
我做了一个前端 Skill 样式大全，先预览风格再下载 Skill，想听听大家是否有这个需求

正文：
最近用 Claude Code / Codex / Cursor 写前端比较多，发现一个问题：

AI 现在确实能写前端，但默认审美经常很 generic。很多 frontend skill 也只能看到 README 或 SKILL.md，装之前不知道它到底会生成什么风格。

所以我做了一个小站 FrontTaste：

- 预制固定的前端风格 Skill
- 每个 Skill 都有真实页面预览
- 每个 Skill 展示 landing / dashboard / settings 三个页面
- 用户喜欢哪个风格，就下载对应 Skill
- 不是实时生成，不烧 token
- 第一版免费

我想验证一个问题：
大家会不会根据视觉预览去选择和下载一个 frontend skill？

欢迎拍砖。
```

---

## 附录 E：Show HN 草稿

```txt
Show HN: FrontTaste – Preview frontend style skills before installing them

I built a small gallery of pre-made frontend style Skills for AI coding agents.

The problem: frontend Skills are usually distributed as README/SKILL.md files, but if the purpose is visual taste, users need to see the actual output before installing.

Each style has three fixed previews:
- landing page
- dashboard
- settings page

No real-time generation, no accounts, no paywall.

The first version includes 12 styles, from Quiet SaaS to Brutal Grid and Cyber Infra.

Curious if other people using Claude Code / Codex / Cursor have the same problem.
```

---

## 附录 F：Product Hunt 草稿

### Name

```txt
FrontTaste
```

### Tagline

```txt
Preview frontend Skills before installing them
```

### Description

```txt
FrontTaste is a curated gallery of ready-made frontend style Skills for AI coding agents. Browse visual styles, preview real UI outputs, download the Skill, and generate consistent frontend interfaces in your favorite aesthetic.
```

### Maker comment

```txt
Hey Product Hunt 👋

I built FrontTaste because frontend Skills are hard to judge from README files.

If a Skill is supposed to improve UI taste, users should see the actual visual output before installing it.

FrontTaste is a curated gallery of ready-made frontend style Skills. Each style includes:
- Live previews
- Same-prompt comparisons
- Downloadable skill.zip
- Install docs for AI coding agents

The first version includes 12 styles, from Quiet SaaS to Brutal Grid and Cyber Infra.

Would love feedback from AI coding users, frontend engineers, and indie hackers.
```
