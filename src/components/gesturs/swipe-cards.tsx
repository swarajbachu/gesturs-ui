"use client";

import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface CardRotateProps {
  index: number;
  currentIndex: number;
  children: React.ReactNode;
  onSwipeRight: () => void;
  onSwipeLeft: () => void;
}

function SwipeCard({
  children,
  onSwipeRight,
  onSwipeLeft,
  index,
  currentIndex,
}: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useTransform(x, [-100, 100], [0.9, 1.1]);
  const rotateZ = useTransform(x, [-100, 100], [-20, 20]);

  function handleDragEnd(_: any, info: PanInfo) {
    const threshold = 180;
    if (info.offset.x > threshold) {
      onSwipeRight();
    } else if (info.offset.x < -threshold) {
      onSwipeLeft();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{
        x,
        y,
        scale,
        rotateZ,
        zIndex: -Math.abs(currentIndex - index) * 10,
      }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

export default function SwipeableStackCards() {
  const initialCards = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const swipeRight = (index: number) => {
    if (index !== currentCard) {
      setCurrentCard(index);
    }
    if (currentCard === initialCards.length - 1) return;
    setCurrentCard((prev) => prev + 1);
  };

  const swipeLeft = (index: number) => {
    if (index !== currentCard) {
      setCurrentCard(index);
    }
    if (currentCard === 0) return;
    setCurrentCard((prev) => prev - 1);
  };

  return (
    <div className="relative h-96 w-96" style={{ perspective: 600 }}>
      {initialCards.map((card, index) => {
        return (
          <SwipeCard
            key={card.id}
            onSwipeRight={() => swipeRight(index)}
            onSwipeLeft={() => swipeLeft(index)}
            index={index}
            currentIndex={currentCard}
          >
            <motion.div
              animate={{
                rotateZ: -(index - currentCard) * 2,
                rotateX: -Math.abs(index - currentCard) * 8,
                scale: 1 - Math.abs(index - currentCard) * 0.009,
                transformOrigin: "90% 90%",
                x: (currentCard - index) * 10,
                y: -Math.abs(index - currentCard) * 5,
              }}
              initial={false}
              transition={{ type: "spring", stiffness: 160, damping: 10 }}
            >
              <Card className="w-96 h-96">
                <CardContent className="grid place-content-center w-full h-full">
                  {index}
                </CardContent>
              </Card>
            </motion.div>
          </SwipeCard>
        );
      })}
    </div>
  );
}
