import { useActiveSectionContext } from "@/context/ActiveSectionContextProvider";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./data";

export function useSectionInView(sectionName: (typeof links)[number]["name"]) {
  const { setActiveSection } = useActiveSectionContext();
  const { ref, inView } = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      setActiveSection(sectionName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, setActiveSection]);
  return ref;
}
