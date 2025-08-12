import * as z from "zod"

export const CustomerModel = z.object({
  id: z.number().int(),
  name: z.string(),
  total_spend: z.number().int(),
})
