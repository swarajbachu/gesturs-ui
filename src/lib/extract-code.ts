import React from "react";

type MdCodeText = {
  type: "code";
  props: {
    className?: string;
    children: MdCodeText[];
  };
};

type MdMultiCodeText = {
  type: Function;
  props: {
    children: MdCodeText;
  };
};

export type CodeText = string | MdCodeText | MdMultiCodeText;

export function parseChildren(
  children: CodeText,
  lang?: string,
  code?: string
): { lang: string; code: string; title?: string } {
  let codeString = "";
  if (typeof children === "string" || code) {
    return {
      code: (children as string) || code || "",
      lang: lang || "text",
    };
  }

  if (
    typeof children === "object" &&
    typeof children?.props?.children === "string"
  ) {
    return {
      code: children.props?.children,
      ...getLanguageAndTitle((children as MdCodeText).props?.className),
    };
  }

  if (typeof children === "object") {
    let code = "";
    const files = React.Children.toArray(
      (children.props.children as MdCodeText).props.children as any
    ).map((file: any) => {
      const code = file.props?.children;
      const className = file.props?.className;
      return {
        code: code as string,
        ...getLanguageAndTitle(className as string),
      };
    });
    files.forEach((file) => {
      code += file.code;
      codeString += file.code;
    });
    return {
      code: codeString,
      lang: lang || "tsx",
    };
  }

  return {
    code: (children as string) || code || "",
    lang: lang || "text",
  };
}

function getLanguageAndTitle(className: string | undefined) {
  if (!className) {
    return { lang: "text" };
  }
  const metastring = className.replace("language-", "");
  const lang = metastring.split(".").pop()!;

  if (lang !== metastring) {
    return { lang, title: metastring };
  }
  return { lang };
}
