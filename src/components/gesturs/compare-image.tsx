"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface CompareImageProps {
  beforeImage: string;
  afterImage: string;
}

function CompareImage({ beforeImage, afterImage }: CompareImageProps) {
  const [clip, setClip] = useState(50); // Initial clip percentage
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      const newClip = ((e.clientX - left) / width) * 100;
      setClip(newClip);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="w-96 h-96 rounded-md overflow-hidden relative cursor-pointer"
    >
      <Image
        src={beforeImage}
        alt="Before"
        width={500}
        height={500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <Image
        src={afterImage}
        alt="After"
        style={{
          clipPath: `polygon(0 0, ${clip}% 0, ${clip}% 100%, 0% 100%)`,
        }}
        width={500}
        height={500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        style={{
          left: `${clip}%`,
          boxShadow: "-10px 0 20px 5px rgba(0, 0, 0, 0.9)",
        }}
        className="top-0 overflow-visible absolute bg-gradient-to-b from-zinc-800/10 via-zinc-800 to-zinc-800/10  pointer-events-none w-[2px] shadow-sm h-full"
        animate={{
          x: `${clip - 50}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-8 h-full top-1/2 -translate-y-1/2 absolute -left-10">
          <Sparkles />
        </div>{" "}
      </motion.div>
    </div>
  );
}

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();
  return (
    <div className="absolute inset-0">
      {[...Array(12)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-black dark:bg-white"
        ></motion.span>
      ))}
    </div>
  );
};

export default CompareImage;
