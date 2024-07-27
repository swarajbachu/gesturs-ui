"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

export interface DocsSidebarNavProps {
  items: SidebarNavItem[];
}

export function DocsSidebarNav({ items }: DocsSidebarNavProps) {
  const pathname = usePathname();

  return items.length ? (
    <ul className="w-full pb-20">
      {items.map((item, index) => (
        <li key={index} className={cn("pb-4 h-fit")}>
          <h4 className="mb-1 rounded-md py-1 text-base font-semibold text-foreground">
            {item.title}
            {item.label && <Badge className="mx-1 font-bold" color="sky">{item.label}</Badge>}
          </h4>
          {item?.items && (
            <DocsSidebarNavItems items={item.items} pathname={pathname} />
          )}
        </li>
      ))}
    </ul>
  ) : null;
}

interface DocsSidebarNavItemsProps {
  items: SidebarNavItem[];
  pathname: string | null;
}

export function DocsSidebarNavItems({
  items,
  pathname,
}: DocsSidebarNavItemsProps) {
  return items?.length ? (
    <ul
      role="list"
      className="grid grid-flow-row auto-rows-max text-sm border-l border-zinc-200 dark:border-zinc-800 space-y-1"
    >
      {items.map((item, index) => (
        <li key={item.title}>
          <Link
            href={item.href || "#"}
            className={cn(
              "relative group flex w-full items-center rounded-md border pl-4 border-transparent no-underline font-medium text-sm/6 space-x-4",
              item.disabled && "cursor-not-allowed opacity-60",
              pathname === item.href
                ? "text-foreground before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:before:bg-white"
                : "text-muted-foreground"
            )}
            target={item.external ? "_blank" : ""}
            rel={item.external ? "noreferrer" : ""}
          >
            <span className="shrink-0 hover:text-zinc-950 dark:hover:text-zinc-100 hover:ml-1 transition-all duration-200 ease-in-out">
              {item.title}
            </span>
            {item.label && (
              <span className="whitespace-nowrap rounded-lg bg-sky-400/20 px-2 text-xs/6 font-semibold text-sky-700 dark:bg-sky-400/20 dark:text-sky-300">
                {item.label}
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  ) : null;
}
