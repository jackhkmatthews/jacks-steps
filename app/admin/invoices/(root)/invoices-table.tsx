import { fetchInvoices } from "@/app/_lib/sql";
import clsx from "clsx";
import Link from "next/link";
import { connection } from "next/server";
import { ComponentPropsWithoutRef } from "react";

export async function InvoicesTable({
  query,
  className,
  ...rest
}: { query: string } & ComponentPropsWithoutRef<"div">) {
  connection();
  const invoices = await fetchInvoices(Math.abs(20 - query.length));
  return (
    <div className={clsx("flex flex-col gap-2", className)} {...rest}>
      <h3 className="text-2xl font-nb-international-pro">Invoices</h3>
      <ol>
        {invoices.map((i) => (
          <li key={i.id} className="flex gap-2">
            {i.id}: {i.amount}, {i.status}{" "}
            <Link href={`/admin/invoices/${i.id}`}>View</Link>
            <Link href={`/admin/invoices/${i.id}/edit`}>Update</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
