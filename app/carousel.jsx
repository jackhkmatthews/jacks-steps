"use client";

import { useState } from "react";
import { Button } from "./button";
import { Content } from "./content";
import { LikeButton } from "./like-button";

export function Carousel({ title, slides, ...rest }) {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div
      style={{
        backgroundColor: "pink",
        padding: "0 1em 1em",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        gap: "1em",
      }}
      {...rest}
    >
      <h2>{title}</h2>
      <Content content={slides[activeSlideIndex].content} />
      <p>
        <LikeButton key={activeSlideIndex} />
        &nbsp;
        {slides[activeSlideIndex].likes} people like this
      </p>
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
