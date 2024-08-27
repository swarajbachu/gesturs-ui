import { Button } from "@/components/ui/button";
import React from "react";

export default function GoToGrabby() {
  return (
    <div className="flex items-center justify-center flex-col gap-2">
      <h1 className="text-lg font-bold text-center">
        Visit the page to see the Hero Section
      </h1>
      <Button href="/sections/hero/grabby">Hero Section</Button>
    </div>
  );
}
