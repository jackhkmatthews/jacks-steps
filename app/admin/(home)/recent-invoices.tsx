import { fetchLatestInvoicesSlowest } from "@/app/_lib/sql";
import { unstable_noStore } from "next/cache";

export async function RecentInvoices() {
  unstable_noStore();
  const latestInvoices = await fetchLatestInvoicesSlowest();
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-nb-international-pro">Latest invoices</h3>
      <ol>
        {latestInvoices.map((i) => (
          <li key={i.id}>
            {i.id}: {i.amount}, {i.status}
          </li>
        ))}
      </ol>
    </div>
  );
}
