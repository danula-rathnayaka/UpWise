import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { appName } from "@/constants";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appName,
  description: "AI powered platform to prepare for interviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased`}>{children}</body>
    </html>
  );
}
