import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

const links = [{ name: "Admin", href: "/admin" }];

export function Footer({
  className,
  ...rest
}: ComponentPropsWithRef<"footer">) {
  return (
    <footer className={clsx("p-6 bg-blue-500", className)} {...rest}>
      <nav>
        <ol>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ol>
      </nav>
    </footer>
  );
}
