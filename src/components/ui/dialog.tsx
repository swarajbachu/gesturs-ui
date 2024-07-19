import React from "react";
import {
  DialogProps,
  Dialog as RACDialog,
  DialogTrigger as RACDialogTrigger,
  DialogTriggerProps as RACDialogTriggerProps,
} from "react-aria-components";
import { cn } from "@/lib/utils";

export function Dialog(props: DialogProps) {
  return (
    <RACDialog
      {...props}
      className={cn(
        "outline outline-0 p-6 [[data-placement]>&]:p-4 max-h-[inherit] overflow-auto relative",
        props.className
      )}
    />
  );
}

export function DialogTrigger(props: RACDialogTriggerProps) {
  return (
    <RACDialogTrigger {...props} />
  );
}
