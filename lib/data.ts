import projectDemoImg from "@/public/peoject-demo.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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

export const projectsData = [
  {
    title: "SocialMint",
    description:
      "SocialMint is a Social Finace project which is a social media platform that allows users to earn rewards for engaging with content and interacting with other users.",
    tags: ["Next.js", "React", "react-redux", "Wagmi", "Tailwind"],
    imageUrl: projectDemoImg,
  },
  {
    title: "BabyTrove",
    description:
      "BabyTrove is my personal project which is an app for parents which you can record yours baby's current state and browse history state which you recorded.",
    tags: ["Next.js", "next-auth", "AWS S3", "Prisma", "Postgresql", "Tailwind"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Intelligent Finance&Taxation Management platform",
    description:
      "Users from small companies can manage their enterprise's finance and tax on this platform",
    tags: ["React", "Mobx", "Eggjs", "Typescript", "webpack", "dojojs"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Yonyou AIoT Management",
    description:
      "Connect the equipment in the factory, better monitor the operation of the equipment.",
    tags: ["React", "react-router", "react-redux", "ant-design", "webpack", "echarts"],
    imageUrl: projectDemoImg,
  },
  {
    title: "Investment Management platform",
    description:
      "An Investment Management platform for Longfor Group which include PC and mobile(iOS by H5)",
    tags: ["qiankun", "vue", "vuex", "vue-router", "elementUI", "echarts"],
    imageUrl: projectDemoImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Webpack",
  "Qiankun",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "Docker",
  "PostgreSQL",
  "MySQL",
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
