import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { ComponentPreview } from "./site-specific/docs/component-preview";
import * as React from "react";
import { ComponentSource } from "./site-specific/docs/component-source";
import { CopyButton } from "./site-specific/docs/copy-button";
import { parseChildren } from "@/lib/extract-code";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  ComponentPreview,
  ComponentSource,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn(
        "font-heading mt-2 scroll-m-20 text-3xl font-bold text-foreground",
        className
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn(
        "mt-12 text-foreground scroll-m-20 border-b dark:border-zinc-800 border-zinc-200 pb-2 text-2xl font-black first:mt-0",
        className
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className={cn(
        "font-heading mt-8  text-foreground scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className={cn(
        "font-heading text-foreground mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20  text-foreground text-lg font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base   text-foreground font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn(
        "font-semibold no-underline  text-foreground hover:!no-underline",
        className
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className={cn(
        "leading-7  text-foreground [&:not(:first-child)]:mt-6",
        className
      )}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className={cn("my-6  text-foreground ml-6 list-disc", className)}
      {...props}
    />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className={cn("mt-6  text-foreground border-l-2 pl-6 italic", className)}
      {...props}
    />
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto rounded-md  border-collapse text-base text-foreground/90">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn(
        "m-0  p-0  even:bg-zinc-50 dark:even:bg-muted  odd:bg-zinc-200 dark:odd:bg-zinc-950  group",
        className
      )}
      {...props}
    >
      {props.children}
    </tr>
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th
      className={cn(
        "first:rounded-tl-md  last:rounded-tr-md  border-r last:border-none dark:border-zinc-700 border-zinc-200 bg-accent px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td
      className={cn(
        " px-4 py-2 text-left [&[align=center]]:text-center border-r group-last:last:rounded-br-md group-last:first:rounded-bl-md last:border-none [&[align=right]]:text-right dark:border-zinc-700 border-zinc-200",
        className
      )}
      {...props}
    />
  ),
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
    const value = parseChildren(props.children);
    return (
      <div className="relative">
        <pre
          className={cn(
            "mb-4 mt-6 max-h-[650px] overflow-x-auto rounded-lg border border-muted py-3 bg-zinc-950 text-zinc-100 dark:bg-zinc-800  ",
            className
          )}
          {...props}
        />
        <CopyButton
          value={value.code}
          src={__src__}
          className={cn(
            "absolute right-4 top-3 size-8",
            __withMeta__ && "top-16"
          )}
        />
      </div>
    );
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn(
        "relative rounded dark:bg-transparent  px-[0.3rem] py-[0.2rem] font-mono text-sm bg-zinc-800/10  dark:bg-zinc-800",
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
