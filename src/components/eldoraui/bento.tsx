"use client";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import { memo } from "react";

interface BentoCardProps {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic: React.ReactNode;
  fade?: ("top" | "bottom")[];
  fadeColor?: string;
}

export const BentoCard = memo<BentoCardProps>(function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  fadeColor = "white",
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-[28px]",
        // light styles - deeper layered shadows
        "bg-gray-100/80 border border-gray-100 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05),0_8px_24px_-4px_rgba(0,0,0,0.02)]",
        // dark styles
        "dark:bg-zinc-900 dark:border-white/10 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_-8px_rgba(0,0,0,0.5)]",
        // interactions
        "transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.1)]",
        className,
      )}
    >
      <div className="relative h-80 shrink-0">
        {graphic}
        {fade.includes("top") && (
          <div
            className="absolute inset-0 bg-gradient-to-b to-50% group-data-[dark]:from-zinc-950 group-data-[dark]:from-[-25%]"
            style={{
              backgroundImage: `linear-gradient(to bottom, ${fadeColor} 0%, transparent 50%)`
            }}
          />
        )}
        {fade.includes("bottom") && (
          <div
            className="absolute inset-0 bg-gradient-to-t to-50% group-data-[dark]:from-zinc-950 group-data-[dark]:from-[-25%]"
            style={{
              backgroundImage: `linear-gradient(to top, ${fadeColor} 0%, transparent 50%)`
            }}
          />
        )}
      </div>
      <div className="relative p-10">
        <h3 className="text-xl font-semibold tracking-tight text-zinc-950 group-data-[dark]:text-white dark:text-white">
          {eyebrow}
        </h3>
        <p className="mt-1 text-2xl/8 font-medium tracking-tight text-zinc-950 group-data-[dark]:text-white dark:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-zinc-600 group-data-[dark]:text-zinc-400 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
});