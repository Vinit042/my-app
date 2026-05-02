"use client";

import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { DollarSign, Mail, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const headingFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const logisticsSteps = [
  {
    label: "01",
    title: "LOGISTICS",
    description: [
      "Manage your transport flow efficiently.",
      "Real-time shipment tracking.",
      "Optimized delivery routes.",
      "Fast and reliable operations.",
    ],
    icon: Rocket,
    gradient: "from-pink-500 via-fuchsia-500 to-fuchsia-600",
  },
  {
    label: "03",
    title: "BOOKING POINT",
    description: [
      "Simplified booking system.",
      "Centralized request handling.",
      "Instant confirmations.",
      "User-friendly interface.",
    ],
    icon: Mail,
    gradient: "from-violet-600 via-indigo-600 to-sky-600",
  },
  {
    label: "05",
    title: "FRANCHISE",
    description: [
      "Expand your business network.",
      "Secure investment model.",
      "Revenue growth opportunities.",
      "Scalable logistics ecosystem.",
    ],
    icon: DollarSign,
    gradient: "from-pink-500 via-fuchsia-500 to-fuchsia-600",
  },
];

export function LogisticsHeroDetails() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-slate-950 py-20 sm:py-32 min-h-screen flex items-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.1),_transparent_70%)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col items-center lg:items-end gap-16">
          {/* Left Content - Optional */}
          <div className="text-center lg:text-right lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 max-w-md">
            <h2 className={cn(headingFont.className, "text-3xl sm:text-4xl font-bold text-white mb-4")}>
              Logistics Options
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Streamlined workflows for managing your entire logistics ecosystem
            </p>
          </div>

          {/* Cards Stack */}
          <div className="space-y-4 w-full sm:max-w-2xl lg:ml-auto">
            {logisticsSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: -8 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Ribbon Card */}
                  <div
                    className="relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    style={{
                      clipPath: "polygon(0 0, 88% 0, 100% 50%, 88% 100%, 0 100%)",
                    }}
                  >
                    {/* Gradient Background */}
                    <div className={cn("absolute inset-0", step.gradient)} />

                    {/* Premium Gloss */}
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0.05)_40%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.08)_0%,transparent_50%)]" />

                    {/* Content */}
                    <div className="relative flex items-center justify-between gap-8 px-8 py-5 sm:px-10 sm:py-6 min-h-[72px]">
                      {/* Left: Number + Label */}
                      <div className="flex items-baseline gap-3 min-w-fit flex-shrink-0">
                        <p className="text-3xl sm:text-4xl font-black text-white leading-none tracking-tight">
                          {step.label}
                        </p>
                        <p className="text-xs uppercase tracking-[0.2em] text-white/85 font-bold">
                          OPTION
                        </p>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1" />
                    </div>
                  </div>

                  {/* Fold Corner - Enhanced */}
                  <div className="absolute -right-5 top-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform duration-300">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                      {/* Main Fold */}
                      <div className="absolute inset-0 rounded-l-lg bg-gradient-to-br from-gray-50 to-gray-200 shadow-[0_16px_48px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.6)] flex items-center justify-center overflow-hidden">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 flex-shrink-0" />
                      </div>

                      {/* Corner Curl for 3D effect */}
                      <div className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-gray-300 to-gray-400 rounded-bl-lg shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.1)]" />
                      
                      {/* Highlight rim */}
                      <div className="absolute inset-0 rounded-l-lg ring-1 ring-white/40" />
                    </div>
                  </div>

                  {/* Description Below Card */}
                  <div className="mt-2 text-right space-y-1 pr-6">
                    <p className="text-sm text-white/85 leading-tight font-medium">
                      {step.description[0]}
                    </p>
                    <p className="text-sm text-white/70 leading-tight font-light">
                      {step.description[1]}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
