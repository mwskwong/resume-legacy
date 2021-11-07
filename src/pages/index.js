import Layout from "layouts/Layout";
import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import { lazy } from "react";

const About = lazy(() => import(/* webpackChunkName: "about" */ "features/About"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "features/Contact"));
const Education = lazy(() => import(/* webpackChunkName: "education" */ "features/Education"));
const Footer = lazy(() => import(/* webpackChunkName: "footer" */ "features/Footer"));
const Landing = lazy(() => import(/* webpackChunkName: "landing" */ "features/Landing"));
const Testimonial = lazy(() => import(/* webpackChunkName: "testimonial" */ "features/Testimonial"));
const Work = lazy(() => import(/* webpackChunkName: "work" */ "features/Work"));

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <NavBar />
      <main>
        <Landing />
        <About />
        <Testimonial />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopFab />
    </Layout>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
