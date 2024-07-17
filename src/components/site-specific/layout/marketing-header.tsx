import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              className="rounded-full"
            />
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              Gesturs UI
            </h2>
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <Link
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="/docs"
          >
            Docs
          </Link>
          <button
            type="button"
            className="inline-flex text-zinc-300 outline-blue-500 hover:text-zinc-400 dark:text-zinc-500 dark:hover:text-zinc-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="size-5 dark:hidden"
            >
              <path
                fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="hidden size-5 text-zinc-300 hover:text-zinc-200 dark:inline"
            >
              <path
                fill-rule="evenodd"
                d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
