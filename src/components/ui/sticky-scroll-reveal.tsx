"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const backgroundColors = [
  "bg-black dark:bg-white", // slate-900
  "bg-[#1c1c1c] dark:bg-[#1c1c1c]", // black
  "bg-[#171717] dark:bg-[#171717]", // neutral-900
];
const linearGradients = [
  "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
  "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
  "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
];

export const StickyScroll = ({
  content,
  contentClassName,
  className,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
  className?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  const cardsBreakpoints = React.useMemo(
    () => content.map((_, index) => index / cardLength),
    [content, cardLength]
  );

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className={cn(
        "relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 gap-20",
        className
      )}
      style={{
        background: "transparent",

      }}
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold dark:text-white text-gray-900"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm dark:text-gray-400 text-gray-600"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "aspect-[16/10] sticky top-10 hidden overflow-hidden rounded-md lg:block inline-block max-h-full",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
