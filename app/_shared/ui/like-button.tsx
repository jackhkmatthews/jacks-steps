"use client";

import clsx from "clsx";
import { useState } from "react";

export function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <button
      onClick={() => setIsLiked((isLiked) => !isLiked)}
      className={clsx(
        "p-2 border border-black",
        isLiked ? "bg-black text-white font-bold" : "bg-white text-black"
      )}
    >
      {isLiked ? "Liked " : "Like"} +
    </button>
  );
}
