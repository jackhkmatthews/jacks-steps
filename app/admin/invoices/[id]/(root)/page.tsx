import { deleteInvoice } from "@/app/_lib/actions";
import prisma from "@/app/_lib/prisma";
import Link from "next/link";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const invoice = await prisma.invoice.findFirst({
    where: { id: Number(id) },
    select: { id: true, amount: true, status: true },
  });
  const deleteInvoiceWithId = deleteInvoice.bind(null, id);
  return (
    <div>
      <div className="flex gap-2 items-center">
        {invoice.id}: {invoice.amount}, {invoice.status}{" "}
        <Link href={`/admin/invoices/${invoice.id}/edit`}>Update</Link>
        <form action={deleteInvoiceWithId}>
          <button className="border border-black p-2 hover:cursor-pointer">
            Delete
          </button>
        </form>
      </div>
    </div>
  );
}
