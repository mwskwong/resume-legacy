import React, { FC } from "react";

import About from "components/index/About";
import Contact from "components/index/Contact";
import Education from "components/index/Education";
import Experience from "components/index/Experience";
import Footer from "components/index/Footer";
import FooterDivider from "components/common/dividers/Footer";
import Hero from "components/index/Hero";
import NavBar from "components/common/NavBar";
import SEO from "components/common/SEO";
import ScrollToTopFab from "components/common/ScrollToTopFab";
import { TypeBackground } from "@mui/material";
import { UseSx } from "types";
import WaveRoaring from "components/common/dividers/WaveRoaring";
import WaveRough from "components/common/dividers/WaveRough";
import WaveSmooth from "components/common/dividers/WaveSmooth";
import WaveSmooth2 from "components/common/dividers/WaveSmooth2";
import useStructuredData from "hooks/useStructuredData";

const bgcolors: Record<string, keyof TypeBackground> = {
  hero: "default",
  about: "sectionPrimary",
  experience: "sectionSecondary",
  education: "sectionPrimary",
  contact: "default",
  footer: "sectionPrimary"
};

const useSx: UseSx = () => ({
  about: {
    bgcolor: `background.${bgcolors.about}`
  },
  experience: {
    bgcolor: `background.${bgcolors.experience}`
  },
  education: {
    bgcolor: `background.${bgcolors.education}`
  },
  footer: {
    bgcolor: `background.${bgcolors.footer}`
  },
  waveSmooth: {
    color: `background.${bgcolors.about}`
  },
  waveRough: {
    bgcolor: `background.${bgcolors.about}`,
    color: `background.${bgcolors.experience}`
  },
  waveSmooth2: {
    bgcolor: `background.${bgcolors.experience}`,
    color: `background.${bgcolors.education}`
  },
  waveRoaring: {
    bgcolor: `background.${bgcolors.education}`,
    color: `background.${bgcolors.contact}`
  },
  footerDivider: {
    bgcolor: `background.${bgcolors.contact}`,
    color: `background.${bgcolors.footer}`
  }
});

const IndexPage: FC = () => {
  const sx = useSx();

  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <WaveSmooth sx={sx.waveSmooth} />
        <About sx={sx.about} />
        <WaveRough sx={sx.waveRough} />
        <Experience sx={sx.experience} />
        <WaveSmooth2 sx={sx.waveSmooth2} />
        <Education sx={sx.education} />
        <WaveRoaring sx={sx.waveRoaring} />
        <Contact />
      </main>
      <FooterDivider sx={sx.footerDivider} />
      <Footer sx={sx.footer} />
      <ScrollToTopFab />
    </>
  );
};

if (process.env.NODE_ENV === "development") IndexPage.whyDidYouRender = true;

export const Head: FC = () => {
  const { indexPage } = useStructuredData();

  return (
    <SEO>
      <script type="application/ld+json">
        {JSON.stringify(indexPage)}
      </script>
    </SEO>
  );
};

export default IndexPage;
