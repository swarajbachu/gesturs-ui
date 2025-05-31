import * as React from "react";
import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import CodePre from "./code-pre";

interface PackageManagerTabsProps {
  npmCommand?: string;
  pnpmCommand?: string;
  yarnCommand?: string;
  bunCommand?: string;
  className?: string;
}

export function PackageManagerTabs({
  npmCommand,
  pnpmCommand,
  yarnCommand,
  bunCommand,
  className,
}: PackageManagerTabsProps) {
  const commands = {
    npm: npmCommand,
    pnpm: pnpmCommand,
    yarn: yarnCommand,
    bun: bunCommand,
  };

  return (
    <div
      className={cn(
        "relative mt-4 w-full border rounded-xl bg-muted/20 dark:bg-zinc-900/80 shadow-md",
        className
      )}
    >
      <Tabs
        defaultValue="pnpm"
        // onValueChange={handleValueChange}
        className="relative"
      >
        <TabsList className="flex items-center justify-start rounded-none border-b bg-transparent p-0 px-4 pt-3">
          {Object.entries(commands).map(([pm, cmd]) => (
            <TabsTrigger
              key={pm}
              value={pm}
              disabled={!cmd}
              className={cn(
                "relative px-3  text-sm font-medium transition-colors mb-1",
                "data-[state=active]:text-primary data-[state=active]:bg-transparent data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:h-[1px] data-[state=active]:after:w-full data-[state=active]:after:bg-primary",
                "data-[state=inactive]:text-muted-foreground",
                "disabled:opacity-50 disabled:cursor-not-allowed"
              )}
            >
              {pm}
            </TabsTrigger>
          ))}
          {/* <CopyButton value={currentCommand.current} className=" h-7 w-7" /> */}
        </TabsList>
        <div className="relative px-6">
          {Object.entries(commands).map(([pm, cmd]) => (
            <TabsContent
              key={pm}
              value={pm}
              className="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-0"
            >
              {cmd ? (
                <CodePre code={cmd} className="rounded-md overflow-hidden" />
              ) : (
                <pre className="text-sm p-4 bg-muted/30 rounded-md"></pre>
              )}
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
}
