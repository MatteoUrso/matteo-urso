import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Analytics } from "@vercel/analytics/react";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

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
      <html lang="en">
        <body className="width-full bg-white text-primary antialiased dark:bg-black">
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
