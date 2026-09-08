import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";

/** 英語見出し・ラベル */
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif-en",
  display: "swap",
});

/** 日本語の見出し（明朝） */
export const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif-jp",
  display: "swap",
});

/** 本文（ゴシック） */
export const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});
