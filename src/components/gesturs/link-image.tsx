import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ImageSource {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
}

export interface LinkImageProps {
  top?: string | number;
  right?: string | number;
  children: React.ReactNode;
  url: string;
  className?: string;
  image: ImageSource;
  image2?: ImageSource;
}

export default function LinkImage({
  children,
  image,
  image2,
  className,
  url,
  top,
  right,
}: LinkImageProps) {
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative overflow-visible inline-flex">
      <Link href={url} className={className}>
        {children}
      </Link>
      <div
        style={{
          top: top ? top : "-1rem",
          right: right ? right : "-1rem",
        }}
        className={cn(
          "absolute z-20 h-16 w-16",
          image.containerClassName
        )}
      >
        <div className={effect}>
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width || 200}
            height={image.height || 200}
            className={cn("h-full w-full object-cover", image.className)}
          />
        </div>
      </div>
      {image2 && (
        <div
          style={{
            top: top ? top : 0,
            right: right ? right : "-1rem",
          }}
          className={cn(
            "absolute translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12 h-16 w-16 z-30 ",
            image2.containerClassName
          )}
        >
          <div className={cn(effect, "duration-200")}>
            <Image
              alt={image2.alt}
              src={image2.src}
              width={image2.width || 200}
              height={image2.height || 200}
              className={cn("h-full w-full object-cover", image2.className)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
