export type ClassValue = string | number | null | undefined | false;

/**
 * Simple utility to merge Tailwind class names.
 * Inspired by shadcn/ui's `cn` helper but implemented without extra deps.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

