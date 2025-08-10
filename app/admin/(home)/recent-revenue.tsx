import { fetchMonthlyRevenuesSlow } from "@/app/_lib/sql";
import { unstable_noStore } from "next/cache";

export async function RecentRevenue() {
  unstable_noStore();
  const monthlyRevenues = await fetchMonthlyRevenuesSlow();
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-nb-international-pro">Recent Revenue</h3>
      <ol>
        {monthlyRevenues.map((mr) => (
          <li key={mr.id}>
            {mr.month}: {mr.revenue}
          </li>
        ))}
      </ol>
    </div>
  );
}
