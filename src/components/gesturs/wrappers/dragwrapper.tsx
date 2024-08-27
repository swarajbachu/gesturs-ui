'use client';

import { motion, animate, MotionProps } from "framer-motion";
import React, { ReactNode } from "react";

interface DraggableWrapperProps extends MotionProps {
  children: ReactNode;
}

export default function DraggableWrapper({
  initial,
  children,
  ...props
}: DraggableWrapperProps) {
  return (
    <motion.div
      drag
      dragMomentum={false}
      initial={initial}
      animate={{
        ...animate,
        transition: {
          duration: 0.8,
          type: "spring",
          damping: 10,
          stiffness: 30,
        },
      }} // Combine animate with transition
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      whileDrag={{ scale: 0.9, className: "cursor-grabbing" }}
      whileHover={{ rotate: 2 }}
      className="absolute cursor-grab"
      {...props}
    >
      {children}
    </motion.div>
  );
}
