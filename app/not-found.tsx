import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Uh oh! This page does not exist",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p className="text-9xl font-bold md:text-[300px] mb-4">404</p>
      <p className="text-3xl font-bold italic md:text-5xl mb-10">
        Page Not Found
      </p>
    </div>
  );
}
