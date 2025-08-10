import { NavLinks } from "./nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <NavLinks />
      <div className="">{children}</div>
    </div>
  );
}
