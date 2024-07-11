"use client";
import {
  Breadcrumbs as AriaBreadcrumbs,
  Breadcrumb as AriaBreadcrumb,
} from "react-aria-components";
import type {
  BreadcrumbsProps as AriaBreadcrumbsProps,
  BreadcrumbProps as AriaBreadcrumbProps,
  LinkProps as AriaLinkProps,
} from "react-aria-components";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "./link";

type BreadcrumbsProps<T extends object> = AriaBreadcrumbsProps<T>;

function Breadcrumbs<T extends object>({ ...props }: BreadcrumbsProps<T>) {
  return (
    <AriaBreadcrumbs
      {...props}
      className={cn(
        "flex flex-wrap items-center mx-0 px-0 gap-2 break-words text-sm text-foreground-muted [&_svg]:size-4 ",
        props.className
      )}
    />
  );
}

type BreadcrumbProps = Omit<AriaBreadcrumbProps, "children"> &
  AriaLinkProps & { iconLeft?: React.ReactNode; iconRight?: React.ReactNode };

function Breadcrumb({
  iconLeft,
  className,
  iconRight,
  ...props
}: BreadcrumbProps) {
  return (
    <AriaBreadcrumb
      {...props}
      className={cn("flex items-center gap-1 group px-0", className)}
    >
      {iconLeft}
      <Link
        variant="muted"
        className="no-underline font-semibold px-0 inline-flex items-center gap-1.5 hover:text-foreground transition-colors group-last-of-type:text-foreground"
        {...props}
      />
      {iconRight ? (
        iconRight
      ) : (
        <ChevronRightIcon className="w-3 h-3 text-gray-600 dark:text-zinc-400 group-last-of-type:hidden" />
      )}
    </AriaBreadcrumb>
  );
}

export { type BreadcrumbsProps, type BreadcrumbProps, Breadcrumb, Breadcrumbs };
