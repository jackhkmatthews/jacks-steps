import { ComponentPropsWithRef } from "react";

export function Header({
  title,
  ...rest
}: { title: string } & ComponentPropsWithRef<"h1">) {
  return <h1 {...rest}>{title}</h1>;
}
