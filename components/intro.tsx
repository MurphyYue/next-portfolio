"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useLang } from "@/context/theme-context";

export default function Intro() {
  const { ref } = useSectionInView("#home", 0.5);
  const { lang } = useLang();
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
    >
      {lang === "en" ? (
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">Hello, I'm Murphy Yue.</span> I'm a{" "}
          <span className="font-bold">front-end developer</span> with{" "}
          <span className="font-bold">9 years</span> of experience. I enjoy
          building <span className="italic">sites & apps</span>. My focus are{" "}
          <span className="underline">Vue & React (Vite & Next)</span>.
        </motion.h1>
      ) : (
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-bold">你好，我是岳铭飞</span> 我是一名{" "}有着{" "}
          <span className="font-bold">9 年</span> 工作经验的 <span className="font-bold">前端开发工程师</span>.
          主要从事 <span className="italic">网站和应用</span>的开发. 我的专注领域是{" "}
          <span className="underline">Vue & React (Vite & Next)</span>.
        </motion.h1>
      )}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {lang === "en" ? "Contact me here" : "联系我"}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href={lang === "en" ? '/Murphy_Yue_Frontend_Developer.pdf' : '/Murphy_Yue_Frontend_Developer_CN.pdf'}
          download
        >
          {lang === "en" ? "Download CV" : "下载简历"}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/murphy-yue-463994246/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/MurphyYue"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
