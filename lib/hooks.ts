/**
 * header will react when user scroll the window
 */

import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({ threshold });
  const { setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
  }, [sectionName, inView, setActiveSection]);
  return {
    ref,
  };
}