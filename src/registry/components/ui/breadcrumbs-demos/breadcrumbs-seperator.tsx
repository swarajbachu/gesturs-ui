import React from "react";
import { Breadcrumbs, Breadcrumb } from "@/components/ui/breadcrumbs";
import { ArrowRight, ComponentIcon, HomeIcon } from "lucide-react";

export default function BreadCrumbsDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#" separator={<ArrowRight />}>
        Home
      </Breadcrumb>
      <Breadcrumb href="#" separator={<ArrowRight />}>
        Components
      </Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
