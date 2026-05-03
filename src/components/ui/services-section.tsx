"use client";

import Image from "next/image";
import Link from "next/link";
import { Lora } from "next/font/google";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import TiltedCard from "@/components/ui/tilted-card";

const headingFont = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const services = [
  {
    title: "Building Profitable Delivery Networks",
    description:
      "End-to-end logistics franchise solutions that optimize routes, reduce costs, and scale with your growth.",
    image: "/logistic1.png",
  },
  {
    title: "Intelligent SaaS Solutions",
    description:
      "Custom-built SaaS platforms that automate workflows, unlock insights, and accelerate decision-making.",
    image: "/saas1.png",
  },
  {
    title: "High-Value Real Estate Services",
    description:
      "Strategic residential real estate advisory focused on long-term value, security, and portfolio growth.",
    image: "/realestate1.jpg",
  },  
];  

export function OurServicesSection() {
  return (
    <section className="mt-12 w-full pb-16 pt-6 md:mt-20 md:pb-24">
      <div className="relative w-full overflow-hidden border-y border-white/70 bg-white/55 px-4 py-8 shadow-[0_24px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute -left-10 top-1/2 h-48 w-48 -translate-y-1/2 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 top-1/3 h-44 w-44 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          whileHover={{ scale: 1.03, y: -2 }}
          className="relative mb-4 inline-flex items-center rounded-full border border-slate-200/70 bg-gradient-to-r from-slate-50/70 via-slate-100 to-slate-50/70 px-6 py-2 shadow-[0_18px_45px_rgba(15,23,42,0.20)] backdrop-blur-sm"
        >
          <span
            className={cn(
              headingFont.className,
              "text-base font-semibold tracking-[0.3em] text-slate-700 sm:text-lg md:text-xl"
            )}
          >
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-slate-800 bg-clip-text text-transparent">
              Our Services
            </span>
          </span>
          <span className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-slate-200/40 via-transparent to-slate-200/40 opacity-60 mix-blend-soft-light" />
        </motion.div>
        <h2
          className={cn(
            headingFont.className,
            "mt-1 max-w-3xl text-2xl font-semibold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl"
          )}
        >
          Exclusive Services Designed
          <br />
          for Business Growth
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="mt-4 max-w-2xl text-sm text-slate-600 sm:text-base md:text-lg"
        >
          A focused portfolio of services across logistics, technology, and real
          estate—designed to work together and move your business forward.
        </motion.p>
        </div>
      </div>

      {/* Logistics header hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-10 w-full px-0 sm:px-2"
      >
        <div className="relative overflow-hidden rounded-[2.3rem] border border-white/20 bg-slate-900 shadow-[0_30px_80px_rgba(15,23,42,0.55)]">
          {/* Background image */}
          <div className="relative h-[320px] w-full sm:h-[360px] md:h-[380px] lg:h-[400px]">
            <Image
              src="/logistics.png"
              alt="Smart warehousing and scalable distribution"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-900/40" />

            {/* Large background word */}
            <div className="pointer-events-none absolute inset-0">
              <p
                className={cn(
                  headingFont.className,
                  "absolute left-6 top-4 text-5xl font-black tracking-[0.2em] text-white/5 sm:left-10 sm:top-6 sm:text-6xl md:text-7xl lg:left-14 lg:top-8 lg:text-8xl"
                )}
              >
                LOGISTICS
              </p>
            </div>

            {/* Foreground content */}
            <div className="relative z-10 flex h-full flex-col justify-center px-6 py-8 text-left sm:px-10 sm:py-10 lg:px-16">
              <span className="mb-3 inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-orange-200 backdrop-blur-sm sm:text-xs">
                BGS Logistics Network
              </span>

              <h2
                className={cn(
                  headingFont.className,
                  "max-w-xl text-2xl font-semibold text-white sm:text-3xl md:text-4xl lg:text-[2.5rem]"
                )}
              >
                Smart Warehousing.
                <br className="hidden sm:block" /> Scalable Distribution.
              </h2>

              <p className="mt-3 max-w-xl text-xs text-slate-100/80 sm:mt-4 sm:text-sm md:text-base">
                From organized storage to last-mile delivery, BGS powers structured logistics networks
                that keep your business moving with precision.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                <Link
                  href="/services/logistics/"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-orange-500/40 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-orange-400 sm:px-7 sm:py-3 sm:text-sm"
                >
                  Get Franchise
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-white/5 px-6 py-2.5 text-xs font-semibold text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/15 sm:px-7 sm:py-3 sm:text-sm"
                >
                  Explore Network
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 grid gap-8 px-4 sm:mt-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article
            key={service.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
            className="flex items-center justify-center"
          >
            {/* Mobile: simple card (no tilt) */}
            <div className="w-full sm:hidden">
              <div className="overflow-hidden rounded-3xl bg-white shadow-[0_18px_40px_rgba(15,23,42,0.16)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(15,23,42,0.2)]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-56 w-full object-cover"
                />
                <div className="px-4 pb-5 pt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-500">
                    Service
                  </p>
                  <h3 className="mt-1 text-sm font-semibold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Tablet / Desktop: 3D tilted card */}
            <div className="hidden w-full max-w-xs sm:block">
              <TiltedCard
                imageSrc={service.image}
                altText={service.title}
                captionText={service.title}
                containerHeight="230px"
                imageHeight="230px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent
                overlayContent={
                  <div className="space-y-1 text-left">
                    <p className="text-[13px] font-semibold uppercase tracking-[0.18em] text-indigo-200/90">
                      Service
                    </p>
                    <h3 className="text-sm font-semibold text-slate-50 sm:text-base md:text-lg">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-200/90 sm:text-[13px] md:text-sm">
                      {service.description}
                    </p>
                  </div>
                }
                className="w-full"
              />
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

