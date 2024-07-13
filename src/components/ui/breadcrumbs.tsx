"use client";
import {
  Breadcrumbs as RACBreadcrumbs,
  Breadcrumb as RACBreadcrumb,
} from "react-aria-components";
import type {
  BreadcrumbsProps as RACBreadcrumbsProps,
  BreadcrumbProps as RACBreadcrumbProps,
  LinkProps as RACLinkProps,
} from "react-aria-components";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "./link";

type BreadcrumbsProps<T extends object> = RACBreadcrumbsProps<T>;

function Breadcrumbs<T extends object>({ ...props }: BreadcrumbsProps<T>) {
  return (
    <RACBreadcrumbs
      {...props}
      className={cn(
        "flex flex-wrap items-center mx-0 px-0 gap-2 break-words text-sm text-foreground-muted [&_svg]:size-4 ",
        props.className
      )}
    />
  );
}

type BreadcrumbProps = Omit<RACBreadcrumbProps, "children"> &
  RACLinkProps & {
    leftSection?: React.ReactNode;
    separator?: React.ReactNode;
  };

function Breadcrumb({
  leftSection,
  className,
  separator,
  ...props
}: BreadcrumbProps) {
  return (
    <RACBreadcrumb
      {...props}
      className={cn("flex items-center gap-1 group px-0", className)}
    >
      {leftSection}
      <Link
        variant="muted"
        className="no-underline capitalize font-semibold px-0 inline-flex items-center gap-1.5 hover:text-foreground transition-colors group-last-of-type:text-foreground"
        {...props}
      />
      {separator ? (
        separator
      ) : (
        <ChevronRightIcon className="w-3 h-3 text-gray-600 dark:text-zinc-400 group-last-of-type:hidden" />
      )}
    </RACBreadcrumb>
  );
}

export { type BreadcrumbsProps, type BreadcrumbProps, Breadcrumb, Breadcrumbs };
