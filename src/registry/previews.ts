
// This file is autogenerated by scripts/build-preview-imports.ts
// Do not edit this file directly.
import React from "react";

export const previews = {
  "ui/button": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button")),
      code : [{"title":"button.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport React from \"react\";\n\nexport default function Demo() {\n  return <Button>Click me</Button>;\n}\n"}]
    },
    "ui/button-demos/button-variants": {
      component: React.lazy<React.FC>(() => import("@/registry/components/ui/button-demos/button-variants")),
      code : [{"title":"button-variants.tsx","code":"import { Button } from \"@/components/ui/button\";\nimport { KeyIcon } from \"lucide-react\";\nimport React from \"react\";\n\nexport default function ButtonVariants() {\n  return (\n    <div className=\"flex gap-2 items-center\">\n      <Button>Primary</Button>\n      <Button variant=\"secondary\">Secondary</Button>\n      <Button variant=\"destructive\">Destructive</Button>\n      <Button variant=\"icon\">\n        <KeyIcon />\n      </Button>\n    </div>\n  );\n}\n"}]
    },
  }