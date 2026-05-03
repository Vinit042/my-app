import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how Business Growth Services (BGS) unifies logistics, real estate, and SaaS to simplify expansion.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
