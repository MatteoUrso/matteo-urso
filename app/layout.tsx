import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";

// import { ClerkProvider } from "@clerk/nextjs";

import { ThemeProvider } from "@/components/theme-provider";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navigation from "@/components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://matteo-urso.com"),
  title: "Matteo Urso",
  // description:
  //   "Houston-based Software Engineer and a Content Creator, sharing insights on well-designed products and technology advancements.",
  // openGraph: {
  //   title: "Brian Ruiz",
  //   url: "https://b-r.io/",
  //   images: [{ url: "https://b-r.io/api/og?title=B-R.io", alt: "b-r.io" }],
  // },
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
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
