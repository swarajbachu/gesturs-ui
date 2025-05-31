import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <Button asChild>
              <Link href="/">
                <span>Go back</span>
              </Link>
            </Button>
            <Button variant="secondary" asChild>
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
