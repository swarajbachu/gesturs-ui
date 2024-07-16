import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { CopyButton } from "./copy-button";
import { Tab, TabList, TabPanel, Tabs } from "@/components/ui/tabs";

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
          <div
            className=" overflow-scroll"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ),
        lang,
      };
    })
  );
  let currentCodeString = "";
  return (
    <div {...props}>
      {preview}
      <Tabs className="rounded-md bg-zinc-950 p-2 relative">
        <TabList className="flex justify-between">
          {files.map(({ fileName, codeStr }) => {
            currentCodeString = codeStr;

            return (
              <Tab
                key={fileName}
                id={fileName}
                className="relative h-9 justify-between rounded-sm border-b-2 border-b-transparent bg-transparent px-4  font-semibold text-foreground flex items-center  shadow-none transition-none data-[selected]:!bg-sky-100 data-[state=active]:shadow-none"
              >
                {fileName}
              </Tab>
            );
          })}
        </TabList>
        <CopyButton
          value={currentCodeString}
          className="z-10 absolute right-3 top-2"
        />
        {files.map(({ fileName, code }) => (
          <TabPanel
            id={fileName}
            key={fileName}
            className="relative  bg-[#202125] dark:[&_span]:text-[#c9d1d9] [&_pre]:bg-transparent light:[&_span]:text-[#24292e] p-4 rounded-md"
          >
            {code}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export { CodeWrapper };
