import { toggleLike } from "@/app/_lib/actions";
import clsx from "clsx";

export function LikeButton({
  id,
  hasLiked,
}: {
  id: number;
  hasLiked: boolean;
}) {
  const toggleLikeWithId = toggleLike.bind(null, id);
  return (
    <form action={toggleLikeWithId}>
      <button
        className={clsx(
          "p-2 border border-black",
          hasLiked ? "bg-black text-white font-bold" : "bg-white text-black"
        )}
      >
        {hasLiked ? "Liked " : "Like"} +
      </button>
    </form>
  );
}
