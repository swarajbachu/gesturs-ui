import React from "react";
import GooeyFilter from "@/components/gesturs/gooey/gooey-filter";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function GooeyButtonDemo() {
  return (
    <GooeyFilter className="relative inline-block h-fit w-fit">
      <Button className="relative px-6 py-3 z-10 peer">Click me</Button>
      <span className="absolute bg-primary text-primary-foreground aspect-square h-full top-0 right-1 grid place-content-center rounded-md peer-hover:translate-x-[5rem] ease-in transition-all duration-500">
        <FaArrowRight />
      </span>
    </GooeyFilter>
  );
}
