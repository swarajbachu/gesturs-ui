import React from "react";
import { codeToHtml } from "shiki";
import prettier from "prettier";
import parserTypeScript from "prettier/parser-typescript";

export default async function CodeMultiline({
  code,
  className,
  highlightedLines,
}: {
  code: string;
  className?: string;
  highlightedLines?: number[];
}) {
  // Format the code using prettier
  let formattedCode;
  try {
    formattedCode = await prettier.format(code, {
      parser: "babel-ts",
      singleQuote: false,
      jsxSingleQuote: false,
      printWidth: 95,
      bracketSameLine: true,
    });
  } catch (e) {
    // If prettier fails, fallback to basic formatting
    formattedCode = code
      .replace(/;/g, ";\n")
      .replace(/import/g, "\nimport")
      .replace(/{/g, "{\n  ")
      .replace(/}/g, "\n}")
      .replace(/return/g, "\n  return")
      .trim();
  }

  const html = await codeToHtml(formattedCode, {
    lang: "tsx",
    defaultColor: "dark",
    decorations: highlightedLines?.map((line) => ({
      start: { line: line - 1, character: 0 },
      end: { line: line - 1, character: Number.MAX_SAFE_INTEGER },
      properties: { className: "highlight-line" },
    })),
    themes: {
      light: "github-light",
      dark: "aurora-x",
    },
  });

  return (
    <div className="bg-muted/20 not-prose dark:bg-zinc-900/80 shadow-md rounded-xl p-4">
      <div
        className="dark:[&_pre]:bg-[#0d1117] py-4 overflow-x-scroll dark:[&_span]:text-[#c9d1d9] light:[&_pre]:bg-[#ffffff] light:[&_span]:text-[#24292e] [&_pre]:whitespace-pre"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
