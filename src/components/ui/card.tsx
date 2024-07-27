"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { tv, VariantProps } from "tailwind-variants";

const CardContext = React.createContext<{ horizontal?: boolean }>({});

const cardVariants = tv({
  variants: {
    horizontal: {
      true: "flex flex-row w-fit",
    },
  },
});

const cardChildrenVariants = tv({
  variants: {
    shadow: {
      true: "shadow-md shadow-gray-500/40 dark:shadow-none",
    },
  },
});

type CardProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, horizontal, ...props }, ref) => (
    <CardContext.Provider value={{ horizontal }}>
      <div
        aria-label="Card"
        ref={ref}
        className={cn(
          "bg-white dark:bg-zinc-900 text-card-foreground shadow-md rounded-xl w-96 border-0 dark:border-[1.5px] dark:border-muted",
          cardVariants({ horizontal }),
          className
        )}
        {...props}
      />
    </CardContext.Provider>
  )
);
Card.displayName = "Card";

const CardSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { horizontal } = React.useContext(CardContext);
  return (
    <div
      aria-label="CardSection"
      ref={ref}
      className={cn(
        "[&_*]:w-full  [&_*]:my-0 overflow-hidden rounded-t-xl",
        {
          "flex-row [&_*]:w-fit [&_*]:h-full first:rounded-l-xl last:rounded-r-xl rounded-t-none":
            horizontal,
        },
        className
      )}
      {...props}
    />
  );
});
CardSection.displayName = "CardSection";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      aria-label="CardHeader"
      ref={ref}
      className={cn(
        "relative text-center h-fit overflow-hidden  mx-4 [&_*]:w-full [&_*]:my-0 -mt-6  shadow-lg bg-clip-border rounded-xl bg-primary text-primary-foreground shadow-gray-500/40 dark:shadow-none *:",
        className
      )}
      {...props}
    />
  );
});
CardHeader.displayName = "CardHeader";

type CardContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardChildrenVariants>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ shadow, className, ...props }, ref) => {
    const { horizontal } = React.useContext(CardContext);
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 space-y-1.5",
          { "space-y-2": horizontal },
          cardChildrenVariants({ shadow }),
          className
        )}
        {...props}
      />
    );
  }
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("p-6 pt-0 space-y-2", className)} {...props} />;
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardSection, CardFooter };
