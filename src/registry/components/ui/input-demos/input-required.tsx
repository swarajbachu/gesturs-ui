"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        label="Website Url (required)"
        placeholder="website url"
        type="url"
        isRequired
      />
      <TextField
        label="Website Url"
        placeholder="website url"
        type="url"
        isRequired
        withAsterisk
      />
    </div>
  );
}
