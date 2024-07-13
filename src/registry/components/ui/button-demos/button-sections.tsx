"use client";

import { Button } from "@/components/ui/button";
import { KeyIcon } from "lucide-react";
import React from "react";

export default function ButtonVariants() {
  return (
    <div className="flex gap-2 items-center flex-wrap">
      <Button rightSection={<KeyIcon />}>Open Lock</Button>
      <Button leftSection={<KeyIcon />}>Open Lock</Button>
    </div>
  );
}
