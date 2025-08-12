import { NavLinks } from "./nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10">
      <h3 className="text-3xl font-nb-international-pro">Invoices</h3>
      <NavLinks />
      {children}
    </div>
  );
}
