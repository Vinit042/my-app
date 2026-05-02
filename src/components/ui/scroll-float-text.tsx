"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type ScrollFloatTextProps = {
  children: string;
  className?: string;
  /**
   * Stagger delay between characters (in seconds)
   * Default: 0.03
   */
  stagger?: number;
  /**
   * Animation duration per character (in seconds)
   * Default: 1
   */
  duration?: number;
  /**
   * Text color (for gradient or solid color)
   * Default: slate-600
   */
  textColor?: string;
  /**
   * Scroll-to-timeline coupling. Lower = animation completes in less scroll distance (faster feel).
   * Default: 1
   */
  scrub?: number;
};

/**
 * ScrollFloatText
 *
 * A premium scroll-triggered typography animation component.
 * Each character animates individually with a stretch-and-rise effect.
 */
export function ScrollFloatText({
  children,
  className,
  stagger = 0.03,
  duration = 1,
  textColor,
  scrub = 1,
}: ScrollFloatTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const container = containerRef.current;
    if (!container) return;

    // Split text into characters (preserve spaces)
    const text = children;
    const chars: string[] = [];
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (char === " ") {
        chars.push("\u00A0"); // Non-breaking space
      } else {
        chars.push(char);
      }
    }

    // Create character spans
    container.innerHTML = "";
    charsRef.current = [];
    
    // Create gradient stops for each character
    const totalChars = chars.length;
    
    chars.forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.display = "inline-block";
      span.style.transformOrigin = "top center";
      
      // Apply gradient color based on position
      if (textColor) {
        span.style.color = textColor;
      } else {
        // Create gradient effect with darker gray shades: darker at start, lighter at end
        const progress = index / Math.max(1, totalChars - 1);
        if (progress < 0.33) {
          span.style.color = "#374151"; // gray-700
        } else if (progress < 0.66) {
          span.style.color = "#4b5563"; // gray-600
        } else {
          span.style.color = "#6b7280"; // gray-500
        }
      }
      
      container.appendChild(span);
      charsRef.current.push(span);
    });

    // Set initial state for all characters
    gsap.set(charsRef.current, {
      opacity: 0,
      yPercent: 120,
      scaleY: 2.2,
      scaleX: 0.7,
      transformOrigin: "top center",
    });

    // Create timeline for character animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 85%",
        end: "top 15%",
        scrub,
        // markers: true, // Uncomment for debugging
      },
    });

    // Animate each character with stagger
    charsRef.current.forEach((char, index) => {
      tl.to(
        char,
        {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
          duration: duration,
          ease: "back.inOut(2)",
        },
        index * stagger
      );
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [children, stagger, duration, scrub, reduceMotion]);

  return (
    <h1
      ref={containerRef}
      className={cn(
        "font-bold leading-tight text-center",
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
        className
      )}
      style={{
        fontFeatureSettings: '"liga" 1, "kern" 1',
        textRendering: "optimizeLegibility",
        fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
        minHeight: "1.2em",
      }}
    >
      {children}
    </h1>
  );
}
