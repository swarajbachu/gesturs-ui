import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

type TextProps = React.HTMLAttributes<HTMLParagraphElement>;

function Text({ ...props }: TextProps) {
  return (
    <p
      className={cn(
        "block font-sans text-base antialiased font-light leading-relaxed text-inherit"
      )}
      {...props}
    />
  );
}

const headingVariants = tv({
  base: "font-sans text-2xl font-semibold leading-relaxed text-inherit",
  variants: {
    h1: "text-4xl",
    h2: "text-3xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
  },
});

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement>;

function Heading({ ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "block font-sans text-2xl font-semibold leading-relaxed text-inherit"
      )}
      {...props}
    />
  );
}

export { Text };
