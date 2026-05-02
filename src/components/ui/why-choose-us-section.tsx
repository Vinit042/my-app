"use client";

  import Image from "next/image";
import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TypewriterText } from "@/components/ui/typewriter-text";

const headingFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const highlights = [
  {
    title: "Technology-Driven Solutions",
    description: "Modern tools and platforms engineered around real business goals.",
    icon: "/bulb.png",
  },
  {
    title: "Business-First Mindset",
    description: "We design every solution to support growth, profit, and resilience.",
    icon: "/mindset.png",
  },
  {
    title: "Start-to-Finish Assistance",
    description: "From first idea to daily operations, we stay involved at every step.",
    icon: "/technical.png",
  },
  {
    title: "Optimized Business Operations",
    description: "Streamlined processes that reduce friction and unlock efficiency.",
    icon: "/technological.png", 
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-10 sm:px-6 md:pb-28 md:pt-20">
      <div className="flex flex-col items-center text-center space-y-5 sm:space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={cn(
              headingFont.className,
              "text-3xl font-bold tracking-[0.22em] text-[#123a8a] sm:text-4xl md:text-5xl"
            )}
          >
            WHY CHOOSE US?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className={cn(
              headingFont.className,
              "text-sm font-semibold tracking-[0.32em] text-slate-800 sm:text-base md:text-lg"
            )}
          >
            CONNECTING YOU TO SEAMLESS BUSINESS SOLUTIONS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="max-w-3xl"
          >
            <TypewriterText
              text="We are a trusted growth partner delivering integrated solutions across Logistics, SaaS, and Real Estate. By combining industry expertise, smart technology, and a customer-first approach, we help businesses move faster, scale smarter, and invest with confidence."
              className={cn(
                headingFont.className,
                "text-sm leading-relaxed sm:text-base md:text-lg"
              )}
              speed={45}
            />
          </motion.div>
        {/* highlight cards */}
        <div className="mt-10 grid gap-6 sm:mt-14 sm:grid-cols-2">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.15 + index * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group relative flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)] sm:px-5 sm:py-4.5"
            >
              <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 shadow-[0_6px_18px_rgba(15,23,42,0.15)]">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-md object-contain"
                />
              </div>

              <div className="relative z-10 text-left">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-600 sm:text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

