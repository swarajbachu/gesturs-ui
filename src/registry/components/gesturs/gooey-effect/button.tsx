"use client";

import React from "react";
import GooeyFilter from "@/components/gesturs/gooey/gooey-filter";
import { Button } from "@/components/ui/button";
import { XIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function GooeyButtonDemo() {
  const [clicked, setClicked] = React.useState(false);

  const handleDelete = () => {
    setClicked(true);
    if (clicked) {
      console.log("Deleted");
    }
  };

  return (
    <GooeyFilter className="relative inline-block h-fit w-fit">
      <motion.button
        className="relative w-36  h-14 z-10 bg-primary text-primary-foreground "
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        onClick={handleDelete}
      >
        {clicked ? "Confirm" : "Delete"}
      </motion.button>
      <motion.button
        className={`absolute bg-primary text-primary-foreground aspect-square -z-10 h-full top-0 right-1 grid place-content-center rounded-md`}
        animate={{ x: clicked ? 80 : 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          duration: 0.5,
        }}
        onClick={() => setClicked(false)}
      >
        <XIcon />
      </motion.button>
    </GooeyFilter>
  );
}
