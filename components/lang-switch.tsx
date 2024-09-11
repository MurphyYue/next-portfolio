"use client";

import { useLang } from "@/context/theme-context";
import React from "react";
import { FaLanguage } from "react-icons/fa6";

export default function LangSwitch() {
  const { toggleLang } = useLang();

  return (
    <button
      className="text-3xl fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleLang}
    >
     <FaLanguage />
    </button>
  );
}
