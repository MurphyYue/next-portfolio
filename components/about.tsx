"use client"

import React from 'react';
import { motion } from "framer-motion";
import SectionHeadding from './section-heading';
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeadding>About Me</SectionHeadding>
      <p className="mb-3">
        After graduating from college with a <span className="font-medium">bachelor's degree</span>,
        I began to work as a <span className="font-medium">front-end</span>
        developer. I started using jQuery to do some simple page development, and about a year later
        I found Vuejs very efficient and began to use it, and then I used Reactjs for about 3 years
        in my later work. Most of the projects I have developed are enterprise management systems,
        mainly PC browser projects.
      </p>
      <p className="mb-3">
        After work, I like to learn the latest front-end technology. So I have done mobile projects
        based on <span className="font-medium">uni-app</span>. I have also done projects based on{" "}
        <span className="font-medium">nextjs</span>. My goal is to do{" "}
        <span className="font-medium">full-stack</span> work based on nextjs. I'm also interested in{" "}
        <span className="font-medium">web3</span> development, so I'm learning solidity and ethjs.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy biking, traveling, watching
        movies, and playing with my son. I also enjoy{" "}
        <span className="font-medium">learning new language</span>. I am currently learning about{" "}
        <span className="font-medium">English</span>
      </p>
    </motion.section>
  );
}