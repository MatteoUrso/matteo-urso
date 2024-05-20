import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={`width-full antialiase`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
