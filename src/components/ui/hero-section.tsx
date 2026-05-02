"use client";

import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { motion } from "framer-motion";
import { ArrowRight, Globe2, Headphones, Play, ShieldCheck, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const capabilityItems = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Serving businesses across 25+ countries",
  },
  {
    icon: ShieldCheck,
    title: "Reliable & Secure",
    description: "Enterprise-grade security and compliance",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Built to grow with your business",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Dedicated support whenever you need",
  },
];

export function HeroSection() {
  return (
    <section className="relative mx-auto mt-16 w-full max-w-[90rem] px-4 pb-8 pt-14 sm:px-6 md:mt-20 md:pb-10 md:pt-16 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[78%] rounded-[2.25rem] bg-gradient-to-r from-white/78 via-white/52 to-blue-100/42" />

      <div className="relative grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
        <StaticContent />
        <HeroVisual />
      </div>

      <CapabilityStrip />
    </section>
  );
}

function StaticContent() {
  return (
    <div className="max-w-2xl space-y-5 pt-2 lg:space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full border border-blue-200/70 bg-blue-50/80 px-4 py-1.5 text-xs font-semibold text-blue-700 backdrop-blur-sm"
          )}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600" />
          </span>
          Trusted by 500+ businesses
        </span>
      </motion.div>

      <h1 className={cn(headingFont.className, "text-4xl font-bold leading-[0.93] tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-[5.2rem]")}>
        <span className="block text-slate-950">End-to-End</span>
        <span className="block bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 bg-clip-text text-transparent">
          BUSINESS
        </span>
        <span className="block text-slate-950">SOLUTIONS</span>
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-lg text-base leading-relaxed text-slate-600"
      >
        We deliver scalable logistics, technology, and real estate solutions that power modern enterprises across the globe.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.48 }}
        className="max-w-md text-sm font-semibold text-indigo-700"
      >
        One integrated partner. Three growth engines.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap items-center gap-3 pt-2"
      >
        <a
          href="#contact"
          className={cn(
            "group inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold sm:text-base",
            headingFont.className,
            "ds-btn-primary bg-gradient-to-r from-blue-600 to-indigo-600 text-white",
            "shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-600/35"
          )}
        >
          Get Free Consultation
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        <a
          href="#services"
          className={cn(
            "inline-flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold sm:text-base",
            headingFont.className,
            "border border-slate-300/80 bg-white/70 text-slate-700 backdrop-blur-sm",
            "shadow-sm transition-all duration-300",
            "hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-md"
          )}
        >
          Explore Services
          <ArrowRight className="h-4 w-4" />
        </a>
      </motion.div>

      <HeroSecondaryCTA />
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="relative min-h-[420px] overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(255,255,255,0.55),transparent_40%),radial-gradient(circle_at_85%_30%,rgba(196,181,253,0.35),transparent_42%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(59,130,246,0.8) 0.5px, transparent 0.5px), radial-gradient(circle at 70% 45%, rgba(99,102,241,0.8) 0.5px, transparent 0.5px)",
          backgroundSize: "26px 26px, 22px 22px",
        }}
      />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-300/55 shadow-[0_0_45px_rgba(99,102,241,0.28)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[66%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-indigo-300/55 shadow-[0_0_40px_rgba(59,130,246,0.22)]" />
      <div className="pointer-events-none absolute bottom-6 left-1/2 h-20 w-[82%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-300/30 via-indigo-300/35 to-violet-300/30 blur-2xl" />

      <Image
        src="/hero-bgs.png"
        alt="Integrated business growth visual showing logistics, SaaS, and real estate"
        fill
        sizes="(min-width: 1024px) 760px, (min-width: 768px) 560px, 100vw"
        className="object-cover object-[64%_52%] scale-[1.08] md:scale-[1.12]"
        priority
      />
    </div>
  );
}

function CapabilityStrip() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.7 }}
      className="mt-4 grid gap-3 rounded-[1.25rem] border border-white/70 bg-white/75 p-3 shadow-[0_16px_48px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
    >
      {capabilityItems.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="flex items-start gap-3 rounded-xl px-2 py-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{item.title}</p>
              <p className="mt-0.5 text-xs text-slate-600">{item.description}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

function HeroSecondaryCTA() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      className="mt-6 flex flex-wrap items-center gap-4"
    >
      <button
        type="button"
        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-600">
          <Play className="h-3.5 w-3.5" />
        </span>
        Watch how it works
      </button>
    </motion.div>
  );
}
