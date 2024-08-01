"use client";

import GooeyFilter from "@/components/gesturs/gooey/gooey-filter";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function Navbar() {
  const [morph, setMorph] = React.useState(0);
  console.log(morph);

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
          <motion.div className="flex h-full gap-4 px-1 text-black ">
            <motion.button
              className="text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMorph(1)}
            >
              Home
            </motion.button>
            <motion.button
              className="text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.button>
            <motion.button
              className="text-sm font-semibold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact
            </motion.button>
          </motion.div>
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
