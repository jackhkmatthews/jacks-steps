import { ComponentPropsWithoutRef } from "react";

export function Button({ style, ...rest }: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      style={{ backgroundColor: "yellow", padding: "0.5em", ...style }}
      {...rest}
    />
  );
}
