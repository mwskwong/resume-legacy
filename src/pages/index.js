import React, { Fragment } from "react";

import About from "features/About";
import Contact from "features/Contact";
import Education from "features/Education";
import Footer from "features/Footer";
import FooterDivider from "components/dividers/Footer";
import Hero from "features/Hero";
import LazyHydrate from "react-lazy-hydration";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "features/Testimonial";
import WaveRoaring from "components/dividers/WaveRoaring";
import WaveRough from "components/dividers/WaveRough";
import WaveSmooth from "components/dividers/WaveSmooth";
import WaveSmooth2 from "components/dividers/WaveSmooth2";
import WaveSmoothFlat from "components/dividers/WaveSmoothFlat";
import Work from "features/Work";

const bgcolors = {
  hero: "default",
  about: "sectionSecondary",
  testimonial: "default",
  work: "sectionTertiary",
  education: "sectionSecondary",
  contact: "default",
  footer: "sectionPrimary"
};

const useSx = () => ({
  about: {
    bgcolor: `background.${bgcolors.about}`
  },
  work: {
    bgcolor: `background.${bgcolors.work}`
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
    color: `background.${bgcolors.testimonial}`
  },
  waveSmoothFlat: {
    bgcolor: `background.${bgcolors.testimonial}`,
    color: `background.${bgcolors.work}`
  },
  waveSmooth2: {
    bgcolor: `background.${bgcolors.work}`,
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

const IndexPage = () => {
  const sx = useSx();

  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <LazyHydrate whenVisible>
          <Hero />
        </LazyHydrate>
        <WaveSmooth sx={sx.waveSmooth} />
        <LazyHydrate whenVisible>
          <About sx={sx.about} />
        </LazyHydrate>
        <WaveRough sx={sx.waveRough} />
        <LazyHydrate whenVisible>
          <Testimonial />
        </LazyHydrate>
        <WaveSmoothFlat sx={sx.waveSmoothFlat} />
        <LazyHydrate whenVisible>
          <Work sx={sx.work} />
        </LazyHydrate>
        <WaveSmooth2 sx={sx.waveSmooth2} />
        <LazyHydrate whenVisible>
          <Education sx={sx.education} />
        </LazyHydrate>
        <WaveRoaring sx={sx.waveRoaring} />
        <LazyHydrate whenVisible>
          <Contact />
        </LazyHydrate>
      </main>
      <FooterDivider sx={sx.footerDivider} />
      <LazyHydrate whenVisible>
        <Footer sx={sx.footer} />
      </LazyHydrate>
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
