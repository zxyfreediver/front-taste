"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PreviewRenderer } from "@/components/preview-renderer";
import { useFronttasteStyle } from "@/components/style-provider";
import { copy } from "@/lib/copy";
import { previewTypes, type Locale, type PreviewType } from "@/lib/fronttaste";

export function PreviewTabs({ locale }: { locale: Locale }) {
  const [activeType, setActiveType] = useState<PreviewType>("commerce");
  const { style } = useFronttasteStyle();
  const t = copy[locale];

  return (
    <section id="demo" className="ft-demo" data-ui="demo">
      <div className="ft-section-heading ft-demo-heading">
        <div>
          <span className="ft-section-kicker">{t.demo.kicker}</span>
          <h2 className="ft-single-line-heading">{t.demo.title}</h2>
        </div>
        <a href={`/previews/${style.slug}/${activeType}`} className="ft-secondary-action" data-ui="button">
          {t.demo.open}
          <ArrowRight className="size-4" />
        </a>
      </div>

      <div className="ft-demo-card" data-ui="panel">
        <div className="ft-demo-tabs" role="tablist" aria-label="Rendered demo pages">
          {previewTypes.map((type) => {
            const isActive = activeType === type;

            return (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={isActive}
                className="ft-demo-tab"
                data-active={isActive}
                onClick={() => setActiveType(type)}
              >
                {t.demo.labels[type]}
              </button>
            );
          })}
        </div>

        <div className="ft-demo-prompt" data-ui="row">
          <span>{t.demo.promptLabel}</span>
          <p>{t.demo.prompts[activeType]}</p>
        </div>

        <div className="ft-demo-render-frame" role="tabpanel" aria-label={t.demo.labels[activeType]}>
          <PreviewRenderer style={style} type={activeType} framed />
        </div>
      </div>
    </section>
  );
}
