"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField placeholder="sm" size="sm" />
      <TextField placeholder="md ( default )" />
      <TextField placeholder="lg" size="lg" />
      <TextField placeholder="xl" size="xl" />
    </div>
  );
}
