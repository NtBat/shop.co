import { type VariantProps, tv } from "tailwind-variants";

type TitleProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements;
} & VariantProps<typeof title>; // Tipo das variantes

const title = tv({
  base: "text-4xl font-bold uppercase",
  variants: {
    color: {
      primary: "text-black",
      secondary: "text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export function Title({ text, color, size, as: Component = "h2" }: TitleProps) {
  return <Component className={title({ size, color })}>{text}</Component>;
}
