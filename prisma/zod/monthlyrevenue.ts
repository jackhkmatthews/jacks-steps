import * as z from "zod"

export const MonthlyRevenueModel = z.object({
  id: z.number().int(),
  month: z.string(),
  revenue: z.number().int(),
})
