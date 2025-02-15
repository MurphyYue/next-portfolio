import projectDemoImg from "@/public/peoject-demo.png";
import socialMintImg from "@/public/social_mint.png";
import ai4workImg from "@/public/ai4work.png";
import chatstar from "@/public/chat_star.jpg";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const linksCN = [
  {
    name: "首页",
    hash: "#home",
  },
  {
    name: "关于我",
    hash: "#about",
  },
  {
    name: "项目",
    hash: "#projects",
  },
  {
    name: "技能",
    hash: "#skills",
  },
  {
    name: "经验",
    hash: "#experience",
  },
  {
    name: "联系",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "star cat",
    description:
      "An AI Agent-based virtual twin interactive app for autistic children aims to help parents understand their children's behavior and provide personalized interactive suggestions. championship at Gemma Hackathon 2024 (Google Shenzhen)",
    tags: ["Dify", "Next.js", "Tailwind CSS"],
    imageUrl: chatstar,
  },
  {
    title: "AI4Work",
    description: "AI4Work is a tool to help you building web page by chatting with AI",
    tags: ["Vite.js", "React.js", "shadcn-ui", "AI models", "Tailwind CSS"],
    imageUrl: ai4workImg,
  },
  {
    title: "SocialMint",
    description:
      "SocialMint is a Social Finace project which is a social media platform that allows users to earn rewards for engaging with content and interacting with other users.",
    tags: ["Next.js", "React.js", "react-redux", "Wagmi", "Tailwind CSS"],
    imageUrl: socialMintImg,
  },
  {
    title: "BabyTrove",
    description:
      "BabyTrove is my personal project which is an app for parents which you can record yours baby's current state and browse history state which you recorded.",
    tags: ["Next.js", "next-auth", "AWS S3", "Prisma", "PostgreSQL", "Tailwind CSS"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Intelligent Finance&Taxation Management platform",
    description:
      "Users from small companies can manage their enterprise's finance and tax on this platform",
    tags: ["React.js", "Mobx", "Egg.js", "Typescript", "Webpack", "dojo.js"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Yonyou AIoT Management",
    description:
      "Connect the equipment in the factory, better monitor the operation of the equipment.",
    tags: ["React.js", "react-router", "react-redux", "ant-design", "Webpack", "Echarts"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Investment Management platform",
    description:
      "An Investment Management platform for Longfor Group which include PC and mobile(iOS by H5)",
    tags: ["Qiankun", "Vue.js", "Vuex", "vue-router", "ElementUI", "Echarts"],
    imageUrl: projectDemoImg,
  },
] as const;

export const projectsDataCN = [
  {
    title: "星童猫咪",
    description:
      "一款基于 AI Agent 的自闭症儿童虚拟孪生互动app，旨在帮助家长理解孩子的行为，并提供个性化互动建议。本项目在 Gemma Hackathon 2024（Google 深圳） 斩获冠军",
    tags: ["Dify", "Next.js", "Tailwind CSS"],
    imageUrl: chatstar,
  },
  {
    title: "AI4Work",
    description: "AI4Work 是一款基于与AI对话来帮助你构建网页的工具",
    tags: ["Vite.js", "React.js", "shadcn-ui", "AI models", "Tailwind CSS"],
    imageUrl: ai4workImg,
  },
  {
    title: "SocialMint",
    description:
      "SocialMint 是一个社会金融项目，它是一个社交媒体平台，允许用户通过参与内容和与其他用户互动来赚取奖励。",
    tags: ["Next.js", "React.js", "react-redux", "Wagmi", "Tailwind CSS"],
    imageUrl: socialMintImg,
  },
  {
    title: "BabyTrove",
    description:
      "BabyTrove 是我的个人项目，它是一个为父母设计的应用程序，你可以记录你孩子的当前状态，并浏览你记录的历史状态。",
    tags: ["Next.js", "next-auth", "AWS S3", "Prisma", "PostgreSQL", "Tailwind CSS"],
    imageUrl: projectDemoImg,
  },
  {
    title: "智能财税管理平台",
    description: "小型企业用户可以在该平台上管理其企业的财务和税收",
    tags: ["React.js", "Mobx", "Egg.js", "Typescript", "Webpack", "dojo.js"],
    imageUrl: projectDemoImg,
  },
  {
    title: "用友AIoT管理平台",
    description: "连接工厂设备，更好地监控设备运行情况。",
    tags: ["React.js", "react-router", "react-redux", "ant-design", "Webpack", "Echarts"],
    imageUrl: projectDemoImg,
  },
  {
    title: "双湖投资管理平台",
    description: "龙湖集团的投资管理平台，包括PC和移动端（iOS 通过 H5）",
    tags: ["Qiankun", "Vue.js", "Vuex", "vue-router", "ElementUI", "Echarts"],
    imageUrl: projectDemoImg,
  },
] as const;

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Vue.js",
  "Vite.js",
  "Webpack",
  "Qiankun",
  "Node.js",
  "Ethers.js",
  "Wagmi",
  "Tailwind CSS",
  "Redux",
  "Express.js",
  "PostgreSQL",
  "Dify(build AI Agent)",
] as const;

export const experiencesData = [
  {
    title: "bachelor's degree",
    description:
      "I graduated from Beifang University of Nationalities. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2015",
  },
  {
    title: "Front-end Developer",
    description:
      "After graduating from my undergraduate course in 2015, I worked as a front-end developer in several different companies.",
    icon: React.createElement(CgWorkAlt),
    date: "2015 - present",
  },
] as const;
export const experiencesDataCN = [
  {
    title: "本科学校",
    description: "2011年-2015年，就读于北方民族大学，测控技术与仪器专业。",
    icon: React.createElement(LuGraduationCap),
    date: "2015年",
  },
  {
    title: "前端开发工程师",
    description:
      "毕业后开始从事前端开发的工作，并先后在几家公司工作，目前工作于银金融科技有限责任公司。出于对web3领域的兴趣，我参与了WTF Academy的开源项目WTF Solidity并参与了2024年ETH Beijing竞赛。",
    icon: React.createElement(CgWorkAlt),
    date: "2015年 - 现在",
  },
] as const;
