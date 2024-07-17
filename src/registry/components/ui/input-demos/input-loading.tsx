"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        placeholder="loaderPosition 'right'(default)"
        type="url"
        isLoading
      />
      <TextField
        placeholder="loader position 'left'"
        type="url"
        isLoading
        loaderPosition="left"
      />
    </div>
  );
}
