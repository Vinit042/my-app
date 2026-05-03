"use client";

import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const brandFont = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const TRANSITION: any = {
  duration: 0.45,
  ease: "easeOut",
};

const MotionLink = motion(Link);

export function WhoWeAreSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20">
      {/* Brand ambient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[340px] w-[120%] -translate-x-1/2 rounded-full bg-gradient-to-b from-blue-100/60 via-transparent to-transparent blur-3xl dark:from-blue-950/30" />
        <div className="absolute bottom-1/4 left-1/2 h-[260px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-t from-indigo-100/40 via-transparent to-transparent blur-3xl dark:from-indigo-950/25" />
      </div>

      <div className="relative flex w-full flex-col items-center space-y-8 border-y border-white/70 bg-white/60 px-4 py-10 text-center shadow-[0_22px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:space-y-10 sm:px-8 md:px-12">
        {/* WHO WE ARE */}
        <p
          className={cn(
            brandFont.className,
            "text-xs font-semibold tracking-[0.3em] text-foreground/60 sm:text-sm"
          )}
        >
          WHO WE ARE
        </p>

        {/* BRAND NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={TRANSITION}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e3a8a] tracking-tight"
        >
          Business Growth Services
        </motion.h1>

        {/* BRAND TAGLINE */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...TRANSITION, delay: 0.1 }}
          className="max-w-2xl text-lg sm:text-xl md:text-2xl font-medium text-foreground/80"
        >
          Powering scale across logistics, real estate, and digital systems.
        </motion.p>

        {/* BRAND DOMAINS */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...TRANSITION, delay: 0.18 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base font-semibold text-foreground/70"
        >
          <span>Logistics Enablement</span>
          <span className="text-foreground/30">•</span>
          <span>Real Estate Advisory</span>
          <span className="text-foreground/30">•</span>
          <span>Enterprise SaaS</span>
        </motion.div>

        {/* CTA */}
        <MotionLink
          href="/services/logistics"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...TRANSITION, delay: 0.26 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="ds-btn-primary mt-4 rounded-xl bg-gradient-to-r from-[#0057ff] to-[#3b82f6] px-12 py-4 text-base font-semibold text-white shadow-xl shadow-[#0057ff]/30 transition-all hover:shadow-2xl hover:shadow-[#3b82f6]/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 md:text-lg"
        >
          Get Free Consultation
        </MotionLink>
      </div>
    </section>
  );
}
