import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { baseMetaData } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = baseMetaData({
  
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
