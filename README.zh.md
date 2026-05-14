<p align="center">
  <h1 align="center">FrontTaste</h1>
  <p align="center">
    先预览前端风格，再下载 Skill。<br>
    <a href="https://front-taste.vercel.app/zh">https://front-taste.vercel.app/zh</a>
  </p>
</p>

## 痛点

你找到一个前端风格 Skill（AI 编程 Agent 用的 Markdown 提示词）。下载、喂给 Claude/ChatGPT/Cursor——但在渲染出来之前，**你完全不知道会得到什么**。Skill 描述得再好，结果也不一定符合你的审美。

FrontTaste 解决了这个问题：**每个风格 Skill 都有实时渲染的预览页面**——电商、后台、登录、个人资料四类页面——让你在安装之前就能判断视觉效果。

## 工作流程

```
1. 浏览 → 从画廊中挑选一个风格
2. 预览 → 看同一个 MemoPilot 应用在该风格下的效果（4 种页面类型）
3. 下载 → 获取 SKILL.md 文件
4. 使用 → 只需一行 prompt 喂给 AI 编程 Agent：
   "将 [风格名称] Skill 应用到我的项目"
```

## 8 种风格

| 风格 | 气质 |
|---|---|
| **Fresh Minimal** | 清新 SaaS，薄荷绿强调，编辑衬线字体 |
| **Liquid Glass** | iOS 26 毛玻璃，棱镜色斑，浮动胶囊 |
| **Mono Ink** | 黑白印刷风，超大排版，印刷规则 |
| **Neon Cyberpunk** | 游戏 HUD，青粉霓虹，扫描线，斜切面板 |
| **Pixel Arcade** | 8-bit 像素 UI，块状控件，街机计分板 |
| **Vintage Computing** | 米色 CRT 终端，琥珀色光晕，复古桌面 |
| **Industrial Blue** | 专业蓝白，结构化栅格，企业感 |
| **Luxury Noir** | 黑金高级感，电影留白，黄铜细节 |

## 什么是 Skill？

Skill 是一个 **Markdown 文件**（约 18KB，无脚本，无外部请求）。将其放入任何 AI 编码工作流即可：

```
将 FrontTaste 的 "Fresh Minimal" Skill 应用到我的项目。
```

Skill 编码了完整的视觉 DNA——配色、排版、间距节奏、组件形态、动效曲线——让 AI 生成的 UI 在不同 prompt 之间保持一致。

## 本地开发

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000/zh`。

## 验证

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## 技术栈

Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript · Embla Carousel

所有风格切换通过 CSS `[data-style]` 选择器 + 自定义属性驱动，切换时零布局偏移。
