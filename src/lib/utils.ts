import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "#site/content";
import { Metadata } from "next/types";
import { env } from "@/app/env";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function sortPosts(posts: Array<Post>) {
  return posts.sort((a, b) => {
    if (a.date > b.date) return -1;
    if (a.date < b.date) return 1;
    return 0;
  });
}

export function baseUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function baseMetaData({
  title = "Gesturs UI - Modern UI components built on top of react-aria",
  description = "Accessible UI components and templates to make your landing page look stunning.",
  image = baseUrl("/api/og"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Gesturs UI",
      "React Aria",
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Landing Page",
      "Components",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@swarajbachu",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://ui.gesturs.com"),
    authors: [
      {
        name: "Swaraj Bachu",
        url: "https://x.com/swarajbachu",
      },
    ],
    creator: "Swaraj Bachu",
    ...props,
  };
}

