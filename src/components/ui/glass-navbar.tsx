 "use client";

import { useState } from "react";
import Image from "next/image";
import { Lora } from "next/font/google";
import { EllipsisVertical, Facebook, Instagram, Twitter, ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const junicode = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

type GlassNavbarProps = {
  /**
   * Optional href of the current route to highlight the active nav item.
   * Example: "/services"
   */
  activeHref?: string;
  className?: string;
  whiteText?: boolean;
  variant?: "default" | "home";
};

type NavItem = {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
};

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    subItems: [
      { label: "Logistics", href: "/services/logistics" },
      { label: "Real Estate", href: "/services/real-estate" },
      { label: "IT Sales", href: "/services/it-sales" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Gallery", href: "/gallery" },
];

export function GlassNavbar({ activeHref, className, whiteText, variant = "default" }: GlassNavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const primaryText = whiteText ? "text-white" : "text-foreground";
  const primaryText80 = whiteText ? "text-white/90" : "text-foreground/80";
  const primaryText85 = whiteText ? "text-white/90" : "text-foreground/85";
  const primaryText75 = whiteText ? "text-white/75" : "text-foreground/75";
  const navSurfaceClass = whiteText
    ? "bg-transparent border-white/20 ring-1 ring-white/10 ring-inset shadow-[0_12px_34px_rgba(2,6,23,0.3)]"
    : "bg-white/20 bg-gradient-to-r from-white/15 via-white/25 to-white/15 border border-white/50 ring-1 ring-white/30 ring-inset shadow-[0_8px_32px_rgba(15,23,42,0.12)] dark:bg-white/5 dark:from-white/[0.07] dark:via-white/[0.12] dark:to-white/[0.07] dark:border-white/20";
  const logoClass = whiteText
    ? "object-contain brightness-0 invert contrast-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition-opacity hover:opacity-90"
    : "object-contain transition-opacity hover:opacity-90";

  if (variant === "home") {
    return (
      <header className={cn("fixed top-0 left-0 right-0 z-50 w-full px-2 pt-2.5 sm:px-4 lg:px-6", className)}>
        <nav
          aria-label="Main navigation"
          className="mx-auto flex w-full max-w-[90rem] items-center justify-between rounded-2xl border border-white/80 bg-white/88 px-3 py-2 shadow-[0_14px_42px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-4 lg:px-6"
        >
          <a href="/" className="flex min-w-0 items-center gap-2 pl-1.5 sm:pl-2">
            <div className="relative h-6 w-16 sm:h-7 sm:w-20 md:h-7 md:w-24">
              <Image src="/logo1.png" alt="BGS" fill sizes="96px" className="object-contain transition-opacity hover:opacity-90" priority />
            </div>
          </a>

          <ul className={cn("hidden items-center gap-7 text-[15px] text-slate-700 lg:flex", junicode.className)}>
            {NAV_ITEMS.map((item) => {
              const hasSubItems = item.subItems && item.subItems.length > 0;
              const isDropdownOpen = openDropdown === item.label;
              return (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasSubItems && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasSubItems && setOpenDropdown(null)}
                >
                  {hasSubItems ? (
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-medium text-slate-700 transition-colors hover:text-blue-700"
                    >
                      {item.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 text-slate-500 transition-transform", isDropdownOpen && "rotate-180")} />
                    </button>
                  ) : (
                    <a href={item.href} className="inline-flex items-center rounded-full px-2.5 py-1 font-medium text-slate-700 transition-colors hover:text-blue-700">
                      {item.label}
                    </a>
                  )}

                  {hasSubItems && isDropdownOpen ? (
                    <div className="absolute left-1/2 top-full z-[100] w-56 -translate-x-1/2 pt-2">
                      <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_16px_40px_rgba(15,23,42,0.12)]">
                        {item.subItems!.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="/#contact"
              className={cn(
                "hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(37,99,235,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(37,99,235,0.42)] sm:inline-flex",
                junicode.className
              )}
            >
              Contact
            </a>
            <div className="hidden items-center gap-1.5 sm:flex">
              <SocialIcon Icon={Facebook} label="Facebook" iconClassName="text-blue-500" />
              <SocialIcon Icon={Instagram} label="Instagram" iconClassName="text-pink-500" />
              <SocialIcon Icon={Twitter} label="Twitter" iconClassName="text-slate-700" />
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-700 transition-colors hover:bg-slate-50"
              aria-label="Open menu"
            >
              <Menu className="h-4.5 w-4.5" />
            </button>
          </div>
        </nav>

        {mobileOpen ? (
          <div className="fixed inset-0 z-[60] bg-slate-950/30 backdrop-blur-sm lg:hidden">
            <button type="button" className="absolute inset-0" aria-label="Close menu backdrop" onClick={() => setMobileOpen(false)} />
            <div className="absolute right-3 top-3 w-[min(22rem,92vw)] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_24px_70px_rgba(15,23,42,0.2)]">
              <div className="mb-3 flex items-center justify-between">
                <span className={cn("text-base font-semibold text-slate-900", junicode.className)}>Menu</span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 text-slate-700"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                  >
                    <span>{item.label}</span>
                    {item.subItems?.length ? <ChevronDown className="h-3.5 w-3.5 text-slate-500" /> : null}
                  </a>
                ))}
              </div>
              <a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(37,99,235,0.35)]",
                  junicode.className
                )}
              >
                Contact
              </a>
            </div>
          </div>
        ) : null}
      </header>
    );
  }

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 w-full px-2 pt-2 sm:px-4 lg:px-6", className)}>
      <nav
        aria-label="Main navigation"
        className={cn(
          "relative mx-auto flex w-full max-w-[90rem] items-center justify-between gap-3 rounded-full px-3 py-1 sm:px-5 sm:py-1.5",
          primaryText,
          // strong glass effect: heavy blur and saturation
          "backdrop-blur-[40px] backdrop-saturate-[200%]",
          navSurfaceClass
        )}
      >
        {/* Logo */}
        <div className="flex min-w-0 items-center gap-2 pl-1.5 sm:pl-4">
          <div
            className={cn(
              "relative h-6 w-16 sm:h-7 sm:w-20 md:h-7 md:w-24",
              whiteText && "rounded-md bg-white/5 ring-1 ring-white/20"
            )}
          >
            <Image
              src="/logo1.png"
              alt="BGS"
              fill  
              sizes="96px"
              className={logoClass}
              priority
            />
          </div>
        </div>

        {/* Navigation links */}
        <ul
          className={cn(
            "hidden flex-1 items-center justify-center gap-1 text-xs sm:flex sm:gap-3 sm:text-sm md:text-[0.95rem]",
            junicode.className
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeHref
              ? item.href === activeHref
              : item.href === "/";
            const hasSubItems = item.subItems && item.subItems.length > 0;
            const isDropdownOpen = openDropdown === item.label;

            return (
              <li
                key={item.href}
                className="relative"
                onMouseEnter={() => hasSubItems && setOpenDropdown(item.label)}
                onMouseLeave={() => hasSubItems && setOpenDropdown(null)}
              >
                {hasSubItems ? (
                  <>
                    <button
                      type="button"
                      className={cn(
                        "relative inline-flex items-center gap-1 rounded-full px-3 py-1 font-semibold transition-all duration-200",
                        primaryText80,
                        whiteText ? "hover:text-white" : "hover:text-foreground",
                        "dark:hover:bg-background/45",
                        isActive &&
                          "bg-background/80 text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.55)_inset] dark:bg-background/55",
                        isDropdownOpen && "bg-background/70"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-3.5 w-3.5 transition-transform duration-300",
                          isDropdownOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Dropdown menu */}
                    {isDropdownOpen && (
                      <div 
                        className="absolute left-1/2 top-full z-[100] pt-2 -translate-x-1/2"
                        style={{ minWidth: '220px' }}
                      >
                        <div
                          className={cn(
                            "rounded-2xl border border-white/50 bg-white/98 p-3 shadow-2xl backdrop-blur-3xl",
                            "dark:border-white/20 dark:bg-slate-900/98",
                            "transform transition-all duration-200 ease-out origin-top",
                            "animate-in fade-in zoom-in-95"
                          )}
                          style={{
                            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
                          }}
                        >
                          {item.subItems!.map((subItem, idx) => (
                            <a
                              key={subItem.href}
                              href={subItem.href}
                              className={cn(
                                "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
                                "text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 hover:text-slate-900",
                                "dark:text-slate-200 dark:hover:from-blue-900/30 dark:hover:to-teal-900/30 dark:hover:text-white",
                                "hover:scale-[1.02] hover:shadow-sm"
                              )}
                              style={{
                                animationDelay: `${idx * 50}ms`
                              }}
                            >
                              <div className={cn(
                                "h-2 w-2 rounded-full transition-all duration-200",
                                "bg-slate-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500",
                                "dark:bg-slate-600 dark:group-hover:from-blue-400 dark:group-hover:to-teal-400"
                              )} />
                              <span className="flex-1">{subItem.label}</span>
                              <svg 
                                className="h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-full px-3 py-1 font-semibold transition-colors",
                      primaryText80,
                      whiteText ? "hover:text-white" : "hover:text-foreground",
                      "dark:hover:bg-background/45",
                      isActive &&
                        cn(
                          "bg-background/80 shadow-[0_0_0_1px_rgba(255,255,255,0.55)_inset] dark:bg-background/55",
                          whiteText ? "text-white" : "text-foreground"
                        )
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ul>

        {/* CTA + Socials + mobile trigger */}
        <div className="flex items-center gap-1.5 pr-1.5 sm:gap-2 sm:pr-3">
          {/* Desktop contact + socials */}
          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="/#contact"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-4 py-1 text-xs font-medium md:text-sm",
                junicode.className,
                "border border-white/35 bg-background/90 shadow-md backdrop-blur-3xl",
                whiteText ? "text-white" : "text-foreground",
                "dark:border-white/20 dark:bg-background/55 dark:text-foreground/90",
                "transition-transform transition-colors hover:-translate-y-0.5 hover:bg-background"
              )}
            >
              Contact
            </a>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <SocialIcon Icon={Facebook} label="Facebook" iconClassName="text-blue-500 dark:text-blue-400" whiteText={whiteText} />
              <SocialIcon Icon={Instagram} label="Instagram" iconClassName="text-pink-500 dark:text-pink-400" whiteText={whiteText} />
              <SocialIcon Icon={Twitter} label="Twitter" iconClassName="text-slate-900 dark:text-slate-100" whiteText={whiteText} />
            </div>
          </div>

          {/* Mobile three-dots trigger */}
          <button
            type="button"
            className={cn(
              "inline-flex h-7 w-8 items-center justify-center rounded-lg border border-white/30 bg-background/40 shadow-sm backdrop-blur-2xl sm:hidden",
          whiteText ? "text-white" : "text-foreground",
              "transition-transform transition-colors hover:-translate-y-0.5 hover:bg-background/60"
            )}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <EllipsisVertical className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-30 sm:hidden">
          {/* Dimmed backdrop */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="absolute inset-0 h-full w-full bg-black/35 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Sliding glass panel */}
          <div className="absolute inset-y-3 right-3 flex w-72 max-w-[82vw] justify-end">
            <div className="flex w-full flex-col rounded-3xl border border-white/35 bg-background/92 p-5 text-foreground shadow-[0_24px_70px_rgba(15,23,42,0.55)] backdrop-blur-2xl dark:bg-background/75">
              <div className="mb-5 flex items-center justify-between">
                <span className={cn("text-base font-semibold tracking-tight", junicode.className)}>
                  Navigation
                </span>
                <button
                  type="button"
                  aria-label="Close"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/35 bg-background/80 text-sm font-medium shadow-sm"
                  onClick={() => setMobileOpen(false)}
                >
                  ×
                </button>
              </div>

              <nav className="space-y-2.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeHref ? item.href === activeHref : item.href === "/";
                  const hasSubItems = item.subItems && item.subItems.length > 0;
                  const isDropdownOpen = openDropdown === item.label;

                  return (
                    <div key={item.href}>
                      {hasSubItems ? (
                        <>
                          <button
                            type="button"
                            onClick={() => setOpenDropdown(isDropdownOpen ? null : item.label)}
                            className={cn(
                              "flex w-full items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm md:text-base font-semibold transition-all duration-200",
                              primaryText85,
                              whiteText ? "hover:text-white" : "hover:text-foreground",
                              "dark:hover:bg-background/65",
                              isActive &&
                                "bg-background/95 text-foreground shadow-[0_0_0_1px_rgba(255,255,255,0.4)_inset]",
                              isDropdownOpen && "bg-background/90"
                            )}
                          >
                            <span className={cn("tracking-wide", junicode.className)}>{item.label}</span>
                            <ChevronDown
                              className={cn(
                                "h-4 w-4 transition-transform duration-300",
                                isDropdownOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {isDropdownOpen && (
                            <div className="ml-2 mt-2 space-y-1 overflow-hidden rounded-xl border border-white/20 bg-background/50 p-2">
                              {item.subItems!.map((subItem, idx) => (
                                <a
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={() => setMobileOpen(false)}
                                  className={cn(
                                    "group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all duration-200",
                                    whiteText ? "text-white/90" : "text-foreground/75",
                                    whiteText
                                      ? "hover:text-white hover:bg-white/10"
                                      : "hover:text-foreground hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-teal-50/50",
                                    whiteText
                                      ? "dark:text-white/80 dark:hover:bg-white/10"
                                      : "dark:text-foreground/70 dark:hover:from-blue-900/20 dark:hover:to-teal-900/20 dark:hover:text-foreground",
                                    "hover:scale-[1.02]"
                                  )}
                                  style={{
                                    animationDelay: `${idx * 50}ms`
                                  }}
                                >
                                  <div className={cn(
                                    "h-1.5 w-1.5 rounded-full transition-all duration-200",
                                    "bg-slate-400 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-500",
                                    "dark:bg-slate-600"
                                  )} />
                                  <span className="flex-1">{subItem.label}</span>
                                </a>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "flex items-center justify-between rounded-2xl px-3.5 py-2.5 text-sm md:text-base font-semibold",
                            whiteText ? "text-white/90" : "text-foreground/85",
                            whiteText ? "hover:text-white" : "hover:text-foreground",
                            "dark:hover:bg-background/65",
                            isActive &&
                            cn(
                              "bg-background/95 shadow-[0_0_0_1px_rgba(255,255,255,0.4)_inset]",
                              whiteText ? "text-white" : "text-foreground"
                            )
                          )}
                        >
                          <span className={cn("tracking-wide", junicode.className)}>{item.label}</span>
                        </a>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/15 pt-4">
                <a
                  href="/#contact"
                  className={cn(
                    "inline-flex flex-1 items-center justify-center rounded-full px-3.5 py-2.5 text-sm font-semibold",
                    junicode.className,
                    "border border-white/40 bg-background/95 shadow-sm",
                    whiteText ? "text-white" : "text-foreground"
                  )}
                  onClick={() => setMobileOpen(false)}
                > 
                  Contact
                </a>
                <div className="flex items-center gap-1.5">
                  <SocialIcon Icon={Facebook} label="Facebook" iconClassName="text-blue-500 dark:text-blue-400" whiteText={whiteText} />
                  <SocialIcon Icon={Instagram} label="Instagram" iconClassName="text-pink-500 dark:text-pink-400" whiteText={whiteText} />
                  <SocialIcon Icon={Twitter} label="Twitter" iconClassName="text-slate-900 dark:text-slate-100" whiteText={whiteText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

type SocialIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  iconClassName?: string;
  whiteText?: boolean;
};

function SocialIcon({ Icon, label, iconClassName, whiteText }: SocialIconProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex h-6 w-6 items-center justify-center rounded-full text-[0.7rem] sm:h-7 sm:w-7",
        "bg-background/75 text-foreground/80 shadow-md backdrop-blur-2xl",
        "dark:bg-background/45 dark:text-foreground/80",
        "transition-transform transition-colors hover:-translate-y-0.5 hover:text-foreground hover:bg-background/90"
      )}
    >
      <Icon className={cn("h-3.5 w-3.5 sm:h-4 sm:w-4", iconClassName)} />
    </button>
  );
}

