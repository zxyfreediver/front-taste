import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Boxes,
  CreditCard,
  LayoutDashboard,
  LockKeyhole,
  Mail,
  PackageCheck,
  Search,
  Settings,
  ShieldCheck,
  ShoppingBag,
  UserRound,
} from "lucide-react";
import type { PreviewType, StyleSkill } from "@/lib/fronttaste";

const commerceProducts = [
  ["Aero Monitor Arm", "$189", "Carbon lift"],
  ["Quiet Keys Pro", "$142", "Low-profile"],
  ["Dock Shelf Max", "$96", "Walnut"],
];

const adminMenu = ["Overview", "Members", "Billing", "Integrations", "Security"];

const profileFacts = [
  ["Role", "Design systems lead"],
  ["Workspace", "Northstar Labs"],
  ["Plan", "Team Pro"],
  ["Last login", "Today, 09:42"],
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
  return (
    <div
      className={framed ? "ft-preview ft-preview-framed" : "ft-preview"}
      data-style={style.slug}
      data-preview={type}
    >
      <section className="ft-preview-canvas" data-ui="preview-canvas">
        {type === "commerce" && <CommercePreview style={style} />}
        {type === "admin" && <AdminPreview style={style} />}
        {type === "auth" && <AuthPreview style={style} />}
        {type === "profile" && <ProfilePreview style={style} />}
      </section>
    </div>
  );
}

