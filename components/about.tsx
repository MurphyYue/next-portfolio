"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeadding from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { useLang } from "@/context/theme-context";

export default function About() {
  const { lang } = useLang();
  const { ref } = useSectionInView("#about");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeadding>{lang === "en" ? "About Me" : "关于我"}</SectionHeadding>
      {lang === 'en' ? (
        <React.Fragment>
        <p className="mb-3">
          After graduating from college with a{" "}
          <span className="font-medium">bachelor's degree</span>, I began to
          work as a <span className="font-medium">front-end </span>
          developer. I started using jQuery to do some simple page development,
          and about a year later I found Vue.js very efficient and began to use
          it, and then I used React.js for about 3 years in my later work. Most
          of the projects I have developed are enterprise management systems,
          mainly PC browser projects.
        </p>
        <p className="mb-3">
          After work, I like to learn the latest front-end technology. So I have
          done mobile projects based on{" "}
          <span className="font-medium">uni-app</span>. I have also done
          projects based on <span className="font-medium">nextjs</span>. My goal
          is to do <span className="font-medium">full-stack</span> work based on
          nextjs. I'm also interested in{" "}
          <span className="font-medium">web3</span> development, so I'm learning
          solidity and Ethers.js.
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I enjoy biking,
          traveling, watching movies, and playing with my son. I also enjoy{" "}
          <span className="font-medium">learning new language</span>. I am
          currently learning about <span className="font-medium">English</span>
        </p>
      </React.Fragment>
      ) : (
        <React.Fragment>
        <p className="mb-3">
          大学毕业后，我开始从事前端开发工作。起初使用jQuery进行一些简单的页面开发，
          大约一年后，我发现Vue.js非常高效并开始使用它，之后在后来的工作中使用了大约3年的React.js。
          我开发的大多数项目都是企业管理系统，主要是PC浏览器项目。
        </p>
        <p className="mb-3">
          工作之余，我喜欢学习最新的前端技术。所以我做过基于uni-app的移动项目。我也做过基于nextjs的项目。我的目标是基于nextjs进行全栈工作。我也对web3开发感兴趣，所以我正在学习solidity和Ethers.js。
        </p>
        <p>
          当我不编码时，我喜欢骑自行车、旅行、看电影以及一些亲子活动。我也喜欢学习新语言。我目前正在学习英语。
        </p>
      </React.Fragment>
      )}
    </motion.section>
  );
}
