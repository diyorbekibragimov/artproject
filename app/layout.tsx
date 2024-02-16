import type { Metadata } from "next";
import { Inter, Saira_Condensed, Saira_Extra_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const saira = Saira_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800"],
  variable: "--font-saira-condensed",
});

const saira_ex = Saira_Extra_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-saira-extra-condensed",
});

export const metadata: Metadata = {
  title: "Arts & Crafts Club",
  description: "A tribute to resilient artists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${saira.variable} ${inter.variable} ${saira_ex.variable} ${inter.className}`}>{children}</body>
    </html>
  );
}
