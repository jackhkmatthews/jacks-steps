import { Metadata } from "next";
import clsx from "clsx";
import "@/app/_global-styles/global.css";
import {
  inter,
  nbInternationalProFull,
  nbInternationalProSubset,
} from "./_global-styles/fonts/fonts";

export const metadata: Metadata = {
  title: "Jack's Steps",
  description: "Get your steps here.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        inter.variable,
        nbInternationalProSubset.variable,
        nbInternationalProFull.variable,
        "antialiased"
      )}
    >
      <body className={clsx("font-inter")}>{children}</body>
    </html>
  );
}
