import { ArrowRight, CheckCircle2, CircleDot, Mic2 } from "lucide-react";
import type { PreviewType, StyleSkill } from "@/lib/fronttaste";

const previewCopy = {
  landing: {
    eyebrow: "AI meeting notes app",
    title: "Turn every meeting into a clean decision trail.",
    body: "MemoPilot captures calls, extracts owners, and keeps follow-ups moving without another noisy workspace.",
    action: "Start capture",
  },
  dashboard: {
    eyebrow: "Team analytics",
    title: "Follow-up health across every room.",
    body: "Review owners, risks, decision latency, and action closure from one focused command surface.",
    action: "Sync reports",
  },
  settings: {
    eyebrow: "Billing and settings",
    title: "Tune the workspace without losing the thread.",
    body: "Manage usage, integrations, security, retention, and AI summaries with clear operational controls.",
    action: "Update plan",
  },
} satisfies Record<PreviewType, { eyebrow: string; title: string; body: string; action: string }>;

const metrics = [
  ["Decision score", "92"],
  ["Owners found", "42"],
  ["Open risks", "07"],
  ["Follow-ups", "1.2k"],
];

const rows = [
  ["Decision summary", "Async recap launches before workspace rollout.", "Ready"],
  ["Action owners", "Jia owns pilot docs, Mira owns admin setup.", "Assigned"],
  ["Risk signals", "Pricing page approval is one cycle behind.", "Watch"],
  ["Slack action sync", "Four follow-ups queued for tomorrow morning.", "Live"],
];

export function PreviewRenderer({
  style,
  type,
  framed = false,
}: {
  style: StyleSkill;
  type: PreviewType;
  framed?: boolean;
}) {
  const copy = previewCopy[type];
  const Icon = style.theme.icon;

  return (
    <div
      className={framed ? "ft-preview ft-preview-framed" : "ft-preview"}
      data-style={style.slug}
      data-preview={type}
    >
      <section className="ft-preview-canvas" data-ui="preview-canvas">
        <div className="ft-preview-nav" data-ui="window-bar">
          <div className="ft-preview-brand">
            <span>
              <Icon className="size-4" />
            </span>
            MemoPilot
          </div>
          <div className="ft-preview-nav-links">
            <span>Product</span>
            <span>Security</span>
            <span>Pricing</span>
          </div>
          <button type="button" data-ui="button">
            Try preview
          </button>
        </div>

        <div className="ft-preview-layout" data-ui="product-grid">
          <div className="ft-preview-hero" data-ui="panel">
            <span className="ft-section-kicker">{copy.eyebrow}</span>
            <h1>{copy.title}</h1>
            <p>{copy.body}</p>
            <div className="ft-preview-actions">
              <button type="button" data-ui="cta">
                {copy.action}
                <ArrowRight className="size-4" />
              </button>
              <button type="button" data-ui="button">
                View sample
              </button>
            </div>
          </div>

          <aside className="ft-preview-side" data-ui="panel">
            <div className="ft-preview-side-top">
              <span className="ft-mini-label">Live brief</span>
              <Mic2 className="size-5" />
            </div>
            <div className="ft-preview-meter" data-ui="metric">
              <strong>{type === "settings" ? "18" : "92"}</strong>
              <span>{type === "settings" ? "workspace seats" : "decision score"}</span>
            </div>
            <div className="ft-preview-radar" data-ui="radar">
              <CircleDot className="size-4" />
              <span>{style.styleSignature.motif}</span>
            </div>
          </aside>
        </div>

        <div className="ft-preview-lower" data-ui="product-main">
          <div className="ft-preview-table" data-ui="panel">
            <div className="ft-preview-table-head" data-ui="row">
              <span>Signal</span>
              <span>Summary</span>
              <span>Status</span>
            </div>
            {rows.map(([title, summary, status]) => (
              <div key={title} className="ft-preview-table-row" data-ui="row">
                <strong>{title}</strong>
                <span>{summary}</span>
                <em>{status}</em>
              </div>
            ))}
          </div>

          <div className="ft-preview-metrics">
            {metrics.map(([label, value]) => (
              <div key={label} className="ft-preview-metric" data-ui="metric">
                <CheckCircle2 className="size-4" />
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
