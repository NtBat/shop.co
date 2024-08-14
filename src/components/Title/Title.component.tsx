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
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export function Title({ text, color, as: Component = "h2" }: TitleProps) {
  return <Component className={title({ color })}>{text}</Component>;
}
