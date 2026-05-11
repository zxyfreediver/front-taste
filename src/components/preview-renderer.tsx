import { Activity, ArrowRight, CheckCircle2, CircleDot, Cpu, Database, LockKeyhole, MessageSquare, Settings, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { PreviewType, StyleSkill } from "@/lib/fronttaste";

export function PreviewRenderer({
  style,
  type,
  framed = false,
}: {
  style: StyleSkill;
  type: PreviewType;
  framed?: boolean;
}) {
  return (
    <div
      className={framed ? "overflow-hidden border bg-white" : "min-h-screen"}
      style={{
        background: `${style.theme.pattern}, ${style.theme.bg}`,
        color: style.theme.text,
        borderColor: style.theme.border,
        borderRadius: framed ? style.theme.radius : undefined,
      }}
    >
      {type === "landing" && <LandingPreview style={style} framed={framed} />}
      {type === "dashboard" && <DashboardPreview style={style} framed={framed} />}
      {type === "settings" && <SettingsPreview style={style} framed={framed} />}
    </div>
  );
}

function Surface({
  style,
  className = "",
  children,
}: {
  style: StyleSkill;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={className}
      style={{
        background: style.theme.surface,
        border: `1px solid ${style.theme.border}`,
        borderRadius: style.theme.radius,
        boxShadow: style.theme.shadow,
      }}
    >
      {children}
    </div>
  );
}

function LandingPreview({ style, framed }: { style: StyleSkill; framed: boolean }) {
  const Icon = style.theme.icon;
  return (
    <section className={framed ? "p-6" : "mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10"}>
      <nav className="mb-10 flex items-center justify-between text-sm">
        <div className="flex items-center gap-3 font-semibold">
          <span
            className="flex size-9 items-center justify-center border"
            style={{ borderColor: style.theme.border, borderRadius: style.theme.radius, background: style.theme.surface }}
          >
            <Icon className="size-5" style={{ color: style.theme.accent }} />
          </span>
          MemoPilot
        </div>
        <div className="hidden gap-6 md:flex" style={{ color: style.theme.muted }}>
          <span>Product</span>
          <span>Security</span>
          <span>Pricing</span>
        </div>
        <Button
          size="sm"
          style={{ background: style.theme.accent, color: style.theme.accentText, borderRadius: style.theme.radius }}
        >
          Try preview
        </Button>
      </nav>
      <div className="grid gap-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center">
        <div className="max-w-2xl">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.22em]" style={{ color: style.theme.muted }}>
            AI meeting notes app
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl">
            Turn every meeting into a clean decision trail.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: style.theme.muted }}>
            MemoPilot captures calls, extracts owners, and keeps follow-ups moving without another noisy workspace.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button style={{ background: style.theme.accent, color: style.theme.accentText, borderRadius: style.theme.radius }}>
              Download this Skill <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline" style={{ borderColor: style.theme.border, borderRadius: style.theme.radius }}>
              View dashboard
            </Button>
          </div>
        </div>
        <Surface style={style} className="p-4">
          <div className="grid gap-3">
            {["Decision summary", "Action owners", "Risk signals"].map((item, index) => (
              <div
                key={item}
                className="flex items-center justify-between border p-4"
                style={{
                  borderColor: style.theme.border,
                  borderRadius: style.theme.radius,
                  background: index === 0 ? style.theme.surfaceAlt : "transparent",
                }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="size-5" style={{ color: style.theme.accent }} />
                  <div>
                    <div className="font-medium">{item}</div>
                    <div className="text-xs" style={{ color: style.theme.muted }}>
                      Updated 4 minutes ago
                    </div>
                  </div>
                </div>
                <span className="font-mono text-sm" style={{ color: style.theme.muted }}>
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </Surface>
      </div>
    </section>
  );
}

function DashboardPreview({ style, framed }: { style: StyleSkill; framed: boolean }) {
  const compact = style.theme.density === "compact";
  return (
    <section className={framed ? "p-5" : "mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10"}>
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Team analytics</h1>
          <p className="text-sm" style={{ color: style.theme.muted }}>
            Pipeline, meetings, and follow-up health across the workspace.
          </p>
        </div>
        <Button size="sm" style={{ background: style.theme.accent, color: style.theme.accentText, borderRadius: style.theme.radius }}>
          Sync reports
        </Button>
      </div>
      <div className="grid gap-4 lg:grid-cols-[220px_1fr]">
        <Surface style={style} className="p-4">
          {["Overview", "Meetings", "Deals", "Risks", "Exports"].map((item, index) => (
            <div
              key={item}
              className="mb-2 flex items-center gap-2 border px-3 py-2 text-sm"
              style={{
                borderColor: index === 0 ? style.theme.border : "transparent",
                borderRadius: style.theme.radius,
                background: index === 0 ? style.theme.surfaceAlt : "transparent",
                color: index === 0 ? style.theme.text : style.theme.muted,
              }}
            >
              <CircleDot className="size-3" />
              {item}
            </div>
          ))}
        </Surface>
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["Meeting score", "92%", Activity],
              ["Tasks closed", "1,284", CheckCircle2],
              ["Risk alerts", "17", ShieldCheck],
            ].map(([label, value, Icon]) => (
              <Surface key={label as string} style={style} className={compact ? "p-4" : "p-5"}>
                <Icon className="mb-5 size-5" style={{ color: style.theme.accent }} />
                <div className="text-3xl font-semibold">{value as string}</div>
                <div className="mt-1 text-sm" style={{ color: style.theme.muted }}>
                  {label as string}
                </div>
              </Surface>
            ))}
          </div>
          <Surface style={style} className="overflow-hidden">
            <div className="grid grid-cols-4 border-b px-4 py-3 font-mono text-xs" style={{ borderColor: style.theme.border, color: style.theme.muted }}>
              <span>Account</span>
              <span>Owner</span>
              <span>Status</span>
              <span className="text-right">Score</span>
            </div>
            {["Northstar AI", "Atlas Labs", "Mercury Ops", "Signal Desk"].map((name, index) => (
              <div key={name} className="grid grid-cols-4 border-b px-4 py-3 text-sm last:border-b-0" style={{ borderColor: style.theme.border }}>
                <span className="font-medium">{name}</span>
                <span style={{ color: style.theme.muted }}>{["Jia", "Mira", "Theo", "Alex"][index]}</span>
                <span style={{ color: index === 2 ? style.theme.accent : style.theme.muted }}>{index === 2 ? "Review" : "Healthy"}</span>
                <span className="text-right font-mono">{94 - index * 7}</span>
              </div>
            ))}
          </Surface>
        </div>
      </div>
    </section>
  );
}

