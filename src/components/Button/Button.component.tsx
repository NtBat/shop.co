import React from "react";
import { type VariantProps, tv } from "tailwind-variants";

type ButtonProps = {
  icon?: React.ReactNode;
} & VariantProps<typeof button> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const button = tv({
  base: "flex items-center justify-center text-sm rounded-full w-full gap-3 transition-transform duration-300 hover:scale-[0.95]",
  variants: {
    color: {
      primary: "bg-black text-white",
      secondary: "bg-white text-black",
      tertiary: "bg-gray-200 text-gray-700",
      outline: "border border-gray-200 text-black",
    },
    size: {
      sm: "h-12",
      md: "h-14",
      lg: "h-16",
    },
  },
  defaultVariants: {
    size: "sm",
    color: "primary",
  },
});

export function Button({ color, icon, size, children, ...props }: ButtonProps) {
  return (
    <button className={button({ size, color })} {...props}>
      {children}
      {icon ? icon : null}
    </button>
  );
}
