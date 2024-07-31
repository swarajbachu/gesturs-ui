"use client";

import React, { createContext, useContext } from "react";
import GooeyMenuFilter from "./gooey-filter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GooeyMenuProps = {
  children: React.ReactNode;
  direction?: "horizontal" | "vertical";
  className?: string;
};

type GooeyMenuContextType = {
  direction: "horizontal" | "vertical";
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
};

const GooeyMenuContext = createContext<GooeyMenuContextType | undefined>(
  undefined
);

export function useGooeyMenuContext() {
  const context = useContext(GooeyMenuContext);
  if (!context) {
    throw new Error(
      "useGooeyMenuContext must be used within a GooeyMenu provider"
    );
  }
  return context;
}

export function GooeyMenu({
  children,
  direction = "horizontal",
  className,
}: GooeyMenuProps) {
  const [isChecked, setIsChecked] = React.useState(false);
  return (
    <GooeyMenuContext.Provider value={{ direction, isChecked, setIsChecked }}>
      <nav
        aria-label="Gooey Menu"
        className={cn("relative w-[400px] h-[200px]", className)}
        style={{ filter: "url(#goo)" }}
      >
        <GooeyMenuFilter />
        {children}
      </nav>
    </GooeyMenuContext.Provider>
  );
}

export function GooeyMenuTrigger({ children }: { children: React.ReactNode }) {
  const { isChecked, setIsChecked } = useGooeyMenuContext();

  return (
    <>
      <input
        type="checkbox"
        className="peer hidden"
        name="menu"
        id="menu"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
        aria-label="Gooey Menu Trigger"
      />
      <label
        className="absolute top-1/2 left-1/2  z-10 flex h-14 w-14 scale-125 cursor-pointer items-center justify-center rounded-full bg-primary text-primary-foreground transition-all duration-1000  spring peer-checked:scale-100"
        htmlFor="menu"
      >
        {children}
      </label>
    </>
  );
}

export function GooeyMenuBefore({ children }: { children: React.ReactNode }) {
  const { direction, isChecked } = useGooeyMenuContext();
  const isHorizontal = direction === "horizontal";

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"
          key={index}
          animate={{
            x: isChecked && isHorizontal ? -80 * (index + 1) : 0,
            y: isChecked && !isHorizontal ? -80 * (index + 1) : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 0.5,
          }}
        >
          {child}
        </motion.button>
      ))}
    </>
  );
}

export function GooeyMenuAfter({ children }: { children: React.ReactNode }) {
  const { direction, isChecked } = useGooeyMenuContext();
  const isHorizontal = direction === "horizontal";

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <motion.button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-content-center h-14 w-14 rounded-full bg-primary text-primary-foreground"
          key={index}
          animate={{
            x: isChecked && isHorizontal ? 80 * (index + 1) : 0,
            y: isChecked && !isHorizontal ? 80 * (index + 1) : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            duration: 0.5,
          }}
        >
          {child}
        </motion.button>
      ))}
    </>
  );
}
