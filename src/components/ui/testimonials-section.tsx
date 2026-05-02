"use client";

import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const scriptHeadingFont = Lora({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500", "600"],
});

const testimonials = [
  {
    name: "Rahul Sharma",
    rating: 5,
    review:
      "Excellent service! My parcel flow increased and income became stable within weeks.",
  },
  {
    name: "Priya Verma",
    rating: 5,
    review:
      "Very smooth onboarding process. Support team is always responsive and helpful.",
  },
  {
    name: "Amit Patel",
    rating: 5,
    review:
      "Great platform for logistics business. Real-time tracking and pricing helped a lot.",
  },
  {
    name: "Sneha Iyer",
    rating: 5,
    review:
      "I started with a small hub and now expanded to multiple pincodes. Highly recommended!",
  },
  {
    name: "Vikram Singh",
    rating: 4.5,
    review:
      "Consistent delivery volume and transparent earnings. Perfect for long-term growth.",
  },
  {
    name: "Neha Gupta",
    rating: 5,
    review:
      "User-friendly system and fast payments. Best decision for my business.",
  },
];

const accentStyles = [
  {
    outer:
      "from-orange-500/30 via-amber-400/20 to-yellow-400/20 border-orange-300/50 shadow-[0_20px_55px_rgba(249,115,22,0.2)]",
    line: "from-orange-500 to-amber-500",
    name: "text-orange-700",
  },
  {
    outer:
      "from-pink-500/30 via-rose-400/20 to-fuchsia-400/20 border-pink-300/50 shadow-[0_20px_55px_rgba(236,72,153,0.2)]",
    line: "from-pink-500 to-rose-500",
    name: "text-rose-700",
  },
];

function StarRating({ rating }: { rating: number }) {
  const width = `${Math.max(0, Math.min(100, (rating / 5) * 100))}%`;

  return (
    <span className="relative inline-block text-[12px] leading-none tracking-[2px]">
      <span className="text-slate-300">★★★★★</span>
      <span className="absolute inset-0 overflow-hidden whitespace-nowrap text-amber-500" style={{ width }}>
        ★★★★★
      </span>
    </span>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50/50 via-sky-50/40 to-slate-50/50 py-16 md:py-24">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-12 text-center md:mb-16"
      >
        <h2
          className={cn(
            scriptHeadingFont.className,
            "text-3xl italic text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl"
          )}
        >
          Some love from our Client
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base">
          Trusted by founders and operators who needed a dependable growth partner.
        </p>
      </motion.div>

      {/* Glow + cards */}
      <div className="relative mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[9999px] bg-sky-200/25 blur-[90px]" />
        {testimonials.map((item, index) => {
          const accent = accentStyles[index % accentStyles.length];
          const ratingPercent = `${Math.max(0, Math.min(100, (item.rating / 5) * 100))}%`;

          return (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: "easeOut" }}
              className="group relative"
            >
              <div className={cn("absolute inset-0 -rotate-2 rounded-[1.7rem] border bg-gradient-to-br", accent.outer)} />
              <div className="relative rounded-[1.6rem] border border-white/70 bg-white/95 p-5 shadow-[0_16px_48px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_60px_rgba(15,23,42,0.18)] sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="h-7 w-7 text-slate-300"
                  >
                    <path d="M10 11H6.7c.2-2.1 1-3.6 2.5-4.5L7.8 4C5.2 5.5 4 8 4 11.6V20h6V11zm10 0h-3.3c.2-2.1 1-3.6 2.5-4.5L17.8 4C15.2 5.5 14 8 14 11.6V20h6V11z" />
                  </svg>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    <StarRating rating={item.rating} />
                    <span>{item.rating.toFixed(1)}</span>
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-[15px]">
                  {item.review}
                </p>

                <div className="mt-6">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className={cn("h-full rounded-full bg-gradient-to-r", accent.line)} style={{ width: ratingPercent }} />
                  </div>
                </div>

                <div className="mt-5 border-t border-slate-100 pt-4">
                  <p className={cn("text-lg font-bold", accent.name)}>{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Verified client review</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}