'use client';

import { docsConfig } from "@/lib/docs";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";


export function MainNav() {
    const pathname = usePathname();
  
    return (
      <div className="mr-4 hidden md:flex">
        <Link href="/" className="relative mr-6 flex items-center space-x-2">
          <span className="hidden font-bold md:inline-block">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden items-center space-x-6 text-sm font-medium xl:flex">
          {docsConfig.mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href!}
              target={item.external ? "_blank" : undefined}
              className={cn(
                "flex items-center justify-center transition-colors hover:text-foreground/80",
                pathname?.startsWith(item.href!)
                  ? "text-foreground"
                  : "text-foreground/60",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    );
  }