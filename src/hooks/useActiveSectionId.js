import nav, { HOME } from "constants/nav";
import { startTransition, useEffect, useState } from "react";

import throttle from "lodash/throttle";

const useActiveSectionId = () => {
  const [activeSectionId, setActiveSectionId] = useState(HOME.id);

  const isScrollToBottom = () => window.innerHeight + window.scrollY >= document.body.offsetHeight;

  const isSectionActive = section => section
    && section.offsetTop < document.documentElement.scrollTop
    + document.documentElement.clientHeight / 8;

  useEffect(() => {
    const initId = window.location.hash?.slice(1);
    if (initId) setActiveSectionId(initId);

    const sectionIds = Object.values(nav).map(({ id }) => id).reverse();

    const handleScroll = throttle(() => {
      if (isScrollToBottom()) {
        startTransition(() => setActiveSectionId(sectionIds[0]));
      } else {
        for (const sectionId of sectionIds) {
          const section = document.getElementById(sectionId);
          if (isSectionActive(section)) {
            startTransition(() => setActiveSectionId(sectionId));
            break;
          }
        }
      }
    }, 166);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSectionId;
};

export default useActiveSectionId;