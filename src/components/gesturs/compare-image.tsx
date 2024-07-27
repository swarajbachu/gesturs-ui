"use client";

import Image, { ImageProps } from "next/image";
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompareImageProps {
  beforeImage: ImageProps;
  afterImage: ImageProps;
  delimiterClassName?: string;
  initialPosition?: number;
}

function CompareImage({
  beforeImage,
  afterImage,
  initialPosition = 50,
  delimiterClassName,
}: CompareImageProps) {
  const [clip, setClip] = useState(initialPosition); // Initial clip percentage
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
      className="w-96 h-96 rounded-md overflow-hidden relative cursor-pointer shadow-sm"
    >
      <Image
        {...beforeImage}
        src={beforeImage.src}
        alt="Before"
        width={beforeImage.width ?? 500}
        height={beforeImage.height ?? 500}
        className={cn(
          "absolute top-0 left-0 w-full h-full object-cover",
          beforeImage.className
        )}
      />
      <Image
        {...afterImage}
        src={afterImage.src}
        alt="After"
        style={{
          clipPath: `polygon(0 0, ${clip}% 0, ${clip}% 100%, 0% 100%)`,
        }}
        width={afterImage.width ?? 500}
        height={afterImage.height ?? 500}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <motion.div
        style={{
          left: `${clip}%`,
          boxShadow: "-1px 0 20px 5px rgba(135, 206, 235, 0.9)",
        }}
        className={cn(
          "top-0 overflow-visible absolute   pointer-events-none  h-full",
          delimiterClassName
        )}
        animate={{
          x: `${clip - 50}%`,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-5 h-full top-1/2 -translate-y-1/2 absolute -left-6">
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
      {[...Array(25)].map((_, i) => (
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
