"use client";

import React from "react";
import { motion, MotionProps } from "framer-motion";

type FadeInProps = Omit<MotionProps, "animate"> & {
  children: React.ReactNode;
  initialY?: number;
  duration?: number;
  initialScale?: number;
  className?: string;
};

export default function FadeIn({
  className,
  children,
  initialY = -10,
  duration = 1,
  initialScale = 0.9,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY, scale: initialScale }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
