import React from "react";
import { Breadcrumbs, Breadcrumb } from "@/components/ui/breadcrumbs";
import { ComponentIcon, HomeIcon } from "lucide-react";

export default function BreadCrumbsDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#" leftSection={<HomeIcon />}>
        Home
      </Breadcrumb>
      <Breadcrumb href="#" leftSection={<ComponentIcon />}>
        Components
      </Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
