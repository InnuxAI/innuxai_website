import React from "react";
import { cn } from "../../lib/utils";
import { ComponentPropsWithoutRef } from "react";

export interface AnimatedGradientTextProps
  extends ComponentPropsWithoutRef<"div"> {
  speed?: number;
  colorFrom?: string;
  colorTo?: string;
}
// background: "radial-gradient(circle at top left, rgba(255, 255, 209, 1.0) 0.000%, rgba(255, 224, 126, 1.0) 16.667%, rgba(255, 83, 30, 1.0) 33.333%, rgba(115, 0, 0, 1.0) 50.000%, rgba(0, 0, 0, 1.0) 66.667%, rgba(0, 45, 47, 1.0) 83.333%, rgba(11, 188, 145, 0.5) 100.000%)"
const AnimatedGradientTextComponent = ({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}: AnimatedGradientTextProps) => {
  return (
    <span
      style={
        {
          "--bg-size": `${speed * 300}%`,
          "--color-from": colorFrom,
          "--color-to": colorTo,
        } as React.CSSProperties
      }
      className={cn(
        `inline animate-gradient bg-gradient-to-r from-[var(--color-from)] via-[var(--color-to)] to-[var(--color-from)] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
        className,
      )}
      {...props}
    >
      {children}
    </span>

  );
}

export const AnimatedGradientText = React.memo(AnimatedGradientTextComponent);

