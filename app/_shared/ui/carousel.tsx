"use client";

import { ComponentPropsWithoutRef, useState } from "react";
import { Button } from "./button";
import { Content } from "./content";
import { LikeButton } from "./like-button";

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
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1em",
      }}
      {...rest}
    >
      <h2>{title}</h2>
      <div style={{ padding: "1em", border: "solid black" }}>
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
