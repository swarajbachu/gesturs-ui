import * as React from "react";

import { Registry } from "@/registry/schema";

const ui: Registry = {
  button: {
    name: "button",
    dependencies: [],
    registryDependencies: [],
    files: ["src/registry/components/basicui/button.tsx"],
    type: "components:ui",
    // component: React.lazy(() => import("@/registry/components/basicui/button")),
  },
};

const example: Registry = {};
export const registry: Registry = {
  ...ui,
  ...example,
};

const resolvedExamples = Object.entries(example).map(([key, value]) => ({
  ...value,
  component: () => void 0,
}));
const updatedExample: Registry = resolvedExamples.reduce(
  (acc, curr) => ({ ...acc, [curr.name]: curr }),
  {}
);
export const downloadRegistry: Registry = { ...ui, ...updatedExample };

export type ComponentName = keyof (typeof ui & typeof example);
