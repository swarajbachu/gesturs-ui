import { Badge } from "@/components/ui/badge";
import { BanIcon, DollarSign } from "lucide-react";
import React from "react";

export default function BadgeDemo() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Badge color="green" leftSection={<DollarSign />}>
        15
      </Badge>
      <Badge rightSection={<BanIcon />} color="red">
        Ban
      </Badge>
    </div>
  );
}
