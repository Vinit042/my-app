import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { LogoReveal } from "@/components/ui/logo-reveal";

const sansFont = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const monoFont = Roboto_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://businessgrowthservices.in"),
  title: {
    default: "BGS | Business Growth Services",
    template: "%s | BGS",
  },
  description:
    "Business Growth Services (BGS) — logistics networks, real estate advisory, and SaaS enablement so you can grow with one trusted partner.",
  applicationName: "BGS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Business Growth Services",
    title: "BGS | Business Growth Services",
    description:
      "Logistics, real estate, and technology-driven growth for modern enterprises.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${sansFont.variable} ${monoFont.variable} antialiased`}
      >
        <LogoReveal>{children}</LogoReveal>
      </body>
    </html>
  );
}
