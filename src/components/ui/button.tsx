import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-black transition-all duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 active:translate-x-press active:translate-y-press active:shadow-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "border-comic bg-primary text-primary-foreground shadow-hard hover:shadow-hard-deep",
        destructive: "border-comic bg-destructive text-destructive-foreground shadow-hard hover:shadow-hard-deep",
        outline: "border-comic bg-background text-foreground shadow-hard hover:bg-accent hover:shadow-hard-deep",
        secondary: "border-comic bg-secondary text-secondary-foreground shadow-hard hover:shadow-hard-deep",
        ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        lab: "border-comic bg-pop-yellow text-ink shadow-hard hover:shadow-hard-deep",
        labSecondary: "border-comic bg-card-stock text-ink shadow-hard hover:bg-cyan hover:shadow-hard-deep",
        labCoral: "border-comic bg-coral text-ink shadow-hard hover:bg-pop-yellow hover:shadow-hard-deep",
        labIcon: "border-comic bg-card-stock text-ink shadow-hard hover:bg-lavender hover:shadow-hard-deep",
      },
      size: {
        default: "min-h-touch px-4 py-2",
        sm: "min-h-9 px-3 py-1.5 text-xs",
        lg: "min-h-12 px-8 py-3 text-base",
        icon: "size-10",
        touch: "min-h-touch px-4 py-2",
        iconTouch: "size-touch min-h-touch",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
