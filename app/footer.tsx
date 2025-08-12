import { signOut } from "@/auth";
import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithRef } from "react";

const links = [
  { name: "Admin", href: "/admin" },
  { name: "Login", href: "/login" },
];

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
          <li>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                Sign out
              </button>
            </form>
          </li>
        </ol>
      </nav>
    </footer>
  );
}
