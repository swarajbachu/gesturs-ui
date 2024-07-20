import {
  OverlayArrow,
  Popover as RACPopover,
  PopoverProps as RACPopoverProps,
  composeRenderProps,
  PopoverContext,
  useSlottedContext,
} from "react-aria-components";
import React from "react";
import { tv } from "tailwind-variants";
import { Dialog } from "./dialog";

export interface PopoverProps extends Omit<RACPopoverProps, "children"> {
  showArrow?: boolean;
  children: React.ReactNode;
}

const popoverStyles = tv({
  base: "group focus-none bg-popover text-popover-foreground dark:backdrop-blur-2xl dark:backdrop-saturate-200  shadow rounded-xl bg-clip-padding border border-black/10 dark:border-white/[15%]",
  variants: {
    isEntering: {
      true: "animate-in fade-in placement-bottom:slide-in-from-top-1 placement-top:slide-in-from-bottom-1 placement-left:slide-in-from-right-1 placement-right:slide-in-from-left-1 ease-out duration-200",
    },
    isExiting: {
      true: "animate-out fade-out placement-bottom:slide-out-to-top-1 placement-top:slide-out-to-bottom-1 placement-left:slide-out-to-right-1 placement-right:slide-out-to-left-1 ease-in duration-150",
    },
  },
});

export function Popover({
  children,
  showArrow,
  className,
  ...props
}: PopoverProps) {
  let popoverContext = useSlottedContext(PopoverContext)!;
  let isSubmenu = popoverContext?.trigger === "SubmenuTrigger";
  let offset = showArrow ? 12 : 8;
  offset = isSubmenu ? offset - 6 : offset;
  return (
    <RACPopover
      offset={offset}
      {...props}
      className={composeRenderProps(className, (className, renderProps) =>
        popoverStyles({ ...renderProps, className })
      )}
    >
      {showArrow && (
        <OverlayArrow className="group">
          <svg
            width={12}
            height={12}
            viewBox="0 0 12 12"
            className="block fill-popover forced-colors:fill-[Canvas] stroke-1 stroke-black/10 dark:stroke-white/[15%]  forced-colors:stroke-[ButtonBorder] group-placement-bottom:rotate-180 group-placement-left:-rotate-90 group-placement-right:rotate-90"
          >
            <path d="M0 0 L6 6 L12 0" />
          </svg>
        </OverlayArrow>
      )}
      <Dialog>{children}</Dialog>
    </RACPopover>
  );
}
