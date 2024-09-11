"use client";

import React from "react";
import Project from "./project";
import SectionHeading from "./section-heading";
import { projectsData, projectsDataCN } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useLang } from "@/context/theme-context";

export default function Projects() {
  const { ref } = useSectionInView("#projects");
  const { lang } = useLang();
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{lang === "en" ? "My projects" : "我的项目"}</SectionHeading>
      <div>
        {lang === "en" ? projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        )) : projectsDataCN.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}