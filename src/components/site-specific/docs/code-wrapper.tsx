import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { CopyButton } from "./copy-button";

interface CodeBlockProps {
  files: {
    fileName: string;
    code: string;
    lang: BundledLanguage;
  }[];
  preview?: string;
  expandable?: boolean;
}

const CodeWrapper = async ({
  files: _files,
  preview: _preview,
  ...props
}: CodeBlockProps) => {
  let preview = undefined;
  if (_preview) {
    const html = await codeToHtml(_preview, {
      lang: "tsx",
      defaultColor: "dark",
      themes: {
        light: "github-light",
        dark: "aurora-x",
      },
    });
    preview = (
      <div
        className="code-block-preview dark:[&_pre]:bg-[#0d1117] dark:[&_span]:text-[#c9d1d9] light:[&_pre]:bg-[#ffffff] light:[&_span]:text-[#24292e]"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }

  const files = await Promise.all(
    _files.map(async ({ fileName, code, lang }) => {
      const html = await codeToHtml(code, {
        defaultColor: "dark",
        lang: lang,
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
      });

      return {
        fileName,
        codeStr: code,
        code: (
          <div className="relative">
            <div
              className=" overflow-scroll"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <CopyButton
              value={code}
              className="absolute z-10 right-4 top-1 size-8"
            />
          </div>
        ),
        lang,
      };
    })
  );

  return (
    <div {...props}>
      {preview}
      {files.map(({ fileName, code, codeStr, lang }) => (
        <div
          key={fileName}
          className="relative dark:bg-zinc-950 bg-zinc-950 dark:[&_span]:text-[#c9d1d9] light:[&_pre]:bg-[#ffffff] light:[&_span]:text-[#24292e] p-4 rounded-md"
        >
          {code}
        </div>
      ))}
    </div>
  );
};

export { CodeWrapper };
