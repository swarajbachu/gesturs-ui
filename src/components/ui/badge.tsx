import * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/utils";

const specialColors = [
  "primary",
  "secondary",
  "destructive",
  "accent",
] as const;

const regularColors = [
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;

const colors = [...specialColors, ...regularColors] as const;

type Color = (typeof colors)[number];

const badgeVariants = tv({
  base: "inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline",
  variants: {
    variant: {
      light: "",
      filled: "",
    },
    color: colors.reduce((acc, color) => {
      acc[color] = color;
      return acc;
    }, {} as Record<Color, Color>),
    size: {
      sm: "h-5 px-1.5 [&_svg]:size-3 ",
      md: "h-6 px-2 [&_svg]:size-3.5",
      lg: "h-7 px-4 text-sm [&_svg]:size-4",
    },
  },
  compoundVariants: [
    ...regularColors.flatMap((color) => [
      {
        color,
        variant: "light" as const,
        class: `bg-${color}-400/10 text-${color}-700 hover:bg-${color}-400/30 dark:bg-${color}-400/20 dark:text-${color}-300 `,
      },
      {
        color,
        variant: "filled" as const,
        class: `bg-${color}-300 text-${color}-800 hover:bg-${color}-400 dark:bg-${color}-800 dark:text-${color}-200 dark:hover:bg-${color}-700`,
      },
    ]),
    ...specialColors.flatMap((color) => [
      {
        color,
        variant: "light" as const,
        class: `bg-${color}/10 text-${color} hover:bg-${color}/20`,
      },
      {
        color,
        variant: "filled" as const,
        class: `bg-${color} text-${color}-foreground hover:bg-${color}/90 `,
      },
    ]),
  ],
  defaultVariants: {
    color: "primary",
    variant: "light",
    size: "md",
  },
});

export type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
    leftSection?: React.ReactNode;
    rightSection?: React.ReactNode;
  };

function Badge({
  children,
  className,
  variant,
  size,
  leftSection,
  rightSection,
  color,
  ...props
}: BadgeProps) {
  return (
    <span
      role="presentation"
      className={cn(badgeVariants({ variant, size, color }), className)}
      {...props}
    >
      {leftSection && <span>{leftSection}</span>}
      {children}
      {rightSection && <span>{rightSection}</span>}
    </span>
  );
}

export { Badge, badgeVariants };
