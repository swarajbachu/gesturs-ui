
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import React from "react";

export const previews = {
  "ui/button": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button")),
      code : [{"title":"button.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport React from \"react\";\n\nexport default function ButtonDemo() {\n  return <Button>Click me</Button>;\n}\n"}]
    },
  }