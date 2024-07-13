'use client';

import React from "react";
import { Breadcrumbs, Breadcrumb } from "@/components/ui/breadcrumbs";
import { usePathname } from "next/navigation";

export default function BreadCrumbsDemo() {
  const pathname = usePathname();

  const items = pathname.split("/").filter(Boolean);

  return (
    <Breadcrumbs>
      {items.map((item, i) => (
        <Breadcrumb key={item} href={`/${items.slice(0, i + 1).join("/")}`}>
          {item}
        </Breadcrumb>
      ))}
    </Breadcrumbs>
  );
}
