import nav, { HOME } from "constants/nav";
import { useEffect, useState, useTransition } from "react";

import { SectionId } from "types";

const useActiveSectionId = (): SectionId => {
  const [, startTransition] = useTransition();
  const [activeSectionId, setActiveSectionId] = useState(HOME.id);

  useEffect(() => {
    const initId = window.location.hash?.slice(1);
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: initId can be an invalid section id
    if (initId) setActiveSectionId(initId);

    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrollBottom) {
        startTransition(() => setActiveSectionId(sectionIds[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          const sectionActive = section
            && section.offsetTop < document.documentElement.scrollTop
            + document.documentElement.clientHeight / 8;

          if (sectionActive) {
            startTransition(() => setActiveSectionId(sectionId));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;