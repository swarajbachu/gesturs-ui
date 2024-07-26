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
}

export interface LinkImageProps {
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
}: LinkImageProps) {
  const container = "absolute right-8 -top-1 z-40 h-20 w-16";
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover:shadow-xl scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full w-16 h-16 overflow-hidden transition-all rounded-md";

  return (
    <div className="group relative overflow-visible inline-flex">
      <Link href={url} className={className}>
        {children}
      </Link>
      <div className={container}>
        <div className={effect}>
          <Image
            alt={image.alt}
            src={image.src}
            width={image.width || 200}
            height={image.height || 200}
            className={cn("h-full w-full object-cover",image.className)}
          />
        </div>
      </div>
      {image2 && (
        <div
          className={cn(
            container,
            "translate-x-0 translate-y-0 rotate-0 transition-all delay-150 duration-500 group-hover:translate-x-6 group-hover:translate-y-6 group-hover:rotate-12"
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
