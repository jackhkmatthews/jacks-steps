import { fetchLatestInvoices, fetchMonthlyRevenues } from "../_lib/sql";

export default async function Page() {
  const [monthlyRevenues, latestInvoices] = await Promise.all([
    fetchMonthlyRevenues(),
    fetchLatestInvoices(),
  ]);
  return (
    <div className="flex flex-col gap-10">
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
    </div>
  );
}
