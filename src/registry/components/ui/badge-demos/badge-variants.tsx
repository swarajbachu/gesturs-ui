import { Badge } from "@/components/ui/badge";
import React from "react";

export default function BadgeDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Badge>documentation</Badge>
      <Badge variant="filled">documentation</Badge>
    </div>
  );
}
