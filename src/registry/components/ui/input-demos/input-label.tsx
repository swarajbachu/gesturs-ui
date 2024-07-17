"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        label="Enter website url"
        placeholder="website url"
        leftSection={<span>https://</span>}
      />
      <TextField
        aria-label="Enter website url"
        placeholder="Enter website url"
        leftSection={<span>https://</span>}
      />
    </div>
  );
}
