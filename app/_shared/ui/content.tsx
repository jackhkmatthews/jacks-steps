import { ComponentPropsWithRef } from "react";

export function Content({
  content,
  author,
  ...rest
}: { content: string; author: string } & ComponentPropsWithRef<"p">) {
  return (
    <p {...rest}>
      {content} - {author}
    </p>
  );
}
