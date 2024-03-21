import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murphy | Personal Portfolio",
  description: "Murphy Yue is a frontend developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
