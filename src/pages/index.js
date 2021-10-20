import { Fragment, Suspense, lazy } from "react";

// import About from "features/About";
import Contact from "features/Contact";
import Education from "features/Education";
import Footer from "features/Footer";
import Landing from "features/Landing";
import NavBar from "components/NavBar";
import Project from "features/Project";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "features/Testimonial";
import Work from "features/Work";

const About = lazy(() => import("features/About"));

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <Landing />
        <Suspense fallback={null}>
          <About />
        </Suspense>
        <Testimonial />
        <Work />
        <Education />
        <Project />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
