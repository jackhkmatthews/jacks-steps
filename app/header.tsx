import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

export function Header({ className, ...rest }: ComponentPropsWithRef<"h1">) {
  return (
    <h1 className={clsx(className)} {...rest}>
      <Link href="/" className="text-5xl font-bold font-nb-international-pro">
        Jack's Steps
      </Link>
    </h1>
  );
}
