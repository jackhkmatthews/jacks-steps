import { RecentInvoices } from "./recent-invoices";
import { Suspense } from "react";
import { RecentRevenue } from "./recent-revenue";

export default async function Page() {
  return (
    <div className="flex flex-col gap-10">
      <Suspense fallback="Loading revenue...">
        <RecentRevenue />
      </Suspense>
      <Suspense fallback="Loading invoices...">
        <RecentInvoices />
      </Suspense>
    </div>
  );
}
