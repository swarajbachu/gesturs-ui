import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { baseMetaData, cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/site-specific/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = baseMetaData({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={cn(
            "relative flex min-h-screen w-full flex-col justify-center overflow-x-hidden scroll-smooth bg-background font-sans antialiased dark:bg-zinc-950",
            inter.className
          )}
        >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
