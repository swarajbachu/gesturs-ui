"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid">
      <TextField
        placeholder="website url"
        type="url"
        isDisabled
      />
    </div>
  );
}
