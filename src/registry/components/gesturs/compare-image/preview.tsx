import CompareImage from "@/components/gesturs/compare-image";
import React from "react";

export default function CompareImageDemo() {
  return (
    <div>
      <CompareImage
        beforeImage={{
          src: "/components/compare/1.jpg",
          alt: "Before Image",
        }}
        afterImage={{
          src: "/components/compare/2.jpg",
          alt: "After Image",
        }}
      />
    </div>
  );
}
