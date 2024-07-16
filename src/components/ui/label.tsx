"use client";

import { cn } from "@/lib/utils";
import { Asterisk } from "lucide-react";
import * as React from "react";
import {
  Label as RACLabel,
  type LabelProps as RACLabelProps,
} from "react-aria-components";
import { tv, VariantProps } from "tailwind-variants";

const labelVariants = tv({
  base: "text-sm/6 pl-1 inline-flex items-center gap-px font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-muted [&_svg]:size-3",
  variants: {
    variant: {
      animateOut:
        "pointer-events-none absolute left-6 top-1/2 -mt-2 origin-left [&_svg]:hidden peer-[:not(:placeholder-shown)]:[&_svg]:block  transition-all duration-200 peer-focus:-translate-y-5 peer-focus:-translate-x-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-foreground peer-focus:text-sm  peer-focus:[&_svg]:block",
    },
  },
});

type LabelProps = RACLabelProps &
  VariantProps<typeof labelVariants> & {
    withAsterisk?: boolean;
  };

function Label({ className, children, withAsterisk, ...props }: LabelProps) {
  return (
    <RACLabel className={cn(labelVariants(props), className)} {...props}>
      {children}
      {withAsterisk && (
        <span aria-hidden>
          <></>
        </span>
      )}
      {withAsterisk && " \u200b"}
      {withAsterisk && <Asterisk color="red" />}
    </RACLabel>
  );
}

export type { LabelProps };
export { Label };
