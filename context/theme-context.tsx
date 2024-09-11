"use client";

import React, { useState, createContext, useContext, useEffect } from "react";

type Theme = "light" | "dark";
type Lang = "cn" | "en";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme,
  toggleTheme: () => void
}

type LangContextType = {
  lang: Lang,
  toggleLang: () => void
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const LangContext = createContext<LangContextType | null>(null);

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [])
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error("useTheme must be used within an ThemeContextProvider");
  }
  return context;
}

export function LangContextProvider({ children }: ThemeContextProviderProps) {
  const [lang, setLang] = useState<Lang>("en");
  const toggleLang = () => {
    setLang(lang === "en" ? "cn" : "en");
  }
  return (
    <LangContext.Provider
      value={{
        lang,
        toggleLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LangContext);
  if (context === null) {
    throw new Error("useLang must be used within an LangContextProvider");
  }
  return context;
}