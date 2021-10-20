import About from "features/About";
import Contact from "features/Contact";
import Education from "features/Education";
import Footer from "features/Footer";
import { Fragment } from "react";
import Landing from "features/Landing";
import { LazyHydrate } from "react-storefront";
import NavBar from "components/NavBar";
import Project from "features/Project";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "features/Testimonial";
import Work from "features/Work";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <LazyHydrate id="lazy-landing">
          <Landing />
        </LazyHydrate>
        <LazyHydrate id="lazy-about">
          <About />
        </LazyHydrate>
        <LazyHydrate id="lazy-testimonial">
          <Testimonial />
        </LazyHydrate>
        <LazyHydrate id="lazy-work">
          <Work />
        </LazyHydrate>
        <LazyHydrate id="lazy-education">
          <Education />
        </LazyHydrate>
        <LazyHydrate id="lazy-project">
          <Project />
        </LazyHydrate>
        <LazyHydrate id="lazy-contact">
          <Contact />
        </LazyHydrate>
      </main>
      <LazyHydrate id="lazy-footer">
        <Footer />
      </LazyHydrate>
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
