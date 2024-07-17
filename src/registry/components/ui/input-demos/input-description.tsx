"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        label="Website Url"
        placeholder="website url"
        type="url"
        description="Enter the website url of your portfolio"
        leftSection={<span>https://</span>}
      />
      <TextField
        label="Password"
        description="your password must be 8 characters long"
        descriptionPosition="bottom"
        type="password"
      />
    </div>
  );
}
