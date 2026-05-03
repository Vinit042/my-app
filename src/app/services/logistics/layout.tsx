import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Logistics",
  description:
    "BGS logistics franchise solutions — booking points, hubs, and partnerships with leading delivery networks across India.",
};

export default function LogisticsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
