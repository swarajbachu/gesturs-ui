"use client";

import GooeyFilter from "@/components/gesturs/gooey/gooey-filter";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = ["Home", "About", "Contact"];

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
          gap: morph === 0 || morph === 2 ? 0 : "1.5rem",
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
              className="cursor-pointer size-6 invert dark:invert-0"
            />
            <motion.h2
              className="text-sm font-bold text-muted"
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
        <Wrapper className={`${morph === 2 ? "mr-5" : ""}`}>
          <motion.div
            className={`relative items-center justify-center flex h-full gap-1 px-1 text-muted-foreground`}
            animate={{
              width: "fit-content",
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 15,
              duration: 0.5,
            }}
          >
            {links.map((link, index) => (
              <motion.a
                key={index}
                onClick={() => {
                  setMorph(1);
                  setCurrentLinkIndex(index + 1);
                }}
                animate={{
                  scale: currentLinkIndex === index + 1 ? 1.1 : 1,
                  width: morph === 2 ? 0 : "4rem",
                  opacity: morph === 2 ? 0 : 1,
                  display: morph === 2 ? "none" : "block",
                }}
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  duration: 0.5,
                }}
                className={`text-sm font-semibold text-center  cursor-pointer ${
                  currentLinkIndex === index + 1 ? "text-muted" : ""
                }`}
              >
                {link}
              </motion.a>
            ))}
            <motion.input
              type="text"
              className="bg-foreground text-muted-foreground rounded-md p-1 focus:outline-none"
              animate={{
                width: morph === 2 ? "100%" : "0",
                opacity: morph === 2 ? 1 : 0,
                display: morph === 2 ? "block" : "none",
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 15,
                duration: 0.5,
              }}
              placeholder="Search"
            />
          </motion.div>
        </Wrapper>
        <Wrapper>
          <motion.button
            className="flex h-full gap-2 p-1 mx-3 items-center text-sm font-semibold text-muted-foreground "
            onClick={() => setMorph(2)}
            animate={{
              width: "auto",
            }}
          >
            {morph !== 2 ? (
              <>
                <Image
                  src="/gesturs.svg"
                  alt="User"
                  width={50}
                  height={50}
                  className="cursor-pointer size-6 rounded-full p-1 bg-blue-100"
                />
                <span>FeedBack</span>
              </>
            ) : (
              <span>Send</span>
            )}
          </motion.button>
        </Wrapper>
      </motion.nav>
    </GooeyFilter>
  );
}

function Wrapper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center h-12 bg-foreground p-2",
        className
      )}
    >
      {children}
    </div>
  );
}
