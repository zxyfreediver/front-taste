import type { Metadata } from "next";
import Script from "next/script";
import {
  Bodoni_Moda,
  EB_Garamond,
  Geist,
  Geist_Mono,
  IM_Fell_English,
  Silkscreen,
  VT323,
} from "next/font/google";
import { HtmlLangSync } from "@/components/html-lang-sync";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const silkscreen = Silkscreen({
  variable: "--font-silkscreen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const imFellEnglish = IM_Fell_English({
  variable: "--font-im-fell",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
});

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni-moda",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "FrontTaste",
  description:
    "Preview frontend taste before installing the Skill. A curated gallery of frontend style Skills for AI coding agents.",
};

const langInitScript =
  'document.documentElement.lang=location.pathname.split("/")[1]==="zh"?"zh":"en";';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} ${imFellEnglish.variable} ${ebGaramond.variable} ${vt323.variable} ${bodoniModa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="fronttaste-lang" strategy="beforeInteractive">
          {langInitScript}
        </Script>
        <HtmlLangSync />
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
