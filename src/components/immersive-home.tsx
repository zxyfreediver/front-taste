"use client";

import {
  Download,
  Mail,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { PreviewTabs } from "@/components/preview-tabs";
import { useFronttasteStyle } from "@/components/style-provider";
import { copy } from "@/lib/copy";
import { downloadPath, fronttasteStyles, type Locale } from "@/lib/fronttaste";

export function ImmersiveHome({ locale }: { locale: Locale }) {
  const { selectedStyle, setSelectedStyle, style } = useFronttasteStyle();
  const t = copy[locale];
  const contactEmail = "zxyfreediver@gmail.com";
  const subject = encodeURIComponent("FrontTaste style request");
  const heroTitle =
    locale === "en"
      ? ["Preview a frontend style", "then download the Skill"]
      : [t.hero.title];
  const body = encodeURIComponent(
    locale === "zh"
      ? "你好，我想给 FrontTaste 提一个新风格需求：\n\n产品类型：\n想要的视觉气质：\n参考产品或网站：\n补充说明："
      : "Hi, I want to request a FrontTaste style:\n\nProduct type:\nDesired visual mood:\nReference products or sites:\nNotes:",
  );

  return (
    <div className="ft-page">
      <section className="ft-style-deck" aria-label={t.sections.published}>
        <div className="ft-style-deck-copy">
          <span className="ft-section-kicker">FrontTaste</span>
          <h1 aria-label={t.hero.title}>
            {heroTitle.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          <p>{t.hero.body}</p>
        </div>
        <div className="ft-style-buttons" role="list" aria-label={t.home.stylePickerLabel}>
          {fronttasteStyles.map((item) => {
            const ItemIcon = item.theme.icon;
            const isSelected = item.slug === selectedStyle;

            return (
              <button
                key={item.slug}
                type="button"
                className="ft-style-button"
                data-active={isSelected}
                aria-pressed={isSelected}
                onClick={() => setSelectedStyle(item.slug)}
              >
                <ItemIcon className="size-4" />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </section>

      <PreviewTabs locale={locale} />

      <section id="install" className="ft-install" data-ui="install">
        <div className="ft-section-heading">
          <span className="ft-section-kicker">{t.sections.install}</span>
          <h2>{t.installPage.downloads}</h2>
          <p>{t.installPage.safe}</p>
        </div>
        <div className="ft-install-grid">
          <div className="ft-install-card" data-ui="panel">
            <ShieldCheck className="size-7" />
            <h3>{style.name} Skill</h3>
            <p>{style.styleSignature.promptEffect}</p>
            <a href={downloadPath(style.slug)} className="ft-primary-action" data-ui="cta">
              <Download className="size-4" />
              {t.cta.download}
            </a>
          </div>
          <div className="ft-step-list" data-ui="panel">
            {t.home.installSteps.map(({ title, body }, index) => (
              <div key={title} className="ft-step" data-ui="row">
                <span>{index + 1}</span>
                <div>
                  <strong>{title}</strong>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="ft-download-list" data-ui="panel">
            <h3>{t.home.downloadsTitle}</h3>
            <div>
              {fronttasteStyles.map((item) => (
                <a key={item.slug} href={downloadPath(item.slug)} data-active={item.slug === selectedStyle}>
                  <item.theme.icon className="size-4" />
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="request" className="ft-request" data-ui="request">
        <div className="ft-request-card" data-ui="panel">
          <div>
            <span className="ft-section-kicker">{t.requestPage.emailLabel}</span>
            <h2>{t.requestPage.title}</h2>
            <p>{t.requestPage.body}</p>
          </div>
          <div className="ft-request-actions">
            <a href={`mailto:${contactEmail}`} className="ft-email-link">
              {contactEmail}
            </a>
            <a href={`mailto:${contactEmail}?subject=${subject}&body=${body}`} className="ft-primary-action" data-ui="cta">
              <Mail className="size-4" />
              {t.requestPage.button}
            </a>
          </div>
        </div>
        <div className="ft-signature-card" data-ui="panel">
          <Sparkles className="size-6" />
          <h3>{style.styleSignature.motif}</h3>
          <p>{style.styleSignature.componentShape}</p>
          <div className="ft-chip-row">
            {style.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <div className="ft-signature-card" data-ui="panel">
          <Zap className="size-6" />
          <h3>{style.styleSignature.texture}</h3>
          <p>{style.visualDNA.layout}</p>
          <div className="ft-chip-row">
            <span>{style.theme.density}</span>
            <span>{t.home.noScripts}</span>
            <span>{t.home.cssDriven}</span>
          </div>
        </div>
      </section>
    </div>
  );
}
