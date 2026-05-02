import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type GlassCardProps = {
  className?: string;
  children: ReactNode;
};

/**
 * Reusable glassmorphism card container.
 * Uses Tailwind utilities for blur, borders, and subtle background glow.
 */
export function GlassCard({ className, children }: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-8 shadow-[0_18px_60px_rgba(15,23,42,0.35)] backdrop-blur-xl",
        "dark:border-white/10 dark:bg-zinc-900/40",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-px rounded-[22px] bg-gradient-to-br from-white/35 via-white/10 to-transparent opacity-80 dark:from-white/10 dark:via-white/5" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

