import { Prisma, PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt";

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

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Jack Matthews",
    email: "jack@gmail.com",
    password: "wicked",
  },
];

const revenueData: Prisma.MonthlyRevenueCreateInput[] = [
  { month: "Jan", revenue: 2000 },
  { month: "Feb", revenue: 1800 },
  { month: "Mar", revenue: 2200 },
  { month: "Apr", revenue: 2500 },
  { month: "May", revenue: 2300 },
  { month: "Jun", revenue: 3200 },
  { month: "Jul", revenue: 3500 },
  { month: "Aug", revenue: 3700 },
  { month: "Sep", revenue: 2500 },
  { month: "Oct", revenue: 2800 },
  { month: "Nov", revenue: 3000 },
  { month: "Dec", revenue: 4800 },
];

const invoiceData: Prisma.InvoiceCreateInput[] = [
  {
    amount: 15795,
    status: "pending",
    date: new Date("2022-12-06"),
  },
  {
    amount: 20348,
    status: "pending",
    date: new Date("2022-11-14"),
  },
  {
    amount: 3040,
    status: "paid",
    date: new Date("2022-10-29"),
  },
  {
    amount: 44800,
    status: "paid",
    date: new Date("2023-09-10"),
  },
  {
    amount: 34577,
    status: "pending",
    date: new Date("2023-08-05"),
  },
  {
    amount: 54246,
    status: "pending",
    date: new Date("2023-07-16"),
  },
  {
    amount: 666,
    status: "pending",
    date: new Date("2023-06-27"),
  },
  {
    amount: 32545,
    status: "paid",
    date: new Date("2023-06-09"),
  },
  {
    amount: 1250,
    status: "paid",
    date: new Date("2023-06-17"),
  },
  {
    amount: 8546,
    status: "paid",
    date: new Date("2023-06-07"),
  },
  {
    amount: 500,
    status: "paid",
    date: new Date("2023-08-19"),
  },
  {
    amount: 8945,
    status: "paid",
    date: new Date("2023-06-03"),
  },
  {
    amount: 1000,
    status: "paid",
    date: new Date("2022-06-05"),
  },
];

export async function main() {
  // for (const t of testimonalData) {
  //   await prisma.testimonial.create({ data: t });
  // }
  // for (const mr of revenueData) {
  //   await prisma.monthlyRevenue.create({ data: mr });
  // }
  // for (const i of invoiceData) {
  //   await prisma.invoice.create({ data: i });
  // }
  for (const u of userData) {
    const hashedPassword = await bcrypt.hash("wicked", 10);
    await prisma.user.create({ data: { ...u, password: hashedPassword } });
  }
}

main();
