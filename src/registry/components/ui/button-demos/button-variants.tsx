"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export default function ButtonVariants() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Button>Primary</Button>
      <Button variant="secondary" border={false}>
        Secondary
      </Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  );
}