function SettingsPreview({ style, framed }: { style: StyleSkill; framed: boolean }) {
  return (
    <section className={framed ? "p-5" : "mx-auto max-w-6xl px-5 py-8 sm:px-8 lg:px-10"}>
      <div className="mb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Billing and settings</h1>
        <p className="mt-2 text-sm" style={{ color: style.theme.muted }}>
          Manage workspace usage, integrations, security, and AI note retention.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-[260px_1fr]">
        <Surface style={style} className="p-4">
          {[
            ["Workspace", Settings],
            ["Usage", Zap],
            ["Security", LockKeyhole],
            ["Data", Database],
            ["Assistants", Cpu],
          ].map(([label, Icon], index) => (
            <div
              key={label as string}
              className="mb-2 flex items-center gap-3 px-3 py-2 text-sm"
              style={{
                borderRadius: style.theme.radius,
                background: index === 1 ? style.theme.surfaceAlt : "transparent",
                color: index === 1 ? style.theme.text : style.theme.muted,
              }}
            >
              <Icon className="size-4" />
              {label as string}
            </div>
          ))}
        </Surface>
        <div className="grid gap-4">
          <Surface style={style} className="p-5">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold">Team plan</h2>
                <p className="mt-1 text-sm" style={{ color: style.theme.muted }}>
                  42 seats, 18,400 AI summaries, unlimited exports.
                </p>
              </div>
              <Button size="sm" style={{ background: style.theme.accent, color: style.theme.accentText, borderRadius: style.theme.radius }}>
                Update plan
              </Button>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {["Seats", "Minutes", "Storage"].map((label, index) => (
                <div key={label} className="border p-4" style={{ borderColor: style.theme.border, borderRadius: style.theme.radius }}>
                  <div className="font-mono text-2xl font-semibold">{["42", "8.4k", "62GB"][index]}</div>
                  <div className="text-xs" style={{ color: style.theme.muted }}>{label}</div>
                </div>
              ))}
            </div>
          </Surface>
          <Surface style={style} className="p-5">
            {["Slack action sync", "CRM field mapping", "Retention policy"].map((label, index) => (
              <div key={label} className="flex items-center justify-between border-b py-3 last:border-b-0" style={{ borderColor: style.theme.border }}>
                <div className="flex items-center gap-3">
                  <MessageSquare className="size-4" style={{ color: style.theme.accent }} />
                  <span>{label}</span>
                </div>
                <span className="text-sm" style={{ color: index === 2 ? style.theme.muted : style.theme.accent }}>
                  {index === 2 ? "90 days" : "Enabled"}
                </span>
              </div>
            ))}
          </Surface>
        </div>
      </div>
    </section>
  );
}
