"use client";

import { cn } from "@/lib/utils";
import { Keyboard } from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const KbdStyles = tv({
  base: "text-xs tracking-widest text-foreground",
  variants: {
    variant: {
      filled: "bg-zinc-800/10 dark:bg-zinc-800 p-1.5  rounded",
      outline:
        "px-2 py-1 border rounded-md border-b-[3px] border-zinc-300 dark:border-zinc-800",
    },
  },
  defaultVariants: {
    variant: "filled",
  },
});

type KbdProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof KbdStyles>;

const Kbd = ({ variant, className, ...props }: KbdProps) => {
  return (
    <Keyboard className={cn(KbdStyles({ variant }), className)} {...props} />
  );
};

export type { KbdProps };
export { Kbd, KbdStyles };
