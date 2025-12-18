import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType<{ className?: string }>;
  description: string;
  href: string;
  cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {

  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-3 gap-6",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-2xl",
      // light styles - deeper layered shadows for "lifted" feel
      "bg-gray-50/50 border border-gray-200 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05),0_8px_24px_-4px_rgba(0,0,0,0.02)]",
      // dark styles - grayscale neutral-900 to separate from black page
      "dark:bg-neutral-900 dark:border-white/10 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_8px_32px_-8px_rgba(0,0,0,0.5)]",
      "transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-[0_8px_32px_-4px_rgba(255,255,255,0.05)] dark:hover:bg-neutral-800",
      className,
    )}
    {...props}
  >
    <div className="h-full w-full">{background}</div>
    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-col gap-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        "bg-white/95 dark:bg-black/95 backdrop-blur-md border-t border-gray-100 dark:border-white/5"
      )}
    >
      <div className="flex items-center gap-3">
        <Icon className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
        <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100">
          {name}
        </h3>
      </div>
      <p className="max-w-lg text-neutral-500 dark:text-neutral-400 text-xs leading-relaxed">
        {description}
      </p>
    </div>

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
