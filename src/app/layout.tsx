import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { baseMetaData, cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/site-specific/layout/theme-provider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = baseMetaData({});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1"
      />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4341LJWJ4Z"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-4341LJWJ4Z');`}
      </Script>
      <ThemeProvider
        attribute="class"
        disableTransitionOnChange
        defaultTheme="dark"
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
