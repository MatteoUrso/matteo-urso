import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matteo-urso.vercel.app/"),

  title: {
    template: "%s | Matteo Urso",
    default: "Matteo Urso",
  },
  authors: {
    name: "Matteo Urso",
  },

  description:
    "I am a Web Developer and Mobile Developer who loves to create beautiful and functional applications.",
  openGraph: {
    title: "Matteo Urso",
    description:
      "I am a Web Developer and Mobile Developer who loves to create beautiful and functional applications.",
    url: "https://matteo-urso.vercel.app/",
    siteName: "Matteo Urso",
    images: "/images/og.png",
    type: "website",
  },
  keywords: ["Matteo Urso", "Web Developer", "Mobile Developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
