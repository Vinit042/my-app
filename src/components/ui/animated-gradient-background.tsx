import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedGradientBackgroundProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Full-page animated gradient background using a soft, professional palette.
 * - Uses only the specified hex colors.
 * - Animation is slow, calm, and loops seamlessly.
 * - Gradient dims automatically in dark mode.
 */
export function AnimatedGradientBackground({
  children,
  className,
}: AnimatedGradientBackgroundProps) {
  return (
    <div className={cn("relative min-h-screen w-full overflow-hidden", className)}>
      {/* Animated gradient layer behind everything */}
      <div className="pointer-events-none fixed inset-0 -z-30">
        <div className="h-full w-full animated-gradient-layer" />
      </div>

      {/* Soft blur overlay between gradient and content (no blur on content itself) */}
      <div className="pointer-events-none fixed inset-0 -z-20 animated-gradient-blur" />

      {/* Page content */}
      <div className="relative z-0">{children}</div>
    </div>
  );
}

