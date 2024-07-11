"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();
  return (
    <section>
      <div className="container mx-auto flex min-h-[calc(100vh-8rem)] items-center px-6 py-12">
        <div className="mx-auto flex max-w-sm flex-col items-center text-center">
          <div className="group mt-6 flex w-full shrink-0 items-center gap-x-3 sm:w-auto">
            <Button onPress={() => router.back()}>
              <span>Go back</span>
            </Button>
            <Link
              href="/"
              className="text-primary-foreground px-6 font-medium bg-primary py-1.5 rounded-sm"
            >
              Take me home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
