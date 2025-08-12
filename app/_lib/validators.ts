import { InvoiceModel } from "@/prisma/zod";

export const CreateInvoice = InvoiceModel.omit({ date: true, id: true });
export const EditInvoice = InvoiceModel.omit({ date: true, id: true });
