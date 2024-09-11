import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import { ThemeContextProvider, LangContextProvider } from "@/context/theme-context";
import ThemeSwitch from "@/components/theme-switch";
import LangSwitch from "@/components/lang-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Murphy | Personal Portfolio",
  description: "Murphy Yue is a front-end developer with 8 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >

        <ThemeContextProvider>
          <LangContextProvider>
            <ActiveSectionContextProvider>
              <Header />
            {children}
            <Toaster position="top-right" />
            <ThemeSwitch />
            <LangSwitch />
          </ActiveSectionContextProvider>
          </LangContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
