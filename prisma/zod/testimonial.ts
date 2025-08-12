import * as z from "zod"

export const TestimonialModel = z.object({
  id: z.number().int(),
  content: z.string(),
  author: z.string(),
  likes: z.number().int(),
})
