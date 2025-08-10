"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

const links = [
  { name: "Admin", href: "/admin" },
  { name: "Invoices", href: "/admin/invoices" },
  { name: "Customers", href: "/admin/customers" },
];

export function NavLinks({
  className,
  ...rest
}: ComponentPropsWithoutRef<"nav">) {
  const pathname = usePathname();
  return (
    <nav className={clsx("flex flex-col", className)} {...rest}>
      <ol>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx({ "font-bold": pathname === link.href })}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
