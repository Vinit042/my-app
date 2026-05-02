"use client";

import { FormEvent, useState } from "react";
import { Inter, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Network, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlassNavbar } from "@/components/ui/glass-navbar";

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const labelFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const partnerLogos = [
  {
    name: "EKART",
    src: "/ekart_logo.png",
    width: 220,
    height: 72,
    imageClass: "max-h-12",
    labelClass: "text-yellow-300",
    cardClass: "hover:border-yellow-400/45",
    glowClass: "from-yellow-500/12 via-yellow-400/5 to-transparent",
  },
  {
    name: "DELHIVERY",
    src: "/Delhivery_logo.webp",
    width: 220,
    height: 72,
    imageClass: "max-h-12",
    labelClass: "text-red-300",
    cardClass: "hover:border-red-400/45",
    glowClass: "from-red-500/12 via-orange-400/5 to-transparent",
  },
  {
    name: "SHADOWFAX",
    src: "/shadowfax_logo.svg",
    width: 220,
    height: 72,
    imageClass: "max-h-11",
    labelClass: "text-orange-300",
    cardClass: "hover:border-orange-400/45",
    glowClass: "from-orange-500/12 via-amber-400/5 to-transparent",
  },
  {
    name: "BLUE DART",
    src: "/blue-dart-logo.webp",
    width: 280,
    height: 96,
    imageClass: "max-h-16",
    labelClass: "text-sky-300",
    cardClass: "hover:border-sky-400/45",
    glowClass: "from-sky-500/12 via-blue-400/5 to-transparent",
  },
];

const serviceCards = [
  {
    title: "Booking Point",
    icon: Truck,
    description:
      "Multi-courier platform with 10+ partners. Compare price and speed instantly to earn high margins on every shipment.",
    features: ["Real-time rate comparison", "Automated manifesting"],
  },
  {
    title: "Mini Hub",
    icon: Network,
    description:
      "Local delivery center providing stable income with daily parcel flow. Become the central node in your local community.",
    features: ["Guaranteed volume", "Operational support"],
  },
];

const franchiseCards = [
  {
    title: "EKART",
    investment: "₹1L investment",
    income: "₹48k–60k income",
    highlighted: false,
  },
  {
    title: "SHADOWFAX",
    investment: "₹75k investment",
    income: "₹35k–50k income",
    highlighted: true,
  },
  {
    title: "DELHIVERY",
    investment: "₹50k investment",
    income: "₹50k–60k income",
    highlighted: false,
  },
];

const structureCards = [
  {
    tier: "Basic Tier",
    title: "One Pincode",
    coverage: "Single Local Area",
    volume: "350",
    commission: "₹18–₹24 / p",
    investment: "₹1.0L + GST",
    highlighted: false,
  },
  {
    tier: "Expansion Tier",
    title: "Master Franchise",
    coverage: "3 Pincodes Coverage",
    volume: "1000",
    commission: "₹20–₹24 / p",
    investment: "₹2.5L + GST",
    highlighted: true,
  },
  {
    tier: "Premium Tier",
    title: "Mini District",
    coverage: "5 Pincodes Coverage",
    volume: "1600",
    commission: "₹22–₹26 / p",
    investment: "₹3.5L + GST",
    highlighted: false,
  },
  {
    tier: "Ultimate Tier",
    title: "District Model",
    coverage: "10 Pincodes Coverage",
    volume: "3500",
    commission: "₹26–₹28 / p",
    investment: "₹6.0L + GST",
    highlighted: false,
  },
];

const howItWorksSteps = [
  {
    title: "Apply Online",
    description: "Submit your interest via our digital portal.",
  },
  {
    title: "Get Approval",
    description: "Background check & feasibility analysis.",
  },
  {
    title: "Setup Your Hub",
    description: "Equipment installation & software setup.",
  },
  {
    title: "Start Earning",
    description: "Begin operations and generate revenue.",
  },
];

