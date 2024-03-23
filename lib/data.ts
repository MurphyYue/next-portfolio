import projectDemoImg from "@/public/peoject-demo.png";

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
    title: "Intelligent Finance&Taxation Management platform",
    description:
      "Users from small companies can manage their enterprise's finance and tax on this platform",
    tags: ["React", "mobx", "eggjs", "typescript", "webpack", "dojojs"],
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

