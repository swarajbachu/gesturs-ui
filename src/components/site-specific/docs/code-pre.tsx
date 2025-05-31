import React from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

export default async function CodePre({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const html = await codeToHtml(code, {
    lang: "tsx",
    defaultColor: "dark",
    themes: {
      light: "github-light",
      dark: "aurora-x",
    },
  });
  return (
    <div
      className="dark:[&_pre]:bg-[#0d1117] py-4 overflow-x-scroll dark:[&_span]:text-[#c9d1d9] light:[&_pre]:bg-[#ffffff] light:[&_span]:text-[#24292e]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
