"use client";

import { Button } from "@/components/ui/button";
import { KeyIcon } from "lucide-react";
import React from "react";

export default function ButtonVariants() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Button isDisabled>Disabled</Button>
    </div>
  );
}
