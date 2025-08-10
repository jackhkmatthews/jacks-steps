"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Button } from "./button";
import { Content } from "./content";
import { LikeButton } from "./like-button";
import clsx from "clsx";

export function Carousel({
  title,
  slides,
  ...rest
}: {
  title: string;
  slides: { content: string; author: string; likes: number }[];
} & ComponentPropsWithoutRef<"div">) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide = slides[activeSlideIndex];
  return (
    <div className="flex flex-col items-center gap-4" {...rest}>
      <h2 className={clsx("font-nb-international-pro text-2xl")}>{title}</h2>
      <div className="flex flex-col items-start gap-4 border border-black p-4">
        <Content content={activeSlide.content} author={activeSlide.author} />
        <p>
          <LikeButton key={activeSlideIndex} />
          &nbsp;
          {activeSlide.likes} likes
        </p>
      </div>
      <div style={{ display: "flex", gap: "1em" }}>
        <Button
          disabled={activeSlideIndex === 0}
          onClick={() => setActiveSlideIndex((prev) => prev - 1)}
        >
          Previous
        </Button>
        <Button
          disabled={activeSlideIndex === slides.length - 1}
          onClick={() => setActiveSlideIndex((prev) => prev + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
