/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils";
import { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import { tv, VariantProps } from "tailwind-variants";

const avatarVariants = tv({
  slots: {
    dot: "absolute min-w-[12px] min-h-[12px] rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center bg-green-500 text-white border-2 border-background",
    img: "inline-block object-cover object-center",
  },
  variants: {
    size: {
      sm: { img: "w-8 h-8" },
      md: { img: "w-12 h-12" },
      lg: { img: "w-16 h-16" },
    },
    shape: {
      square: { img: "rounded-md" },
      circle: { img: "rounded-full" },
    },
    border: {
      ring: { img: "border border-2 p-0.5" },
      solid: { img: "border border-2" },
    },
    dotPlacement: {
      none: { dot: "hidden" },
      "top-right": { dot: "top-0 right-0" },
      "bottom-right": { dot: "bottom-0 right-0" },
    },
  },
  compoundVariants: [
    {
      dotPlacement: "bottom-right",
      shape: "square",
      class: { dot: "translate-x-2/4 translate-y-2/4" },
    },
    {
      dotPlacement: "top-right",
      shape: "square",
      class: { dot: "translate-x-2/4 -translate-y-2/4" },
    },
  ],
  defaultVariants: {
    size: "md",
    shape: "circle",
    dotPlacement: "none",
  },
});

type AvatarProps = DetailedHTMLProps<
  ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> &
  VariantProps<typeof avatarVariants>;

function Avatar({
  border,
  size,
  shape,
  className,
  dotPlacement,
  alt,
  ...props
}: AvatarProps) {
  const { dot, img } = avatarVariants();
  return (
    <div className="relative inline-flex">
      <img
        className={cn(img({ size, shape, border }), className)}
        alt={alt}
        {...props}
      />
      <span className={cn(dot({ dotPlacement }))} />
    </div>
  );
}

export { Avatar };
