import React from "react";

type Props = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: Props) {
  return (
    <div className={className}>
      <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
        {text}
      </h1>
      <div className="w-40 h-2 bg-green-500 rounded-full" />
      <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2" />
    </div>
  );
}