function PreviewTopbar({
  style,
  title,
  nav,
  action,
}: {
  style: StyleSkill;
  title: string;
  nav: string[];
  action: string;
}) {
  const Icon = style.theme.icon;

  return (
    <div className="ft-preview-nav" data-ui="window-bar">
      <div className="ft-preview-brand">
        <span>
          <Icon className="size-4" />
        </span>
        {title}
      </div>
      <div className="ft-preview-nav-links">
        {nav.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <button type="button" data-ui="button">
        {action}
      </button>
    </div>
  );
}

function CommercePreview({ style }: { style: StyleSkill }) {
  return (
    <div className="ft-preview-page ft-preview-commerce">
      <PreviewTopbar style={style} title="DeskFlow" nav={["Chairs", "Lighting", "Audio"]} action="Cart 03" />
      <div className="ft-preview-layout" data-ui="product-grid">
        <div className="ft-preview-hero" data-ui="panel">
          <span className="ft-section-kicker">Premium desk store</span>
          <h1>Build a calmer command center.</h1>
          <p>Curated workstations, silent peripherals, and tactile desk objects for focused operators.</p>
          <div className="ft-preview-actions">
            <button type="button" data-ui="cta">
              Shop the edit
              <ArrowRight className="size-4" />
            </button>
            <button type="button" data-ui="button">
              View setups
            </button>
          </div>
        </div>

        <aside className="ft-preview-side" data-ui="panel">
          <div className="ft-preview-side-top">
            <span className="ft-mini-label">Launch offer</span>
            <ShoppingBag className="size-5" />
          </div>
          <div className="ft-preview-meter" data-ui="metric">
            <strong>24%</strong>
            <span>bundle savings</span>
          </div>
          <div className="ft-preview-radar" data-ui="radar">
            <PackageCheck className="size-4" />
            <span>Ships in two business days with setup notes.</span>
          </div>
        </aside>
      </div>

      <div className="ft-preview-products">
        {commerceProducts.map(([name, price, note]) => (
          <article key={name} className="ft-preview-product" data-ui="panel">
            <div className="ft-preview-product-art">
              <Boxes className="size-6" />
            </div>
            <div>
              <strong>{name}</strong>
              <span>{note}</span>
            </div>
            <em>{price}</em>
          </article>
        ))}
      </div>
    </div>
  );
}

function AdminPreview({ style }: { style: StyleSkill }) {
  return (
    <div className="ft-preview-page ft-preview-admin">
      <PreviewTopbar style={style} title="OpsBoard" nav={["Workspace", "Reports", "Policy"]} action="Save draft" />
      <div className="ft-preview-admin-shell">
        <aside className="ft-preview-sidebar" data-ui="panel">
          <div className="ft-preview-sidebar-title">
            <LayoutDashboard className="size-4" />
            Admin
          </div>
          {adminMenu.map((item, index) => (
            <button key={item} type="button" data-ui={index === 2 ? "cta" : "button"}>
              {item}
            </button>
          ))}
        </aside>

        <section className="ft-preview-form" data-ui="panel">
          <div className="ft-preview-form-head">
            <div>
              <span className="ft-section-kicker">Workspace settings</span>
              <h1>Billing and access controls</h1>
            </div>
            <ShieldCheck className="size-6" />
          </div>
          <div className="ft-preview-form-grid">
            <label className="ft-preview-field" data-ui="row">
              <span>Company name</span>
              <strong>Northstar Labs</strong>
            </label>
            <label className="ft-preview-field" data-ui="row">
              <span>Invoice email</span>
              <strong>finance@northstar.ai</strong>
            </label>
            <label className="ft-preview-field ft-preview-field-wide" data-ui="row">
              <span>Default role</span>
              <strong>Editor with export approval</strong>
            </label>
            <div className="ft-preview-toggle-row" data-ui="row">
              <span>Require SSO for new members</span>
              <em>Enabled</em>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function AuthPreview({ style }: { style: StyleSkill }) {
  return (
    <div className="ft-preview-page ft-preview-auth">
      <PreviewTopbar style={style} title="Northstar" nav={["Product", "Security", "Docs"]} action="Book demo" />
      <div className="ft-preview-auth-grid">
        <section className="ft-preview-hero" data-ui="panel">
          <span className="ft-section-kicker">Secure workspace login</span>
          <h1>Start your team account in under a minute.</h1>
          <p>One page for registration and sign-in, with clear account trust cues before the form.</p>
          <div className="ft-preview-trust-row">
            {["SOC 2", "SSO ready", "2FA"].map((item) => (
              <span key={item} data-ui="metric">
                <BadgeCheck className="size-4" />
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="ft-preview-auth-card" data-ui="panel">
          <div className="ft-preview-auth-tabs" data-ui="row">
            <button type="button" data-ui="cta">
              Sign up
            </button>
            <button type="button" data-ui="button">
              Log in
            </button>
          </div>
          <label className="ft-preview-field" data-ui="row">
            <span>Email</span>
            <strong>you@company.com</strong>
            <Mail className="size-4" />
          </label>
          <label className="ft-preview-field" data-ui="row">
            <span>Password</span>
            <strong>••••••••••</strong>
            <LockKeyhole className="size-4" />
          </label>
          <button type="button" data-ui="cta" className="ft-preview-wide-button">
            Create account
            <ArrowRight className="size-4" />
          </button>
        </section>
      </div>
    </div>
  );
}

function ProfilePreview({ style }: { style: StyleSkill }) {
  return (
    <div className="ft-preview-page ft-preview-profile">
      <PreviewTopbar style={style} title="Account" nav={["Profile", "Plan", "Security"]} action="Edit" />
      <div className="ft-preview-profile-grid">
        <section className="ft-preview-profile-card" data-ui="panel">
          <div className="ft-preview-avatar">
            <UserRound className="size-8" />
          </div>
          <span className="ft-section-kicker">Personal information</span>
          <h1>Avery Chen</h1>
          <p>Product design lead reviewing workspace access, account details, and recent security status.</p>
          <div className="ft-preview-actions">
            <button type="button" data-ui="cta">
              Update profile
            </button>
            <button type="button" data-ui="button">
              Download data
            </button>
          </div>
        </section>

        <section className="ft-preview-profile-details" data-ui="panel">
          <div className="ft-preview-search" data-ui="row">
            <Search className="size-4" />
            <span>Search profile records</span>
          </div>
          <div className="ft-preview-fact-grid">
            {profileFacts.map(([label, value]) => (
              <div key={label} className="ft-preview-fact" data-ui="row">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
          <div className="ft-preview-profile-events">
            <div data-ui="metric">
              <Bell className="size-4" />
              <span>Notification digest is weekly.</span>
            </div>
            <div data-ui="metric">
              <CreditCard className="size-4" />
              <span>Next renewal: June 12, 2026.</span>
            </div>
            <div data-ui="metric">
              <Settings className="size-4" />
              <span>Two-factor authentication is active.</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
