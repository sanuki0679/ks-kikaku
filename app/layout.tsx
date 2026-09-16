import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KS企画 | 飲食店・介護施設向け Webアプリ開発",
  description:
    "予約管理、シフト管理、送迎記録など、飲食店・介護施設の現場課題をWebアプリで解決します。ココナラ・直接相談に対応。",
  openGraph: {
    title: "KS企画 | 飲食店・介護施設向け Webアプリ開発",
    description:
      "予約管理、シフト管理、送迎記録など、現場の困りごとをわかりやすいWebアプリで解決します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${outfit.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
