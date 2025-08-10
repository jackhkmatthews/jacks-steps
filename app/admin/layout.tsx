import { NavLinks } from "./nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-3xl font-bold">Admin</h2>
      <NavLinks />
      <div className="">{children}</div>
    </div>
  );
}
