import { Fragment } from "react";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import loadable from "@loadable/component";

const Landing = loadable(() => import("features/Landing"));
const About = loadable(() => import("features/About"));
const Testimonial = loadable(() => import("features/Testimonial"));
const Work = loadable(() => import("features/Work"));
const Education = loadable(() => import("features/Education"));
const Project = loadable(() => import("features/Project"));
const Contact = loadable(() => import("features/Contact"));
const Footer = loadable(() => import("features/Footer"));

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <Landing />
        <About />
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
