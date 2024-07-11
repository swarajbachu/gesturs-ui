import { cn } from "@/lib/utils";
import { MainNav } from "./nav";

export async function SiteHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/40 backdrop-blur-lg"
      )}
    >
      <div className="container flex h-16 items-center w-full">
        <MainNav />
      </div>
      <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-200/30 to-neutral-200/0" />
    </header>
  );
}
