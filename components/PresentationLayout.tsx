"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function PresentationLayout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  // 子要素を配列化して操作
  const slides = React.Children.toArray(children);
  const [index, setIndex] = useState(0);
  const slide = slides[index] as React.ReactNode;

  const prev = () => setIndex((i) => Math.max(i - 1, 0));
  const next = () => setIndex((i) => Math.min(i + 1, slides.length - 1));

  return (
    <div className="w-full h-screen flex flex-col">
      <header className="flex justify-between items-center bg-gray-800 text-white px-6 py-3">
        <h1 className="text-lg font-bold">{title}</h1>
        <Badge variant="secondary" className="bg-gray-600 text-white">
          {index + 1} / {slides.length}
        </Badge>
      </header>

      <main className="flex-1 overflow-hidden">{slide}</main>

      <footer className="bg-gray-100 px-6 py-2 flex items-center justify-between">
        {/* タイトルは children 側で付けてもいいが、例として */}
        <span className="text-sm">{/* ここに目次など */}</span>
        <div className="flex gap-2">
          <button onClick={prev} disabled={index === 0} className="p-2 disabled:opacity-50">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            disabled={index === slides.length - 1}
            className="p-2 disabled:opacity-50"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}