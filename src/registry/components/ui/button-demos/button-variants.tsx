import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonVariants() {
  return (
    <div className="flex gap-2 items-center">
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="icon">Icon</Button>
    </div>
  );
}
