import React from "react";

export default function LineSvg({className}: {className: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
    >
      <defs>
        <pattern id=":S1:" patternUnits="userSpaceOnUse" width="16" height="1">
          <line
            className="stroke-zinc-950 dark:stroke-white"
            x1="0"
            x2="16"
            y1="0.5"
            y2="0.5"
            stroke-dasharray="2 2"
            stroke-width="1.5"
            stroke-opacity="0.1"
            stroke-linejoin="round"
          ></line>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#:S1:)"></rect>
    </svg>
  );
}
