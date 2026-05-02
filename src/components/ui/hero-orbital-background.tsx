"use client";

import { cn } from "@/lib/utils";

type HeroOrbitalBackgroundProps = {
  className?: string;
};

/**
 * Two large soft pastel ovals orbiting the same fixed center.
 * Offset from center so rotation creates a visible orbit with overlap.
 * Sits behind the delivery cutout in the hero section.
 */
export function HeroOrbitalBackground({ className }: HeroOrbitalBackgroundProps) {
  return (
    <div
      className={cn("absolute inset-0 overflow-visible", className)}
      aria-hidden
    >
      {/* Fixed center point — both ovals orbit around this */}
      <div className="absolute left-1/2 top-1/2">
        {/* Oval 1 — clockwise, light blue, larger */}
        <div className="hero-orbital-oval-cw">
          <div
            className={cn(
              "absolute h-[380px] w-[540px] rounded-full",
              "bg-gradient-to-br from-blue-300/55 via-sky-200/45 to-indigo-300/50",
              "blur-[80px]",
              "dark:from-blue-500/30 dark:via-sky-400/20 dark:to-indigo-500/25"
            )}
            style={{ left: "-320px", top: "-250px" }}
          />
        </div>

        {/* Oval 2 — counter-clockwise, soft violet */}
        <div className="hero-orbital-oval-ccw">
          <div
            className={cn(
              "absolute h-[400px] w-[560px] rounded-full",
              "bg-gradient-to-br from-violet-300/50 via-purple-200/45 to-blue-300/45",
              "blur-[80px]",
              "dark:from-violet-500/25 dark:via-purple-400/20 dark:to-blue-500/20"
            )}
            style={{ left: "-200px", top: "-150px" }}
          />
        </div>

        {/* Center glow — pulsing subtly */}
        <div
          className={cn(
            "absolute h-[300px] w-[300px] rounded-full",
            "bg-gradient-to-br from-sky-200/35 via-indigo-100/25 to-violet-200/20",
            "blur-[70px] animate-pulse",
            "dark:from-sky-400/15 dark:via-indigo-300/10 dark:to-violet-400/10"
          )}
          style={{ left: "-150px", top: "-150px" }}
        />
      </div>
    </div>
  );
}
