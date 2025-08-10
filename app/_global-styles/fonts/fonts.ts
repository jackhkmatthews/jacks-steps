import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const nbInternationalProSubset = localFont({
  variable: "--font-nb-international-pro-subset",
  adjustFontFallback: false,
  display: "block",
  src: [
    {
      path: "./NBInternationalPro/NBInternationalProRegular-subset.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./NBInternationalPro/NBInternationalProBold-subset.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const nbInternationalProFull = localFont({
  variable: "--font-nb-international-pro-full",
  adjustFontFallback: false,
  display: "swap",
  preload: false,
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
