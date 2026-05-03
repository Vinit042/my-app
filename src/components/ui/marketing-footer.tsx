import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  UserPlus,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL = "service@businessgrowthservices.in";
const ADDRESS =
  "A- 122, Building No 5, Mittal estate marol, andheri east 400059";

const serviceLinks = [
  { label: "Logistics", href: "/services/logistics/" },
  { label: "Real Estate", href: "/services/real-estate/" },
  { label: "IT Sales", href: "/services/it-sales/" },
] as const;

const companyLinks = [
  { label: "About Us", href: "/about/" },
  { label: "Careers", href: "/careers/" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Contact Us", href: "/#contact" },
] as const;

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between gap-2 py-2 text-sm text-white/75 transition-colors hover:text-white"
    >
      <span className="flex min-w-0 items-center gap-2.5">
        <span className="truncate">{children}</span>
      </span>
      <ChevronRight className="h-3.5 w-3.5 shrink-0 text-white/35 transition-transform group-hover:translate-x-0.5 group-hover:text-orange-400" />
    </Link>
  );
}

function ColumnHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="relative pb-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-10 rounded-full bg-orange-500" aria-hidden />
    </h3>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/85 transition-colors hover:border-orange-500/40 hover:bg-orange-500/15 hover:text-orange-300"
    >
      {children}
    </a>
  );
}

function CityscapeBand() {
  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-[#060a12] py-10 sm:py-14">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(249,115,22,0.12), transparent 55%)",
        }}
      />
      {/* skyline */}
      <div className="relative mx-auto flex h-24 max-w-5xl items-end justify-center gap-1 px-4 opacity-40 sm:h-28 sm:gap-1.5">
        {[40, 56, 48, 72, 52, 84, 44, 64, 50, 68, 42].map((hpx, i) => (
          <div
            key={i}
            className="w-full max-w-[2.25rem] rounded-t-sm bg-gradient-to-t from-slate-900 to-slate-700"
            style={{ height: hpx }}
          />
        ))}
      </div>
      {/* road */}
      <div className="relative mx-auto mt-2 h-px max-w-4xl bg-white/20" />
      <div className="relative mx-auto flex h-8 max-w-4xl items-center justify-center">
        <div className="h-0.5 w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.35)_10px,rgba(255,255,255,0.35)_20px)]" />
      </div>
      {/* delivery motif */}
      <div className="relative mx-auto -mt-6 flex max-w-4xl justify-center">
        <div className="flex items-end gap-1 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 shadow-[0_0_40px_rgba(249,115,22,0.15)] backdrop-blur-sm">
          <div className="relative">
            <div className="absolute -left-1 top-1/2 h-1 w-8 -translate-y-1/2 rounded-full bg-orange-400/25 blur-[2px]" />
            <svg
              width="72"
              height="44"
              viewBox="0 0 72 44"
              fill="none"
              className="text-orange-500"
              aria-hidden
            >
              <ellipse cx="22" cy="38" rx="7" ry="5" fill="currentColor" opacity="0.35" />
              <ellipse cx="50" cy="38" rx="7" ry="5" fill="currentColor" opacity="0.35" />
              <path
                d="M8 34h48l4-14h8v14"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <rect x="44" y="12" width="14" height="12" rx="2" fill="currentColor" opacity="0.9" />
              <path d="M12 34V22h20l8 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MarketingFooter({ className }: { className?: string }) {
  return (
    <footer
      className={cn(
        "bg-[#0a0e18] text-white",
        "selection:bg-orange-500/30 selection:text-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:pr-4">
            <Link href="/" className="inline-block">
              <div className="relative h-10 w-36">
                <Image
                  src="/logo1.png"
                  alt="Business Growth Services"
                  fill
                  sizes="144px"
                  className="object-contain object-left brightness-0 invert"
                />
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              Business Growth Services powers structured, scalable, and technology-driven
              growth across logistics, real estate, and SaaS—so you can expand with clarity.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <SocialButton href="#" label="Facebook">
                <Facebook className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </SocialButton>
              <SocialButton href="#" label="Instagram">
                <Instagram className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </SocialButton>
              <SocialButton href="#" label="LinkedIn">
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </SocialButton>
              <SocialButton href="#" label="YouTube">
                <Youtube className="h-[18px] w-[18px]" strokeWidth={1.75} />
              </SocialButton>
            </div>
          </div>

          {/* Services */}
          <div>
            <ColumnHeading>Our services</ColumnHeading>
            <nav className="mt-6 space-y-0 border-t border-white/[0.06] pt-1" aria-label="Services">
              {serviceLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <ColumnHeading>Company</ColumnHeading>
            <nav className="mt-6 space-y-0 border-t border-white/[0.06] pt-1" aria-label="Company">
              {companyLinks.map((item) => (
                <FooterLink key={item.href} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <ColumnHeading>Get in touch</ColumnHeading>
            <div className="mt-6 space-y-5 border-t border-white/[0.06] pt-5">
              <a
                href={`mailto:${EMAIL}`}
                className="flex gap-3 text-sm text-white/75 transition-colors hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                <span className="break-all">{EMAIL}</span>
              </a>
              <p className="flex gap-3 text-sm leading-relaxed text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
                <span>{ADDRESS}</span>
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-orange-500 px-5 py-2.5 text-sm font-semibold text-orange-400 transition-colors hover:bg-orange-500/10 hover:text-orange-300"
              >
                <UserPlus className="h-4 w-4" aria-hidden />
                Become a Partner
              </Link>
            </div>
          </div>
        </div>
      </div>

      <CityscapeBand />

      <div className="border-t border-white/[0.06] bg-[#070b14] px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center text-xs text-white/45 sm:flex-row sm:flex-wrap sm:text-left">
          <p>© {new Date().getFullYear()} Business Growth Services. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 sm:justify-start">
            <Link href="#" className="transition-colors hover:text-white/80">
              Privacy Policy
            </Link>
            <span className="text-white/25" aria-hidden>
              |
            </span>
            <Link href="#" className="transition-colors hover:text-white/80">
              Terms &amp; Conditions
            </Link>
            <span className="text-white/25" aria-hidden>
              |
            </span>
            <Link href="#" className="transition-colors hover:text-white/80">
              Refund Policy
            </Link>
          </div>
          <p className="flex items-center justify-center gap-2 sm:justify-end">
            <span>Powered by technology.</span>
            <span className="relative inline-block h-6 w-6 shrink-0 overflow-hidden rounded-sm opacity-90">
              <Image
                src="/logo1.png"
                alt=""
                fill
                sizes="24px"
                className="object-contain brightness-0 invert"
              />
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
