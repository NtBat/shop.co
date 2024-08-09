type TitleProps = {
  title: string;
  variant?: "primary" | "secondary";
  as?: keyof JSX.IntrinsicElements;
};

export function Title({
  title,
  variant = "primary",
  as: Component = "h2",
}: TitleProps) {
  return (
    <Component
      className={`text-4xl font-bold uppercase ${variant == "primary" ? "text-black" : "text-white"}`}>
      {title}
    </Component>
  );
}
