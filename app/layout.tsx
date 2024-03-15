import type { Metadata } from "next";
import { Inter, Saira_Condensed, Saira_Extra_Condensed, Poppins } from "next/font/google";
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

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
    <html lang="en" className=" min-h-100 ">
      <body className={`${saira.variable}relative ${inter.variable} ${saira_ex.variable} ${poppins.className} ${inter.className}`}>{children}</body>
    </html>
  );
}
