import { cn } from "@/lib/utils";
import { MainNav } from "./nav";
import { ModeToggle } from "./toggle";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export async function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center w-full justify-between">
        <MainNav />
        <div className="flex items-center gap-2">
          <Link
            className="text-sm/6 font-medium text-zinc-700 outline-blue-500 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
            href="https://github.com/swarajbachu/gesturs-ui"
          >
            <FaGithub className="text-xl" />
          </Link>
          <ModeToggle />
        </div>
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-zinc-900/10 via-zinc-900/30 to-zinc-900/10" />
    </header>
  );
}
