import { Inter as FontSans, Ubuntu_Mono as UbuntuMono } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = UbuntuMono({
  subsets: ["latin"],
  variable: "--ubuntu-mono",
  weight: "400"
});
