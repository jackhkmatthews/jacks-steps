import { Metadata } from "next";
import clsx from "clsx";
import "@/app/_global-styles/global.css";
import {
  inter,
  nbInternationalProFull,
  nbInternationalProSubset,
} from "./_global-styles/fonts/fonts";
import { Footer } from "./footer";
import { Header } from "./header";

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
      <body className={clsx("font-inter flex flex-col gap-6")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
