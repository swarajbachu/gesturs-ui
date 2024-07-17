import { Description, Label } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { TextFieldRoot } from "@/components/ui/text-field";
import React from "react";

export default function InputComposition() {
  return (
    <div>
      <TextFieldRoot>
        <Label>Website Url</Label>
        <Description>Enter the website url</Description>
        <Input placeholder="website url" type="url" />
      </TextFieldRoot>
    </div>
  );
}
