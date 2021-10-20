import About from "features/About";
import Contact from "features/Contact";
import Education from "features/Education";
import Footer from "features/Footer";
import { Fragment } from "react";
import Landing from "features/Landing";
import LazyHydrate from "react-lazy-hydration";
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
        <LazyHydrate whenVisible>
          <Landing />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <About />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <Testimonial />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <Work />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <Education />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <Project />
        </LazyHydrate>
        <LazyHydrate whenVisible>
          <Contact />
        </LazyHydrate>
      </main>
      <LazyHydrate whenVisible>
        <Footer />
      </LazyHydrate>
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
