import { Metadata } from "next";
import clsx from "clsx";
import { inter } from "@/app/_global-styles/fonts";
import "@/app/_global-styles/global.css";

export const metadata: Metadata = {
  title: "Jack's Steps",
  description: "Get your steps here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "antialiased")}>{children}</body>
    </html>
  );
}
