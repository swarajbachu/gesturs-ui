"use client";

import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import { CrossIcon, SearchIcon, XIcon } from "lucide-react";
import React from "react";

export default function InputDemo() {
  const [value, setValue] = React.useState("");
  return (
    <div className="grid grid-cols-2 gap-4">
      <TextField
        placeholder="website url"
        leftSection={<span>https://</span>}
      />
      <TextField
        placeholder="email"
        rightSection={<span>@gesturs.com</span>}
      />
      <TextField
        label="Search"
        placeholder="Search in the App"
        leftSection={<SearchIcon />}
      />
      <TextField
        label="Search"
        placeholder="Search in the App"
        value={value}
        rightSection={
          <Button variant="ghost" size="icon" onPress={() => setValue("")}>
            <XIcon />
          </Button>
        }
      />
    </div>
  );
}
