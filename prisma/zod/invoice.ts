import * as z from "zod"
import { InvoiceStatus } from "../../generated/prisma"

export const InvoiceModel = z.object({
  id: z.number().int(),
  date: z.date(),
  status: z.nativeEnum(InvoiceStatus),
  amount: z.number().int(),
})
