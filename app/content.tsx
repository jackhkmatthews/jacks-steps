import { ComponentPropsWithRef } from "react";

export function Content({
  content,
  ...rest
}: { content: string } & ComponentPropsWithRef<"p">) {
  return <p {...rest}>{content}</p>;
}
