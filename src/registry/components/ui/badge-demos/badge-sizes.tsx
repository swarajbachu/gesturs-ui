import { Badge } from "@/components/ui/badge";
import React from "react";

export default function BadgeDemo() {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Badge size="sm">size sm</Badge>
      <Badge>sime md(default)</Badge>
      <Badge size="lg">sime md(default)</Badge>
    </div>
  );
}
