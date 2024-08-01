"use client";

import GooeyFilter from "@/components/gesturs/gooey/gooey-filter";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const [morph, setMorph] = React.useState(0);
  console.log(morph);
  const [currentLinkIndex, setCurrentLinkIndex] = React.useState<number | null>(
    null
  );

  return (
    <GooeyFilter>
      <motion.nav
        className="flex items-center rounded-full justify-between"
        animate={{
          gap: morph === 0 ? 0 : "1.5rem",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 15,
          duration: 0.5,
        }}
      >
        <Wrapper>
          <motion.div
            className="flex gap-1 h-full items-center px-3"
            onClick={() => setMorph(0)}
          >
            <Image
              src="/gesturs.svg"
              alt="Logo"
              width={50}
              height={50}
              className="cursor-pointer size-6"
            />
            <motion.h2
              className="text-sm font-bold text-gray-600"
              initial={{
                x: morph === 0 ? "-100%" : 0,
                opacity: morph === 0 ? 0 : 1,
              }}
              animate={{
                x: morph === 0 ? 0 : "-100%",
                opacity: morph === 0 ? 1 : 0,
                width: morph === 0 ? "auto" : 0,
              }}
              transition={{
                type: "ease",
                duration: 0.5,
              }}
            >
              GestursUI
            </motion.h2>
          </motion.div>
        </Wrapper>
        <Wrapper>
          <div className="relative items-center justify-center flex h-full gap-1 px-1 text-black ">
            <a
              onClick={() => {
                setMorph(1);
                setCurrentLinkIndex(1);
              }}
              className="text-sm font-semibold text-center w-16 cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => {
                setMorph(1);
                setCurrentLinkIndex(2);
              }}
              className="text-sm font-semibold cursor-pointer text-center w-16"
            >
              About
            </a>
            <a
              onClick={() => {
                setMorph(1);
                setCurrentLinkIndex(3);
              }}
              className="text-sm font-semibold cursor-pointer text-center w-16"
            >
              Contact
            </a>
            <motion.span
              className="absolute size-1 bottom-0 rounded-full bg-black"
              animate={{
                left: currentLinkIndex
                  ? `calc(${(currentLinkIndex / 3) * 100}% - 40px)`
                  : 0,
                display: currentLinkIndex ? "block" : "none",
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 15,
              }}
            />
          </div>
        </Wrapper>
        <Wrapper>
          <motion.div className="flex h-full gap-1 p-1 mx-3">
            <Image
              src="/gesturs.svg"
              alt="User"
              width={50}
              height={50}
              className="cursor-pointer size-6 rounded-full p-1 bg-blue-300"
            />
            <motion.button
              className="text-sm text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Let&apos;s Chat
            </motion.button>
          </motion.div>
        </Wrapper>
      </motion.nav>
    </GooeyFilter>
  );
}

function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center h-12 bg-white p-2">
      {children}
    </div>
  );
}
