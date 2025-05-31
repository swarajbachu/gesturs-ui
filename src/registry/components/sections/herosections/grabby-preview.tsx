import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function GoToGrabby() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <h1 className="text-lg font-bold text-center">
        Visit the page to see the Hero Section
      </h1>
      <Button asChild>
        <Link href="/sections/hero/grabby">Hero Section</Link>
      </Button>
    </div>
  );
}
