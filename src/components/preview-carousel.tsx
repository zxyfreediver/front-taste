"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useFronttasteStyle } from "@/components/style-provider";
import { previewTypes, type PreviewType } from "@/lib/fronttaste";

const labels: Record<PreviewType, string> = {
  landing: "Landing",
  dashboard: "Dashboard",
  settings: "Settings",
};

export function PreviewCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const { style } = useFronttasteStyle();

  useEffect(() => {
    if (!api) return;

    const timer = window.setInterval(() => {
      api.scrollNext();
    }, 3800);

    return () => window.clearInterval(timer);
  }, [api]);

  useEffect(() => {
    api?.scrollTo(0);
  }, [api, style.slug]);

  return (
    <section id="demo" className="ft-demo" data-ui="demo">
      <div className="ft-section-heading">
        <span className="ft-section-kicker">MemoPilot demos</span>
        <h2 className="ft-single-line-heading">Same prompt, different products</h2>
      </div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="ft-carousel">
        <CarouselContent>
          {previewTypes.map((type) => (
            <CarouselItem key={`${style.slug}-${type}`}>
              <article className="ft-demo-card" data-ui="panel">
                <div className="ft-demo-shot-frame" data-ui="window">
                  <Image
                    src={style.demoScreenshots[type]}
                    alt={`${style.name} ${labels[type]} demo for MemoPilot`}
                    className="ft-demo-shot"
                    width={1280}
                    height={820}
                    priority
                    sizes="(min-width: 1024px) 1024px, 94vw"
                    decoding="async"
                  />
                </div>
                <div className="ft-demo-caption" data-ui="row">
                  <div>
                    <span>{labels[type]}</span>
                    <p>Build a landing page for an AI meeting notes app.</p>
                  </div>
                  <a href={`/previews/${style.slug}/${type}`} className="ft-secondary-action" data-ui="button">
                    Open
                    <ArrowRight className="size-4" />
                  </a>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ft-carousel-button ft-carousel-button-prev" />
        <CarouselNext className="ft-carousel-button ft-carousel-button-next" />
      </Carousel>
    </section>
  );
}
