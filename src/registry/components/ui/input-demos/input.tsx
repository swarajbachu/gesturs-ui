"use client";

import { TextField } from "@/components/ui/text-feild";
import React from "react";
import { FaExclamationCircle } from "react-icons/fa";

export default function InputDemo() {
  const [value, setValue] = React.useState("");
  return (
    <div>
      <TextField
        label="Name"
        placeholder="Enter your name"
        leftSection={<FaExclamationCircle />}
        size="md"
        description="This is a description"
        contextualHelp="This is a contextual help"
        rightSection={<span>👤</span>}
        value={value}
        onChange={(k) => setValue(k)}
      />
    </div>
  );
}
