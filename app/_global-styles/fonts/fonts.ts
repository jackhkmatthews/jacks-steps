import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const nbInternationalPro = localFont({
  variable: "--font-nb-international-pro",
  src: [
    {
      path: "./NBInternationalPro/NBInternationalProRegular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NBInternationalPro/NBInternationalProBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
