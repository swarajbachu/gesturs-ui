import { Badge } from "@/components/ui/badge";
import { BanIcon, DollarSign } from "lucide-react";
import React from "react";

export default function BadgeDemo() {
  return (
    <div className="grid grid-cols-4 gap-2">
      <Badge color="primary">Primary</Badge>
      <Badge color="amber">Amber</Badge>
      <Badge color="emerald">Emerald</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="yellow">Yellow</Badge>
      <Badge color="gray">Gray</Badge>
      <Badge color="indigo">Indigo</Badge>
      <Badge color="pink">Pink</Badge>
      <Badge color="purple">Purple</Badge>
      <Badge color="teal">Teal</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="cyan">Cyan</Badge>
      <Badge color="sky">Sky Blue</Badge>
      <Badge color="lime">Lime</Badge>
      <Badge color="rose">Rose</Badge>
      <Badge color="fuchsia">Fuchsia</Badge>
      <Badge color="neutral">Neutral</Badge>
      <Badge color="slate">Slate</Badge>
      <Badge color="stone">Stone</Badge>
      <Badge color="zinc">Zinc</Badge>
      <Badge color="accent">Accent</Badge>
      <Badge color="destructive">Destructive</Badge>
    </div>
  );
}
