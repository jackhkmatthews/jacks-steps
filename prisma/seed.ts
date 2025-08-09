import { PrismaClient, type Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const testimonalData: Prisma.TestimonialCreateInput[] = [
  {
    content: "Best steps I've ever seen.",
    author: "Jack, London",
    likes: 1,
  },
  {
    content: "Couldn't believe my eyes!",
    author: "Kjell, Sweden",
    likes: 3,
  },
  {
    content: "Is he still banging on about those steps?",
    likes: 8,
    author: "Laura, London",
  },
];

export async function main() {
  for (const t of testimonalData) {
    await prisma.testimonial.create({ data: t });
  }
}

main();
