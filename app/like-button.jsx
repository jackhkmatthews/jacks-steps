"use client";

import { useState } from "react";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked((isLiked) => !isLiked)}
      style={{
        backgroundColor: isLiked ? "black" : "white",
        color: isLiked ? "white" : "black",
        fontWeight: isLiked ? "bold" : "normal",
      }}
    >
      {isLiked ? "Liked " : "Like"} +
    </button>
  );
}
