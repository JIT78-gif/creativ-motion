import { Button } from "./button";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "./button";

export const HeroButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "gradient-primary text-lg px-8 py-6 rounded-xl font-semibold",
          "hover:shadow-glow-sm hover:scale-105 transition-all duration-300",
          "animate-pulse-glow",
          className
        )}
        {...props}
      />
    );
  }
);
HeroButton.displayName = "HeroButton";

export const GlassButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-card/50 backdrop-blur-glass border border-primary/20",
          "hover:bg-card/70 hover:border-primary/40 transition-all duration-300",
          className
        )}
        {...props}
      />
    );
  }
);
GlassButton.displayName = "GlassButton";
