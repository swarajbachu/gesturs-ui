import { composeRenderProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

export const focusRing = tv({
  base: `outline-none ring-offset-background 
  ring-0 ring-border-focus focus-visible:ring-offset-[2px] focus-visible:ring-offset-background 
  ring-primary focus-visible:ring-2 `,
});

export const focusRingGroup = tv({
  base: "outline-none ring-0 ring-border-focus group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-bg group-focus-visible:ring-2",
});

export const focusInput = tv({
  base: "ring-0 focus-within:ring-gray-500/30 focus-within:ring-2",
});

export function composeTailwindRenderProps<T>(
  className: string | ((v: T) => string) | undefined,
  tw: string
): string | ((v: T) => string) {
  return composeRenderProps(className, (className) => twMerge(tw, className));
}
