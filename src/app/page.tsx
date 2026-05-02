import { AnimatedGradientBackground } from "@/components/ui/animated-gradient-background";
import { GlassNavbar } from "@/components/ui/glass-navbar";
import { HeroSection } from "@/components/ui/hero-section";
import { WhoWeAreSection } from "@/components/ui/who-we-are-section";
import { OurServicesSection } from "@/components/ui/services-section";
import { WhyChooseUsSection } from "@/components/ui/why-choose-us-section";
import { TestimonialsSection } from "@/components/ui/testimonials-section";
import { ContactSection } from "@/components/ui/contact-section";
import { MarketingFooter } from "@/components/ui/marketing-footer";
import { ArrowRight, BadgeCheck, Clock3, Factory, MapPinned, ShieldCheck, Sparkles } from "lucide-react";

const proofPoints = [
  {
    label: "500+",
    value: "Business partners",
  },
  {
    label: "10K+",
    value: "Monthly deliveries",
  },
  {
    label: "3",
    value: "Growth verticals",
  },
  {
    label: "99.8%",
    value: "Platform uptime",
  },
];

const operatingModel = [
  {
    icon: MapPinned,
    title: "Map the opportunity",
    description:
      "We study your market, operating gaps, and growth goals before recommending a business path.",
  },
  {
    icon: Factory,
    title: "Build the system",
    description:
      "Our team connects logistics, property, and SaaS capabilities into a practical operating model.",
  },
  {
    icon: Clock3,
    title: "Scale with rhythm",
    description:
      "We support launches, measure performance, and improve the network as demand grows.",
  },
];

const trustHighlights = [
  "Franchise-ready logistics support",
  "Modern SaaS and automation expertise",
  "Real estate guidance with local insight",
];

export default function Home() {
  return (
    <AnimatedGradientBackground className="selection:bg-blue-200 selection:text-blue-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-slate-950 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <GlassNavbar activeHref="/" />

      <main id="main-content" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[460px] bg-gradient-to-b from-blue-100/45 via-transparent to-transparent" />
        <HeroSection />
        <ProofStrip />

        <div id="about" className="scroll-mt-28">
          <WhoWeAreSection />
        </div>

        <TrustPanel />

        <div id="services" className="scroll-mt-28">
          <OurServicesSection />
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-blue-100/45 to-transparent" />
          <OperatingModel />
        </div>
        <WhyChooseUsSection />
        <TestimonialsSection />

        <div id="contact" className="scroll-mt-28">
          <ContactSection />
        </div>

        <FinalCallout />
      </main>

      <MarketingFooter />
    </AnimatedGradientBackground>
  );
}

function ProofStrip() {
  return (
    <section aria-label="Business Growth Services performance highlights" className="ds-shell">
      <div className="ds-panel grid grid-cols-2 gap-3 p-3 md:grid-cols-4">
        {proofPoints.map((point) => (
          <div
            key={point.value}
            className="ds-card group px-4 py-5 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_18px_40px_rgba(59,130,246,0.14)]"
          >
            <p className="text-2xl font-bold tracking-tight text-slate-950 transition-colors duration-300 group-hover:text-blue-700 sm:text-3xl">
              {point.label}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              {point.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TrustPanel() {
  return (
    <section className="ds-shell py-10 md:py-14" aria-labelledby="trust-heading">
      <div className="relative mx-auto grid max-w-6xl gap-5 overflow-hidden rounded-[2rem] border border-blue-100/80 bg-slate-950 text-white shadow-[0_28px_80px_rgba(15,23,42,0.28)] md:grid-cols-[1.15fr_0.85fr]">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-4 h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-100">
            <Sparkles className="h-3.5 w-3.5" />
            Built for compound growth
          </div>

          <h2 id="trust-heading" className="mt-5 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            One partner for the operations, assets, and software behind business expansion.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            BGS brings together logistics execution, real estate advisory, and SaaS enablement so
            founders and operators can move faster with fewer disconnected vendors.
          </p>
        </div>

        <div className="grid content-center gap-3 border-t border-white/10 bg-white/[0.04] p-6 sm:p-8 md:border-l md:border-t-0">
          {trustHighlights.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
              <BadgeCheck className="h-5 w-5 shrink-0 text-blue-300" />
              <span className="text-sm font-semibold text-slate-100">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OperatingModel() {
  return (
    <section className="ds-shell py-12 md:py-16" aria-labelledby="model-heading">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            How we work
          </p>
          <h2 id="model-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Clear steps from first conversation to measurable growth.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {operatingModel.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.title}
                className="group rounded-[1.75rem] border border-slate-200/75 bg-gradient-to-br from-white/90 to-blue-50/55 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.09)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(59,130,246,0.14)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/25">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-slate-300">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCallout() {
  return (
    <section className="ds-shell pb-12 md:pb-16">
      <div className="ds-panel mx-auto flex max-w-6xl flex-col gap-6 bg-gradient-to-r from-white/80 via-white/70 to-blue-50/70 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">
            <ShieldCheck className="h-3.5 w-3.5" />
            Ready when you are
          </div>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Start with a focused growth consultation.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Tell us what you are building, where you are stuck, and what kind of growth system you need next.
          </p>
        </div>

        <a
          href="#contact"
          className="ds-btn-primary inline-flex items-center justify-center gap-2 bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition-transform duration-300 hover:-translate-y-0.5"
        >
          Get Free Consultation
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

