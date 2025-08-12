"use client";

import clsx from "clsx";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";
import { useDebouncedCallback } from "use-debounce";

export function InvoicesSearch({
  className,
  inputProps,
  ...rest
}: {
  inputProps: ComponentPropsWithoutRef<"input">;
} & ComponentPropsWithoutRef<"div">) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);

    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div
      className={clsx("relative flex flex-1 flex-shrink-0", className)}
      {...rest}
    >
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        id="search"
        defaultValue={searchParams.get("query")?.toString()}
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        onChange={(e) => handleSearch(e.target.value)}
        {...inputProps}
      />
    </div>
  );
}
