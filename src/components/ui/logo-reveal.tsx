"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const REVEAL_STORAGE_KEY = "bgs_logo_reveal_seen";
const REVEAL_DURATION_MS = 1800;
const OVERLAY_EXIT_MS = 400;

type LogoRevealProps = {
  children: React.ReactNode;
};

export function LogoReveal({ children }: LogoRevealProps) {
  const [showReveal, setShowReveal] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadySeen = sessionStorage.getItem(REVEAL_STORAGE_KEY) === "1";

    if (!reduceMotion && !alreadySeen) {
      setContentVisible(false);
      setShowReveal(true);

      const revealTimer = window.setTimeout(() => {
        setShowReveal(false);
      }, REVEAL_DURATION_MS);
      const contentTimer = window.setTimeout(() => {
        setContentVisible(true);
        sessionStorage.setItem(REVEAL_STORAGE_KEY, "1");
      }, REVEAL_DURATION_MS + OVERLAY_EXIT_MS);

      setIsReady(true);
      return () => {
        window.clearTimeout(revealTimer);
        window.clearTimeout(contentTimer);
      };
    }

    setContentVisible(true);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = showReveal ? "hidden" : "";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [showReveal, isReady]);

  // Safety: if overlay closes for any reason, ensure content becomes visible.
  useEffect(() => {
    if (isReady && !showReveal && !contentVisible) {
      setContentVisible(true);
    }
  }, [showReveal, contentVisible, isReady]);

  if (!isReady) return null;

  return (
    <>
      <motion.div
        initial={false}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className={contentVisible ? "" : "invisible pointer-events-none"}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showReveal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: OVERLAY_EXIT_MS / 1000, ease: "easeOut" }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.2),transparent_45%),radial-gradient(circle_at_70%_80%,rgba(45,212,191,0.18),transparent_48%),#0b1220]"
            aria-label="Loading website"
          >
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 8 }}
                animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1.02, 1], y: [8, 0, 0, -6] }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute inset-0 -z-10 rounded-full bg-cyan-300/20 blur-3xl" />
                <Image
                  src="/logo1.png"
                  alt="BGS"
                  width={220}
                  height={84}
                  priority
                  className="h-auto w-[170px] sm:w-[210px] object-contain drop-shadow-[0_14px_40px_rgba(6,182,212,0.28)]"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

