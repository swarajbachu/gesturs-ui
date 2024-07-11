'use client';

import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CheckIcon, ClipboardIcon } from "lucide-react";
import * as React from "react";

interface CopyButtonProps extends ButtonProps {
  value: string;
  src?: string;
}

export async function copyToClipboardWithMeta(value: string, event?: Event) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({
  value,
  className,
  src,
  variant = "icon",
  ...props
}: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <Button
      variant={variant}
      className={cn(
        "relative z-10 size-6 text-zinc-50 hover:bg-zinc-700 hover:text-zinc-50 [&_svg]:size-3",
        className
      )}
      onPress={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      {...props}
    >
      <span className="sr-only">Copy</span>
      {hasCopied ? <CheckIcon /> : <ClipboardIcon />}
    </Button>
  );
}
