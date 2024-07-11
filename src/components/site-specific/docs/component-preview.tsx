"use client";

import * as React from "react";
import { RotateCcw } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabList, TabPanel,Tab } from "@/components/ui/tabs";
import ComponentWrapper from "./component-wrapper";
import { Icons } from "@/components/site-specific/icons";
import { ComponentName, registry } from "@/registry";

export interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  name: ComponentName;
  align?: "center" | "start" | "end";
  preview?: boolean;
}

export function ComponentPreview({
  name,
  children,
  className,
  align = "center",
  preview = false,
  ...props
}: ComponentPreviewProps) {
  const [key, setKey] = React.useState(0); // State to trigger re-render of preview
  const Codes = React.Children.toArray(children) as React.ReactElement[];
  const Code = Codes[0]; // first child
  console.log(React.Children.toArray(children),'code')

  const Preview = React.useMemo(() => {
    const Component = registry[name]?.component;
    if (!Component) {
      console.error(`Component with name "${name}" not found in registry.`);
      return (
        <p className="text-sm text-muted-foreground">
          Component{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
      );
    }

    return <Component />;
  }, [name, key]);

  return (
    <div
      className={cn(
        "relative my-4 flex flex-col space-y-2 lg:max-w-[120ch]",
        className,
      )}
      {...props}
    >
      <Tabs className="relative mr-auto w-full">
        {!preview && (
          <div className="flex items-center justify-between pb-3" defaultValue="preview">
            <TabList className="w-full justify-start rounded-none border-b bg-transparent p-0">
              <Tab
                id="preview"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Preview
              </Tab>
              <Tab
                id="code"
                className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
              >
                Code
              </Tab>
            </TabList>
          </div>
        )}
        <TabPanel id="preview" className="relative rounded-md" key={key}>
          <ComponentWrapper>
            <Button
              onPress={() => setKey((prev) => prev + 1)}
              className="absolute   right-0 top-0 z-10 ml-4 flex items-center rounded-lg px-3 py-1"
              variant="icon"
            >
              <RotateCcw size={16} />
            </Button>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <Icons.spinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              {Preview}
            </React.Suspense>
          </ComponentWrapper>
        </TabPanel>
        <TabPanel id="code">
          <div className="flex flex-col space-y-4">
            <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
              {Code}
            </div>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
