"use client";

import { focusRing } from "@/components/ui/lib/aria-utils";
import { cn } from "@/lib/utils";
import { LoaderIcon } from "lucide-react";
import React from "react";
import {
  Button as RACButton,
  ButtonProps as RACButtonProps,
  type LinkProps as RACLinkProps,
  Link as RACLink,
} from "react-aria-components";
import { tv, type VariantProps } from "tailwind-variants";

let button = tv({
  extend: focusRing,
  base: `relative isolate pressed:ring-none inline-flex items-center justify-center 
  gap-x-2 rounded-sm border text-base/6 font-semibold px-5 py-2 text-base/6 text-center 
  transition no-underline  border 
  disabled:bg-gray-100 disabled:dark:bg-zinc-800 
  disabled:text-gray-300 disabled:dark:text-zinc-600 forced-colors:text-[GrayText] 
  disabled:border-black/5 disabled:dark:border-white/5 disabled:hover:bg-gray-100 
  disabled:dark:hover:bg-zinc-800 disabled:cursor-not-allowed`,
  variants: {
    variant: {
      primary:
        "bg-primary hover:bg-primary/90 pressed:bg-primary/90 text-primary-foreground  border-black/10 dark:border-white/10 ",
      secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80 pressed:bg-secondary/90 border-secondary/10",
      destructive:
        "bg-destructive text-destructive-foreground border-destructive/10",
      accent: "hover:bg-accent text-accent-foreground border-none",
      outline: "bg-transparent border hover:bg-foreground/5",
      ghost: "bg-transparent border-none hover:bg-foreground/5 !shadow-none",
    },
    size: {
      sm: "text-sm/6 px-3 py-1 [&_svg]:size-4",
      md: "text-base/6 px-5 py-2 [&_svg]:size-5",
      lg: "text-lg/6 px-7 py-3 [&_svg]:size-6",
      icon: "p-2 rounded-sm size-9 border-none",
    },
    shadow: {
      true: "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none",
    },
    border: {
      false: "border-none",
    },
    fullWidth: {
      true: "w-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    border: true,
    shadow: true,
    size: "md",
  },
});

type ButtonProps = RACButtonProps &
  Omit<RACLinkProps, "className" | "style" | "children"> &
  VariantProps<typeof button> & {
    isLoading?: boolean;
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
  };

function Button({
  children,
  className,
  isDisabled,
  size,
  variant,
  border,
  shadow,
  href,
  fullWidth,
  isLoading,
  ...props
}: ButtonProps) {
  const ButtonElement: React.ElementType = href ? RACLink : RACButton;

  return (
    <ButtonElement
      {...props}
      href={href}
      isDisabled={isLoading || isDisabled}
      className={cn(
        button({ size, variant, border, shadow, fullWidth }),
        className
      )}
    >
      {isLoading && <LoaderIcon className="h-4 w-4 animate-spin" />}
      {props.leftSection}
      {children}
      {props.rightSection}
    </ButtonElement>
  );
}

export { Button, type ButtonProps };
