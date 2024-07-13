import React from "react";
import { Breadcrumbs, Breadcrumb } from "@/components/ui/breadcrumbs";

export default function BreadCrumbsDemo() {
  return (
    <Breadcrumbs>
      <Breadcrumb href="#">Home</Breadcrumb>
      <Breadcrumb href="#">Components</Breadcrumb>
      <Breadcrumb href="#">Breadcrumbs</Breadcrumb>
    </Breadcrumbs>
  );
}
