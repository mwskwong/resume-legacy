import About from "features/About";
import Contact from "features/Contact";
import Footer from "features/Footer";
import { Fragment } from "react";
import Landing from "features/Landing";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Testimonial from "features/Testimonial";

const IndexPage = () => {
  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <Landing />
        <About />
        <Testimonial />
        <Contact />
        <Footer />
      </main>
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
