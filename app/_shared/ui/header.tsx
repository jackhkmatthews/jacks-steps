import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

export function Header({
  title,
  className,
  ...rest
}: { title: string } & ComponentPropsWithRef<"h1">) {
  return (
    <h1
      className={clsx(
        "text-5xl font-bold font-nb-international-pro",
        className
      )}
      {...rest}
    >
      {title}
    </h1>
  );
}
