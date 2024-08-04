import React from "react";

interface GooeyFilterProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function GooeyFilter({ children, ...props }: GooeyFilterProps) {
  return (
    <div
      {...props}
      style={{
        filter: "url(#goo)",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        style={{ display: "none" }}
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      {children}
    </div>
  );
}
