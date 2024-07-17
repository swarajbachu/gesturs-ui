"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div>
      <TextField
        label="Website Url"
        placeholder="website url"
        type="url"
        value="https://example.com"
        isReadOnly
      />
    </div>
  );
}
