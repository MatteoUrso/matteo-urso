import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: "Uh oh! This page does not exist",
};

export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <p className="text-9xl font-sans font-bold md:text-[300px] mb-4">
        <span className="text-primary">4</span>
        <span className="text-secondary">0</span>
        <span className="text-primary">4</span>
      </p>
      <p className="text-3xl font-bold italic md:text-5xl font-mono mb-10">
        Page Not Found
      </p>
    </div>
  );
}
