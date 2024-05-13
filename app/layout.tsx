import type { Metadata } from "next";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";

import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import { Navigation } from "@/components/navigation";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

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
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body
          className={`width-full bg-white text-primary antialiased dark:bg-black`}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              <main>{children}</main>
            </div>
          </ThemeProvider>
          <Analytics />
        </body>
      </html>
    </ClerkProvider>
  );
}
