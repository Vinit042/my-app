"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type TypewriterTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypewriterText({ text, speed = 25, className }: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);
  const inView = useInView(ref, { margin: "-20% 0px", once: true });

  useEffect(() => {
    if (inView) {
      setHasStarted(true);
    }
  }, [inView]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    setDisplayed("");

    const id = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(id);
      }
    }, speed);

    return () => {
      window.clearInterval(id);
    };
  }, [hasStarted, speed, text]);

  return (
    <p
      ref={ref}
      className={cn("whitespace-pre-line text-slate-800", className)}
    >
      {displayed}
      <span className="inline-block w-[1px] translate-y-[2px] animate-typewriter-cursor bg-slate-800/70" />
    </p>
  );
}

