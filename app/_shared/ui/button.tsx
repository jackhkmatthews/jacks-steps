import clsx from "clsx";
import { ComponentPropsWithoutRef } from "react";

export function Button({
  className,
  ...rest
}: ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={clsx(
        "p-2 bg-yellow-400 cursor-pointer disabled:bg-gray-500 disabled:cursor-default",
        className
      )}
      {...rest}
    />
  );
}
