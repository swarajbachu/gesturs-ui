"use client";

import { TextField } from "@/components/ui/text-field";
import React from "react";

export default function InputDemo() {
  return (
    <div >
      <TextField
        label="Password"
        isInvalid
        errorMessage="your password must be 8 characters long"
        type="password"
      />
    </div>
  );
}