export default function LogisticsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = () => {
    setIsSubmitted(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className={cn("relative min-h-screen bg-[#121414] text-white", bodyFont.className)}>
      <GlassNavbar activeHref="/services/logistics" whiteText />

      <section
        className="relative flex min-h-screen w-full items-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/logistics_bg.png')" }}
      >
        {/* Vignette base */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/95 via-[#0B1220]/75 to-transparent" />

        {/* Large faded background word — top-cropped */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-start overflow-hidden pl-6 lg:pl-12">
          <span
            className={cn(
              headingFont.className,
              "-mt-4 text-[7rem] font-extrabold tracking-[0.25em] text-white/[0.07] sm:text-[9rem] md:text-[11rem] lg:text-[14rem]"
            )}
          >
            LOGISTICS
          </span>
        </div>

        {/* Main content */}
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 lg:px-12">
          <div className="w-full max-w-2xl">

              {/* Eyebrow tag */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="mb-5 inline-flex items-center gap-2"
              >
                <span className="h-px w-6 bg-orange-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-400">
                  BGS Logistics
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.05 }}
                className={cn(
                  headingFont.className,
                  "text-5xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl"
                )}
              >
                Smart Warehousing.
                <br />
                Scalable Distribution.
              </motion.h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.18 }}
                className="mt-6 max-w-lg text-lg leading-relaxed text-gray-300 md:text-xl"
              >
                From organized storage to last-mile delivery, BGS powers
                structured logistics networks that keep your business moving
                with precision.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.32 }}
                className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
              >
                <button
                  type="button"
                  onClick={openModal}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:from-orange-400 hover:to-orange-500"
                >
                  Start Earning Today
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-black"
                >
                  Explore Network
                </button>
              </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0C10] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2
            className={cn(
              headingFont.className,
              "text-center text-2xl font-bold tracking-tight text-white sm:text-3xl"
            )}
          >
            Powered by Leading Logistics Brands
          </h2>
          <div className={cn("mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", labelFont.className)}>
            {partnerLogos.map((logo) => (
              <div
                key={logo.name}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b1d1f] via-[#17191b] to-[#131517] px-5 py-6 shadow-[0_10px_28px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)]",
                  logo.cardClass
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                    logo.glowClass
                  )}
                />
                <div className="relative flex h-20 items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className={cn(
                      "h-auto w-auto object-contain saturate-125 transition-all duration-300 group-hover:scale-105",
                      logo.imageClass
                    )}
                  />
                </div>
                <p
                  className={cn(
                    "relative mt-4 text-center text-xs font-semibold tracking-[0.2em] text-white/65 transition-colors duration-300",
                    logo.labelClass
                  )}
                >
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#121414] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {serviceCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#1a1c1c] via-[#161818] to-[#141616] p-7 backdrop-blur-xl shadow-[0_14px_36px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-[0_0_34px_rgba(249,115,22,0.22)]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300 ring-1 ring-orange-500/25">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className={cn(headingFont.className, "mt-5 text-[2rem] font-bold text-white")}>
                  {card.title}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-gray-300">{card.description}</p>
                <ul className="mt-6 space-y-3 text-[15px] text-gray-100">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  type="button"
                  onClick={openModal}
                  className="mt-8 w-full rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-orange-500 hover:shadow-[0_0_22px_rgba(249,115,22,0.35)]"
                >
                  Apply Now
                </button>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#121414] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className={cn(labelFont.className, "text-xs font-semibold uppercase tracking-[0.24em] text-orange-300")}>
                Partnership
              </p>
              <h2 className={cn(headingFont.className, "mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl")}>
                Franchise Opportunities
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-gray-300">
              High-yield investment opportunities with India&apos;s most recognized logistics names.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {franchiseCards.map((card) => (
              <article
                key={card.title}
                className={cn(
                  "relative rounded-3xl bg-gradient-to-b from-[#161818] to-[#141616] p-6 backdrop-blur-xl shadow-[0_14px_34px_rgba(0,0,0,0.34)] transition-all duration-300 hover:-translate-y-1",
                  card.highlighted
                    ? "scale-[1.03] border-2 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.35)]"
                    : "border border-white/10 hover:shadow-[0_0_30px_rgba(249,115,22,0.25)]"
                )}
              >
                {card.highlighted && (
                  <span
                    className={cn(
                      labelFont.className,
                      "absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white"
                    )}
                  >
                    Most Popular
                  </span>
                )}
                <h3 className={cn(headingFont.className, "text-3xl font-semibold text-white/90")}>{card.title}</h3>
                <div className="mt-4 space-y-1">
                  <p className={cn(labelFont.className, "text-[11px] uppercase tracking-[0.16em] text-white/45")}>Investment</p>
                  <p className={cn(headingFont.className, "text-4xl font-bold text-white")}>{card.investment.replace(" investment", "")}</p>
                </div>
                <div className="mt-4 space-y-1">
                  <p className={cn(labelFont.className, "text-[11px] uppercase tracking-[0.16em] text-orange-300")}>Estimated Income</p>
                  <p className={cn(headingFont.className, "text-4xl font-bold text-white")}>{card.income.replace(" income", "")}</p>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="mt-6 w-full rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-orange-500"
                >
                  Select Plan
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101212] px-4 py-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <h2 className={cn(headingFont.className, "text-4xl font-bold text-white sm:text-5xl")}>Scalable Structure</h2>
            <p className="mt-3 text-sm text-gray-300 sm:text-base">
              Designed to grow as your ambition does. Choose your operational scale.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {structureCards.map((item) => (
              <article
                key={item.title}
                className={cn(
                  "rounded-3xl border p-6 backdrop-blur-xl shadow-[0_12px_32px_rgba(0,0,0,0.3)] transition-all duration-300 hover:-translate-y-1",
                  item.highlighted
                    ? "border-orange-500/40 bg-gradient-to-b from-[#212325] to-[#171919] shadow-[0_0_34px_rgba(249,115,22,0.2)]"
                    : "border-white/10 bg-gradient-to-b from-[#171919] to-[#121414] hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
                )}
              >
                <p className={cn(labelFont.className, "text-xs font-semibold uppercase tracking-[0.16em] text-orange-300")}>
                  {item.tier}
                </p>
                <h3 className={cn(headingFont.className, "mt-3 text-[2rem] font-bold text-white")}>{item.title}</h3>
                <p className="text-sm text-gray-300">{item.coverage}</p>
                <p className={cn(headingFont.className, "mt-5 text-5xl font-bold text-white")}>
                  {item.volume}
                  <span className="ml-1 text-xl font-medium text-gray-200">parcels/day</span>
                </p>
                <div className="mt-5 border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-300">Commission</span>
                    <span className="font-semibold text-white">{item.commission}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between text-sm">
                    <span className="text-gray-300">Investment</span>
                    <span className="font-semibold text-orange-300">{item.investment}</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={openModal}
                  className="mt-6 w-full rounded-xl bg-white/10 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:bg-orange-500"
                >
                  Apply Now
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#080b12] px-4 pb-20 pt-16 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <h2 className={cn(headingFont.className, "text-center text-4xl font-bold text-white sm:text-5xl")}>
            Start Your Journey in 4 Steps
          </h2>

          <div className="relative mt-14 grid gap-10 md:grid-cols-4">
            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-orange-500/35 to-transparent md:block" />
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
                <div
                  className={cn(
                    "flex h-14 w-14 items-center justify-center rounded-full border text-2xl font-bold",
                    index === 1
                      ? "border-orange-500 bg-[#181c1f] text-orange-300 shadow-[0_0_24px_rgba(249,115,22,0.3)]"
                      : "border-white/10 bg-[#1a1f24] text-orange-400"
                  )}
                >
                  {index + 1}
                </div>
                <p className={cn(headingFont.className, "mt-5 text-2xl font-semibold text-white")}>{step.title}</p>
                <p className="mt-2 max-w-[220px] text-sm text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-4">
          <button type="button" aria-label="Close modal backdrop" className="absolute inset-0" onClick={closeModal} />
          <div className="relative max-h-[min(90vh,760px)] w-full max-w-xl overflow-y-auto rounded-3xl border border-white/10 bg-gradient-to-b from-[#1d1f1f] to-[#141616] p-6 pt-14 shadow-2xl shadow-black/50 sm:p-8 sm:pt-14">
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-[#1d1f1f]/80 px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm transition-colors hover:border-white/35 hover:text-white"
            >
              Close
            </button>
            <h3 className={cn(headingFont.className, "pr-16 text-2xl font-semibold text-white sm:text-[1.65rem]")}>Apply Now</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              Complete the form and our team will call you back shortly.
            </p>
            <form className="mt-6 grid gap-3 sm:gap-4" onSubmit={handleSubmit}>
              <input
                required
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Name"
                className="min-h-[44px] w-full rounded-xl border border-white/10 bg-[#282a2b] px-3.5 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25"
              />
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <input
                  required
                  name="contact"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Contact No."
                  className="min-h-[44px] min-w-0 w-full rounded-xl border border-white/10 bg-[#282a2b] px-2 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25 sm:px-3.5"
                />
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="min-h-[44px] min-w-0 w-full rounded-xl border border-white/10 bg-[#282a2b] px-2 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25 sm:px-3.5"
                />
              </div>
              <textarea
                required
                name="address"
                autoComplete="street-address"
                rows={3}
                placeholder="Address"
                className="min-h-[88px] w-full resize-y rounded-xl border border-white/10 bg-[#282a2b] px-3.5 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25"
              />
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <input
                  required
                  name="state"
                  type="text"
                  autoComplete="address-level1"
                  placeholder="State"
                  className="min-h-[44px] min-w-0 w-full rounded-xl border border-white/10 bg-[#282a2b] px-2 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25 sm:px-3.5"
                />
                <input
                  required
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  placeholder="City"
                  className="min-h-[44px] min-w-0 w-full rounded-xl border border-white/10 bg-[#282a2b] px-2 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25 sm:px-3.5"
                />
                <input
                  required
                  name="pincode"
                  type="text"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  placeholder="Pincode"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  title="Enter a 6-digit pincode"
                  className="min-h-[44px] min-w-0 w-full rounded-xl border border-white/10 bg-[#282a2b] px-2 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25 sm:px-3.5"
                />
              </div>
              <textarea
                name="message"
                rows={3}
                placeholder="Message (optional)"
                className="min-h-[88px] w-full resize-y rounded-xl border border-white/10 bg-[#282a2b] px-3.5 py-2.5 text-sm text-white shadow-inner shadow-black/20 placeholder:text-gray-400 outline-none ring-orange-400/0 transition-all focus:border-orange-400/70 focus:ring-2 focus:ring-orange-400/25"
              />
              <button
                type="submit"
                className={cn(
                  labelFont.className,
                  "mt-1 min-h-[48px] w-full rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:bg-orange-400 hover:shadow-orange-500/30 active:scale-[0.99]"
                )}
              >
                {isSubmitted ? "Application Submitted!" : "Submit Application"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
