import React from "react";

export function parseChildren(
  children: any,
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
      ...getLanguageAndTitle((children as any).props?.className),
    };
  }

  if (typeof children === "object") {
    const result = getCodeFromChildrenArray(children);
    return result;
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

function getCodeFromChildrenArray(children: any) {
  let code = "";
  if (typeof children.props.children === "object") {
    // return getCodeFromChildrenArray(children.props.children);
    const lines = React.Children.toArray(children.props.children).map(
      (line: any) => {
        if (typeof line === "string") {
          return line;
        }
        if (typeof line === "object") {
          const result = getCodeFromChildrenArray(line);
          code += result.code;
        }
        return line;
      }
    );
    return {
      code: code,
      lang: "tsx",
    };
  }
  if (typeof children.props.children === "string") {
    return {
      code: children.props.children,
      ...getLanguageAndTitle(children.props.className),
    };
  } else {
    const files = React.Children.toArray(
      children.props?.children?.props?.children as any
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
    });
    return {
      code: code,
      lang: "tsx",
    };
  }
}
