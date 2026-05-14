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
import { copy } from "@/lib/copy";
import { previewTypes, type Locale } from "@/lib/fronttaste";

export function PreviewCarousel({ locale }: { locale: Locale }) {
  const [api, setApi] = useState<CarouselApi>();
  const { style } = useFronttasteStyle();
  const t = copy[locale];

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
        <span className="ft-section-kicker">{t.demo.kicker}</span>
        <h2 className="ft-single-line-heading">{t.demo.title}</h2>
      </div>
      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="ft-carousel">
        <CarouselContent>
          {previewTypes.map((type) => (
            <CarouselItem key={`${style.slug}-${type}`}>
              <article className="ft-demo-card" data-ui="panel">
                <div className="ft-demo-shot-frame" data-ui="window">
                  <Image
                    src={style.demoScreenshots[type]}
                    alt={`${style.name} ${t.demo.labels[type]} demo for MemoPilot`}
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
                    <span>{t.demo.labels[type]}</span>
                    <p>{t.sharedPrompt}</p>
                  </div>
                  <a href={`/previews/${style.slug}/${type}`} className="ft-secondary-action" data-ui="button">
                    {t.demo.open}
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
