import type { Metadata } from "next";
import {
  EB_Garamond,
  Geist,
  Geist_Mono,
  IM_Fell_English,
  Silkscreen,
} from "next/font/google";
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

export const metadata: Metadata = {
  title: "FrontTaste",
  description:
    "Preview frontend taste before installing the Skill. A curated gallery of frontend style Skills for AI coding agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable} ${imFellEnglish.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
