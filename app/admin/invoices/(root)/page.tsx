import { Suspense } from "react";
import { InvoicesSearch } from "./invoices-search";
import { InvoicesTable } from "./invoices-table";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";

  return (
    <div className="flex flex-col gap-10">
      <InvoicesSearch inputProps={{ placeholder: "Search invoices" }} />
      <Suspense fallback="Loading..." key={query}>
        <InvoicesTable query={query} />
      </Suspense>
    </div>
  );
}
