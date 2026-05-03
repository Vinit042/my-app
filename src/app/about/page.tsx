"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Lora } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { MarketingFooter } from "@/components/ui/marketing-footer";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const serifFont = Lora({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export default function AboutPage() {
  return (
    <AnimatedGradientBackground>
      <PageProgressBar />
      <GlassNavbar activeHref="/about/" />
      <main className="w-full">
        <AboutHero />
        <GoalsSection />
        <HowWeWorkSection />
        <OurJourneySection />
        {/* <TeamSection /> */}
      </main>
      <MarketingFooter />
    </AnimatedGradientBackground>
  );
}

function PageProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[70] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 shadow-[0_0_18px_rgba(56,189,248,0.55)]"
    />
  );
}

function AboutHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="mx-auto mt-16 w-full max-w-6xl px-4 pb-20 pt-12 sm:px-6 md:mt-20 md:pb-24 md:pt-16">
      <div className="flex flex-col items-center space-y-8 text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="rounded-full border border-slate-200/80 bg-white/70 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.34em] text-slate-600 shadow-sm backdrop-blur"
        >
          About us
        </motion.p>

        {/* Main Heading — Multi-line */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
          className={cn(
            serifFont.className,
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
          )}
        >
          <span className="block text-slate-900">We started</span>
          <span className="block italic bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Business Growth Services
          </span>
          <span className="block text-slate-900">with two goals in mind</span>
        </motion.h1>

        {/* Dashboard Image with abstract static shapes behind */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="relative z-10 mt-10 w-full max-w-4xl"
        >
          {/* Abstract teal/blue background blocks */}
          <motion.div
            aria-hidden
            animate={reduceMotion ? undefined : { y: [0, -10, 0], rotate: [-8, -6, -8] }}
            transition={reduceMotion ? undefined : { duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-8 top-2 h-48 w-[260px] -rotate-8 rounded-3xl bg-teal-300/80 sm:-left-20 sm:top-4 sm:h-72 sm:w-[460px]"
          />
          <motion.div
            aria-hidden
            animate={reduceMotion ? undefined : { y: [0, 12, 0], rotate: [8, 10, 8] }}
            transition={reduceMotion ? undefined : { duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-8 top-10 h-48 w-[260px] rotate-8 rounded-3xl bg-blue-300/80 sm:-right-20 sm:top-16 sm:h-72 sm:w-[460px]"
          />

          {/* Dashboard image container */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.22)]">
            <div className="relative" style={{ transform: "perspective(1200px) rotateX(2deg)" }}>
              <Image
                src="/Dashboad2.png"
                alt="Business Growth analytics dashboard showing performance metrics"
                width={1400}
                height={840}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GoalsSection() {
  return (
    <section className="w-full bg-white px-3 pb-20 pt-0 sm:px-4 md:px-6 md:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative -mt-16 w-full overflow-hidden rounded-[2.25rem] border border-slate-200/80 bg-gradient-to-r from-sky-50 via-blue-100/85 to-indigo-50 px-4 py-8 shadow-[0_26px_80px_rgba(15,23,42,0.18)] sm:-mt-20 sm:px-8 sm:py-12 md:-mt-24 md:px-12 md:py-16"
      >
        <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-1/3 h-56 w-56 rounded-full bg-indigo-300/25 blur-3xl" />
        <div className="space-y-10 pt-10 sm:space-y-12 sm:pt-12 md:space-y-16">
          {/* Goal 1 */}
          <GoalBlock
            index={0}
            eyebrow="OUR FIRST GOAL"
            headingTop="TO SIMPLIFY"
            headingBottom="BUSINESS GROWTH"
            body="We exist to remove complexity from business expansion. From logistics and real estate to SaaS solutions, our goal is to provide one reliable partner that helps businesses grow faster, smarter, and with confidence."
          />

          {/* Divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

          {/* Goal 2 */}
          <GoalBlock
            index={1}
            eyebrow="OUR SECOND GOAL"
            headingTop="TO DELIVER GROWTH"
            headingBottom="THAT ACTUALLY WORKS"
            body="We focus on practical, result-driven solutions—not just ideas. Every service we offer is designed to improve efficiency, reduce operational stress, and create long-term value for our clients."
          />
        </div>
      </motion.div>
    </section>
  );
}

type GoalBlockProps = {
  index: number;
  eyebrow: string;
  headingTop: string;
  headingBottom: string;
  body: string;
};

function GoalBlock({ index, eyebrow, headingTop, headingBottom, body }: GoalBlockProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.12, ease: "easeOut" }}
      className="grid gap-8 rounded-[1.5rem] border border-white/40 bg-white/35 p-4 backdrop-blur-sm md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-12 md:p-6"
    >
      {/* Left: label + big serif heading (like reference) */}
      <div className="space-y-2 text-left">
        <p className="font-sans text-xs sm:text-sm font-semibold tracking-[0.32em] text-slate-600 uppercase">
          {eyebrow}
        </p>
        <h2
          className={cn(
            serifFont.className,
            "text-2xl sm:text-3xl md:text-[2.4rem] font-semibold leading-tight text-slate-900"
          )}
        >
          <span className="block">{headingTop}</span>
          <span className="block">{headingBottom}</span>
        </h2>
      </div>

      {/* Right: paragraph */}
      <div className="flex items-center text-left">
        <p className="max-w-xl text-[15px] leading-relaxed text-slate-700 sm:text-base md:text-[1.05rem]">
          {body}
        </p>
      </div>
    </motion.div>
  );
}

/* ========================
   OUR JOURNEY — Premium passage, no cards
   ======================== */

function OurJourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative w-full overflow-hidden py-24 px-4 sm:px-6 md:py-32 lg:py-40"
      style={{
        background: `
          radial-gradient(circle at 25% 35%, rgba(0,180,160,0.06), transparent 45%),
          radial-gradient(circle at 75% 65%, rgba(100,100,220,0.06), transparent 45%),
          #0f172a
        `,
      }}
    >
      {/* Very low opacity grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      {/* Subtle noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Animated ambient glow */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 0.4, 0.4, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.15), transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.18fr)_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          {/* Left: big vertical word JOURNEY — serif, floating animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex items-center justify-end pr-4"
          >
            <motion.span
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className={cn(
                serifFont.className,
                "text-[9rem] xl:text-[11rem] font-black leading-none select-none whitespace-nowrap tracking-tighter uppercase"
              )}
              style={{
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
                background: "linear-gradient(180deg, #475569 0%, #334155 50%, #1e293b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                opacity: 0.12,
              }}
            >
              JOURNEY
            </motion.span>
          </motion.div>

          {/* Right: heading + passage */}
          <div className="min-w-0">
            {/* Main heading — smooth entrance with scale and blur */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.3, margin: "-80px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="mb-4"
            >
              <motion.h2
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide uppercase opacity-90"
                style={{
                  background: "linear-gradient(90deg, #e0f2fe 0%, #bae6fd 25%, #7dd3fc 50%, #94a3b8 75%, #64748b 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                Our Journey
              </motion.h2>
              {/* Thin accent line — smooth reveal with glow */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 h-px w-20 origin-left bg-slate-400 shadow-[0_0_8px_rgba(148,163,184,0.5)]"
              />
            </motion.div>

            {/* Subheading — smooth fade with slight blur */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={cn(
                serifFont.className,
                "mb-14 text-xl md:text-2xl font-medium text-slate-300 md:mb-20"
              )}
            >
              From Vision to Growth Partner
            </motion.p>

            {/* Passage — enhanced smooth staggered animations */}
            <div className="max-w-3xl space-y-8 md:space-y-10">
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide"
              >
                Business Growth Services (BGS) was founded with a clear vision — to become a{" "}
                <motion.span
                  className="font-semibold text-teal-400 inline-block"
                  whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(45,212,191,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  trusted partner
                </motion.span>{" "}
                for businesses ready to{" "}
                <motion.span
                  className="font-semibold text-teal-400 inline-block"
                  whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(45,212,191,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  scale without complexity
                </motion.span>
                .
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide"
              >
                We saw companies pursuing growth in logistics, real estate, and digital transformation struggling with fragmented vendors and disconnected strategies.
              </motion.p>

              {/* Highlight line — enhanced entrance with scale */}
              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5, margin: "-40px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.02 }}
                className={cn(
                  serifFont.className,
                  "text-2xl md:text-3xl font-semibold italic text-slate-200 cursor-default"
                )}
              >
                We chose to simplify that journey.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.5, margin: "-40px" }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl text-slate-300 leading-relaxed tracking-wide"
              >
                Today, BGS delivers{" "}
                <motion.span
                  className="font-semibold text-teal-400 inline-block"
                  whileHover={{ scale: 1.05, textShadow: "0 0 8px rgba(45,212,191,0.5)" }}
                  transition={{ duration: 0.2 }}
                >
                  integrated solutions
                </motion.span>{" "}
                under one trusted brand — helping clients expand smarter and operate with confidence.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================
   HOW WE WORK — Scroll-Controlled Premium Timeline
   ======================== */

const STEPS = [
  {
    id: "01",
    title: "Understand Your Business",
    description:
      "We analyze your goals, challenges, and industry landscape before proposing any solution.",
  },
  {
    id: "02",
    title: "Plan the Right Strategy",
    description:
      "We design a customized roadmap aligned with logistics, real estate, or SaaS growth goals.",
  },
  {
    id: "03",
    title: "Execute with Precision",
    description:
      "Structured timelines, transparent updates, and high-quality execution across every phase.",
  },
  {
    id: "04",
    title: "Support & Scale",
    description:
      "Continuous support and operational scaling as your business expands.",
  },
];

function HowWeWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useLayoutEffect(() => {
    if (!isDesktop || reduceMotion) return;

    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    ScrollTrigger.refresh();

    const st = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=260%",
      scrub: 0.85,
      pin: sticky,
      anticipatePin: 1,
      onUpdate: (self) => {
        const p = self.progress;
        setProgress(p);
        const stepIndex = Math.min(STEPS.length - 1, Math.floor(p * STEPS.length));
        setActiveStep(stepIndex);
      },
    });

    return () => {
      st.kill();
    };
  }, [isDesktop, reduceMotion]);

  useEffect(() => {
    if (isDesktop && !reduceMotion) return;
    setProgress(0);
    setActiveStep(0);
  }, [isDesktop, reduceMotion]);

  if (!isDesktop || reduceMotion) {
    return (
      <section className="bg-white px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-emerald-700">How we work</p>
            <h2 className={cn(serifFont.className, "mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl")}>
              A structured process built for measurable progress.
            </h2>
          </div>

          <div className="mt-8 grid gap-4">
            {STEPS.map((step, i) => (
              <motion.article
                key={step.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50/50 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.08)]"
              >
                <p className="text-xs font-bold text-emerald-700">STEP {step.id}</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="relative h-[360vh] w-full">
      <div ref={stickyRef} className="relative h-screen w-full overflow-hidden bg-white">
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          animate={reduceMotion ? undefined : { x: [0, 20, 0], y: [0, -30, 0] }}
          transition={reduceMotion ? undefined : { duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-20 top-20 h-64 w-64 rounded-full border-2 border-emerald-400 bg-gradient-to-br from-emerald-200/50 to-teal-200/50 opacity-40"
        />
        <motion.div
          animate={reduceMotion ? undefined : { x: [0, -15, 0], y: [0, 25, 0] }}
          transition={reduceMotion ? undefined : { duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -left-10 bottom-32 h-48 w-48 rounded-full border-2 border-teal-400 bg-gradient-to-br from-teal-200/50 to-cyan-200/50 opacity-40"
        />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4 py-28 sm:px-6">
          <div className="grid w-full gap-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] md:gap-16">
            <div className="space-y-8">
              <div className="relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "48px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-4 h-1 bg-gradient-to-r from-emerald-700 to-teal-700"
                />

                <h2 className={cn(serifFont.className, "text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl md:text-5xl")}>
                  How we work
                </h2>
                <p className="mt-4 text-base text-gray-600 sm:text-lg">
                  A structured process that connects logistics, real estate, and SaaS into one growth system.
                </p>

                <motion.div
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400 bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-xs font-semibold text-emerald-800"
                  animate={reduceMotion ? undefined : { opacity: [0.72, 1, 0.72] }}
                  transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-700" />
                  {Math.round(progress * 100)}% Complete
                </motion.div>
              </div>

              <div className="relative flex flex-col gap-6">
                <div className="absolute bottom-2 left-[14px] top-2 w-[2px] rounded-full bg-gray-200">
                  <motion.div
                    style={{ scaleY: progress }}
                    className="h-full w-full origin-top rounded-full bg-gradient-to-b from-emerald-700 via-teal-700 to-cyan-700"
                  />
                </div>

                {STEPS.map((step, i) => (
                  <motion.div key={step.id} className="relative flex items-center gap-4 pl-12" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <div
                      className={cn(
                        "absolute left-0 flex h-7 w-7 items-center justify-center rounded-full border-2 text-xs font-semibold transition-all duration-300",
                        i === activeStep
                          ? "border-emerald-700 bg-gradient-to-br from-emerald-700 to-teal-700 text-white shadow-[0_0_0_4px_rgba(16,185,129,0.2)]"
                          : i < activeStep
                          ? "border-teal-700 bg-gradient-to-br from-teal-700 to-cyan-700 text-white"
                          : "border-gray-300 bg-white text-gray-400"
                      )}
                    >
                      {i < activeStep ? "✓" : step.id}
                    </div>
                    <div className="flex flex-col">
                      <p
                        className={cn(
                          "text-sm font-medium transition-all duration-300",
                          i === activeStep ? "text-emerald-800" : i < activeStep ? "text-teal-800" : "text-gray-400"
                        )}
                      >
                        {step.title}
                      </p>
                      {i === activeStep && (
                        <motion.span initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-0.5 text-xs text-emerald-600">
                          In progress
                        </motion.span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative flex items-center justify-center" style={{ perspective: "1000px" }}>
              {STEPS.map((step, i) => {
                const isActive = i === activeStep;
                const offset = i - activeStep;

                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{
                      opacity: isActive ? 1 : Math.max(0, 1 - Math.abs(offset) * 0.3),
                      scale: isActive ? 1 : 1 - Math.abs(offset) * 0.05,
                      y: offset * 20,
                      rotateX: offset * -2,
                      zIndex: 10 - Math.abs(offset),
                    }}
                    whileHover={isActive ? { scale: 1.02 } : {}}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className={cn("absolute inset-0 flex items-center justify-center", !isActive && "pointer-events-none")}
                  >
                    <div
                      className={cn(
                        "relative w-full max-w-2xl rounded-2xl border-2 bg-white p-12 shadow-sm transition-all duration-300",
                        isActive ? "border-emerald-400 bg-gradient-to-br from-white to-emerald-100/40" : "border-gray-200"
                      )}
                    >
                      <div
                        className={cn(
                          "absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 transition-colors duration-300",
                          isActive ? "border-emerald-600 opacity-50" : "border-slate-900 opacity-20"
                        )}
                      />
                      <div
                        className={cn(
                          "absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 transition-colors duration-300",
                          isActive ? "border-teal-600 opacity-50" : "border-slate-900 opacity-20"
                        )}
                      />

                      <div className="absolute right-4 top-4 flex gap-1.5">
                        {STEPS.map((_, idx) => (
                          <div
                            key={idx}
                            className={cn(
                              "h-1.5 w-1.5 rounded-full transition-all duration-300",
                              idx === activeStep ? "w-6 bg-gradient-to-r from-emerald-700 to-teal-700" : idx < activeStep ? "bg-teal-500" : "bg-gray-300"
                            )}
                          />
                        ))}
                      </div>

                      <div className="flex flex-col gap-12 sm:flex-row">
                        <div className="relative flex-shrink-0">
                          <div
                            className={cn(
                              "absolute -left-4 -top-4 h-24 w-24 rounded-full border-2 opacity-50 transition-colors duration-300",
                              isActive ? "border-emerald-300" : "border-gray-100"
                            )}
                          />
                          <span
                            className={cn(
                              "relative text-7xl font-light transition-colors duration-300",
                              isActive ? "text-emerald-300" : "text-gray-200"
                            )}
                          >
                            {step.id}
                          </span>
                        </div>

                        <div className="flex-1">
                          <div className="relative inline-block">
                            <h3 className="mb-4 text-2xl font-semibold text-slate-900">{step.title}</h3>
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: isActive ? 1 : 0 }}
                              transition={{ duration: 0.5, delay: 0.2 }}
                              className="absolute -bottom-1 left-0 h-0.5 w-full origin-left bg-gradient-to-r from-emerald-700 to-teal-700"
                            />
                          </div>
                          <p className="max-w-lg text-base leading-relaxed text-gray-600">{step.description}</p>

                          <div className={cn("mt-6 flex items-center gap-2 text-xs font-medium transition-colors duration-300", isActive ? "text-emerald-700" : "text-gray-400")}>
                            <span>STEP {step.id}</span>
                            <div className={cn("h-px w-8 transition-colors duration-300", isActive ? "bg-emerald-500" : "bg-gray-300")} />
                            <span>OF 04</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ========================
   TEAM SECTION — Leadership Introduction
   ======================== */

const TEAM_MEMBERS = [
  {
    name: "Sarah Mitchell",
    title: "Founder & CEO",
    description: "Strategic leader with 15+ years driving business growth across logistics, real estate, and technology sectors.",
    image: "/profile1.jpg",
    linkedin: "#",
  },
  {
    name: "David Chen",
    title: "Head of Logistics",
    description: "Supply chain expert specializing in operational efficiency and scalable logistics solutions for growing businesses.",
    image: "/profile2.jpg",
    linkedin: "#",
  },
  {
    name: "Maya Patel",
    title: "Real Estate Director",
    description: "Commercial property specialist connecting businesses with strategic locations that accelerate growth and market presence.",
    image: "/profile3.jpg",
    linkedin: "#",
  },
  {
    name: "James Rodriguez",
    title: "Head of Technology",
    description: "SaaS innovator building integrated platforms that simplify operations and unlock business intelligence.",
    image: "/profile4.jpg",
    linkedin: "#",
  },
];

function TeamSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-950 py-20 px-4 sm:px-6 md:py-28 lg:py-32">
      {/* Subtle background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-900/50" />
      
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 sm:text-sm"
          >
            Meet Our Team
          </motion.p>
          <h2
            className={cn(
              serifFont.className,
              "text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            )}
          >
            Leadership That Drives Growth
          </h2>
        </motion.div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-teal-500/20"
            >
              {/* Image container with overlay */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-90"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
                
                {/* LinkedIn icon - appears on hover */}
                <motion.a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-teal-400/90 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:opacity-100"
                >
                  <svg
                    className="h-5 w-5 text-slate-900"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-teal-400">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-slate-400">
                      {member.title}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {member.description}
                </p>
              </div>

              {/* Decorative element */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-teal-400 to-emerald-400 transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
