import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <Button href="/">
              <span>Go back</span>
            </Button>
            <Button variant="secondary" href="/">
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
