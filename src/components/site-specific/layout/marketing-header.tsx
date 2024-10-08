import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "./toggle";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa";

export default function MarketingHeader() {
  return (
    <div className="px-4 pb-5 pt-7 ring-1 ring-zinc-950/5 dark:ring-white/5">
      <div className="mx-auto flex items-center justify-between px-2 sm:px-4 lg:max-w-7xl">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link aria-label="Home" href="/" className="flex gap-2 items-center">
            <Image
              src="/gesturs.svg"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-full dark:invert "
            />
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              Gesturs UI
            </h2>
          </Link>
          <Badge color="sky">Beta</Badge>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="/docs"
          >
            Docs
          </Link>
          <Link
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="https://github.com/swarajbachu/gesturs-ui"
          >
            <FaGithub className="text-xl" />
          </Link>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
