import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ხონჩა",
  description:
    "ხის ხელნაკეთი ნივთების ონლაინ მაღაზია მაღალი ხარისხის ხისგან დამზადებული ჩვენი პროდუქცია არა მხოლოდ ფუნქციონალურია, არამედ ასახავს მასალის ბუნებრივ სილამაზეს",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="shortcut icon"
          href="/logo-uxazosvg.svg"
          type="image/x-icon"
        />
        <meta
          name="description"
          content="ხის ხელნაკეთი ნივთების ონლაინ მაღაზია
        მაღალი ხარისხის ხისგან დამზადებული ჩვენი პროდუქცია არა მხოლოდ ფუნქციონალურია, არამედ ასახავს მასალის ბუნებრივ სილამაზეს"
        />
        <meta
          name="keywords"
          content="ხელნაკეთი, ხის ხელნაკეთი, ხის ხელნაკეთი ნივთები, საჩუქარი, სასაჩუქრე, ხონჩა, xoncha, handmade, ხონჩა საჩუქარი, ხონჩა სასაჩუქრე, ჩარხი, საჩარხი დაზგა, გამოჩარხული ნივთები"
        />
        <meta name="author" content="Xoncha" />
        <meta
          property="og:title"
          content="ხის ხელნაკეთი ნივთების ონლაინ მაღაზია - Xoncha"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
