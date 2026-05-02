"use client";

import { useEffect, useRef, useState } from "react";
import { motion, Easing, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Direction = "top" | "bottom";

type BlurRevealTextProps = {
  text: string;
  className?: string;
  /**
   * Base delay before the first word starts animating (in seconds).
   * Default: 0
   */
  delay?: number;
  /**
   * Direction the words should animate in from.
   * - "top" -> y from -50px
   * - "bottom" -> y from 50px
   * Default: "top"
   */
  direction?: Direction;
  /**
   * Easing to use for the keyframe animation.
   * Can be a named easing like "easeInOut" or a cubic-bezier array.
   * Default: "easeInOut"
   */
  easing?: Easing | Easing[];
  /**
   * Called once when the final word's animation completes
   * (runs only for the first in-view animation).
   */
  onAnimationComplete?: () => void;
};

/**
 * BlurRevealText
 *
 * Splits text into words and reveals them sequentially with a
 * blur-to-clear animation when the component enters the viewport.
 */
export function BlurRevealText({
  text,
  className,
  delay = 0,
  direction = "top",
  easing = "easeInOut",
  onAnimationComplete,
}: BlurRevealTextProps) {
  const containerRef = useRef<HTMLParagraphElement | null>(null);
  const [hasEnteredView, setHasEnteredView] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasEnteredView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ").filter(Boolean);
  const fromY = direction === "bottom" ? 50 : -50;

  if (reduceMotion) {
    return (
      <p ref={containerRef} className={cn("flex flex-wrap text-4xl font-bold tracking-wide md:text-5xl", className)}>
        {text}
      </p>
    );
  }

  return (
    <p
      ref={containerRef}
      className={cn(
        "flex flex-wrap text-4xl font-bold tracking-wide md:text-5xl",
        className
      )}
    >
      {words.map((word, index) => {
        const wordDelay = delay + index * 0.2; // ~200ms between words

        const initialState = {
          opacity: 0,
          y: fromY,
          filter: "blur(10px)",
        };

        const keyframes = hasEnteredView
          ? {
              opacity: [0, 0.5, 1],
              y: [fromY, fromY / 2, 0],
              filter: ["blur(10px)", "blur(5px)", "blur(0px)"],
            }
          : initialState;

        const isLast = index === words.length - 1;

        return (
          <motion.span
            key={`${word}-${index}`}
            initial={initialState}
            animate={keyframes}
            transition={{
              duration: 0.7, // ~0.35s per step with 3 keyframes
              ease: easing,
              delay: wordDelay,
            }}
            style={{ willChange: "opacity, transform, filter" }}
            onAnimationComplete={isLast && hasEnteredView ? onAnimationComplete : undefined}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        );
      })}
    </p>
  );
}

