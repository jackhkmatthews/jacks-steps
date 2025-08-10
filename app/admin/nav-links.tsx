"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

const links = [
  { name: "Home", href: "/admin" },
  { name: "Invoices", href: "/admin/invoices" },
  { name: "Customers", href: "/admin/customers" },
];

export function NavLinks({
  className,
  ...rest
}: ComponentPropsWithoutRef<"nav">) {
  const pathname = usePathname();
  return (
    <nav className={clsx(className)} {...rest}>
      <ol className="flex gap-4">
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
