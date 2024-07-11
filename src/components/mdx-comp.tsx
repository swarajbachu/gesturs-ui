import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { ComponentPreview } from "./site-specific/docs/component-preview";
import * as React from "react";
import { CopyButton } from "./site-specific/docs/copy-button";
import { ComponentSource } from "./site-specific/docs/component-source";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  ComponentPreview,
  ComponentSource,
  Step: ({ className, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  Steps: ({ ...props }) => (
    <div
      className="[&>h3]:step steps mb-12 ml-4 border-l border-muted-foreground pl-8 [counter-reset:step]"
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    __bunCommand__,
    __withMeta__,
    __src__,
    // __style__,
    __name__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    // __style__?: Style["name"]
    __rawString__?: string;
    __npmCommand__?: string;
    __pnpmCommand__?: string;
    __yarnCommand__?: string;
    __bunCommand__?: string;
    __withMeta__?: boolean;
    __src__?: string;
    __name__?: string;
  }) => {
    return (
      <>
        <pre
          className={cn(
            "text-sm mb-4 mt-6 max-h-[650px] relative overflow-x-auto rounded-md border border-zinc-200 dark:border-zinc-700  bg-zinc-950 py-4 dark:bg-zinc-900",
            className
          )}
          {...props}
        />
        {__rawString__ && (
          <CopyButton
            value={__rawString__}
            src={__src__}
            // event={__event__}
            className={cn("absolute right-4 top-4", __withMeta__ && "top-16")}
          />
        )}
      </>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded-md bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm  border border-zinc-200 dark:border-zinc-700",
        className
      )}
      {...props}
    />
  ),
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
