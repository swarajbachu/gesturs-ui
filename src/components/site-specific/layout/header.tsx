import { cn } from "@/lib/utils";
import { MainNav } from "./nav";
import { ModeToggle } from "./toggle";

export async function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center w-full justify-between">
        <MainNav />
        <ModeToggle />
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-zinc-900/10 via-zinc-900/30 to-zinc-900/10" />
    </header>
  );
}
