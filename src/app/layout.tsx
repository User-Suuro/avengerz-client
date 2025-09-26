import "@/styles/globals.css";

import { ThemeProvider } from "./_components/theme-provider";
import { Toaster } from "@/components/shadcn/ui/sonner";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import favicon from "@/assets/favicon.ico";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Avengerz",
  icons: {
    icon: favicon.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} [scrollbar-gutter:stable] scroll-smooth`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
