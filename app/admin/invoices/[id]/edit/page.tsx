import prisma from "@/app/_lib/prisma";
import { EditInvoiceForm } from "./edit-invoice-form";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const id = params.id;
  const invoice = await prisma.invoice.findFirst({
    where: { id: Number(id) },
    select: { id: true, amount: true, status: true },
  });
  return (
    <div>
      <EditInvoiceForm defaultValues={invoice} />
    </div>
  );
}
