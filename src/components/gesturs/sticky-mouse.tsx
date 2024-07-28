'use client';

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";

interface StickyMouseProps {
  children: React.ReactNode;
  className?: string;
}

export default function StickyMouseWrapper({ children, className }: StickyMouseProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const amplificationFactor = 2; // Adjust this factor to extend the boundary
    const x = (clientX - (left + width / 2)) * amplificationFactor;
    const y = (clientY - (top + height / 2)) * amplificationFactor;
    setPosition({ x, y });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        mass: 0.5
      }}
      className={cn("relative", className)}
    >
      {children}
    </motion.div>
  );
}
