import { Customer, Invoice, MonthlyRevenue } from "@/generated/prisma";
import postgres from "postgres";

const sql = postgres(process.env.DATABASE_URL!, { ssl: "require" });

export async function fetchCustomers() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production :)

    console.log("Fetching customer data...");
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Customer[]>`SELECT * FROM customer`;

    console.log("Data fetch completed after 3 seconds.");

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customer data.");
  }
}

export async function fetchMonthlyRevenuesSlow() {
  try {
    console.log("Fetching revenure data...");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const data = await sql<MonthlyRevenue[]>`SELECT * FROM "MonthlyRevenue"`;
    return data;
  } catch (error) {
    console.error("Database error:", error);
    throw new Error("Fails to fetch customer data.");
  }
}

export async function fetchLatestInvoicesSlowest() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const data = await sql<Invoice[]>`
      SELECT amount, id, status, date
      FROM "Invoice"
      ORDER BY date DESC
      LIMIT 5`;

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch the latest invoices.");
  }
}
