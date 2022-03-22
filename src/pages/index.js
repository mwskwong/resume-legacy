import { Fragment, lazy, useMemo } from "react";

import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";
import Timeline from "components/Timeline";

// import FooterDivider from "components/dividers/Footer";



// import WaveRoaring from "components/dividers/WaveRoaring";
// import WaveRough from "components/dividers/WaveRough";
// import WaveSmooth from "components/dividers/WaveSmooth";
// import WaveSmooth2 from "components/dividers/WaveSmooth2";
// import WaveSmoothFlat from "components/dividers/WaveSmoothFlat";


// const About = lazy(() => import(/* webpackChunkName: "about" */ "features/About"));
// const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "features/Contact"));
// const Education = lazy(() => import(/* webpackChunkName: "education" */ "features/Education"));
// const Footer = lazy(() => import(/* webpackChunkName: "footer" */ "features/Footer"));
// const Landing = lazy(() => import(/* webpackChunkName: "landing" */ "features/Landing"));
// const Testimonial = lazy(() => import(/* webpackChunkName: "testimonial" */ "features/Testimonial"));
// const Work = lazy(() => import(/* webpackChunkName: "work" */ "features/Work"));

const bgcolors = {
  landing: "default",
  about: "sectionSecondary",
  testimonial: "default",
  work: "sectionTertiary",
  education: "sectionSecondary",
  contact: "default",
  footer: "sectionPrimary"
};

const useSx = () => useMemo(() => ({
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
}), []);

const works = [
  {
    "title": "Programmer (Database Management System)",
    "subtitle": "EDPS Limited | Outsourced to Hospital Authority",
    "contents": [
      "Participate in conducting internal knowledge sharing session.",
      "Initiate and maintain a CMS to manage internal training materials, guidelines and documentations.",
      "Design and develop a database health check system to facilitate SRE.",
      "Support and guide application teams on MySQL deployment and maintenance.",
      "Design and develop a React web app to visualize database CPU utilization.",
      "POC on data virtualization with Delphix DataOp platform."
    ],
    "from": "2021-08-16",
    "to": null
  },
  {
    "title": "Junior Programmer (Database Management System)",
    "subtitle": "EDPS Limited | Outsourced to Hospital Authority",
    "contents": [
      "Support and guide application teams on MySQL deployment and maintenance.",
      "Maintain database management web application.",
      "Develop time off web application system",
      "Develop a Java-based database password management application.",
      "POC on data virtualization with Delphix DataOp platform."
    ],
    "from": "2019-07-15",
    "to": "2021-08-16"
  },
  {
    "title": "Summer Internship (Software Development)",
    "subtitle": "Versitech Limited",
    "contents": [
      "Design test suite for E-Form Filler in cooperation with software engineers.",
      "Design and develop installer for E-Form Filler using NSIS MUI2.",
      "Rework a 3-year-old MPF cross-platform mobile application using React Native to replace the legacy Apache Cordova framework."
    ],
    "from": "2018-06-01",
    "to": "2018-08-31"
  },
  {
    "title": "Student Research Assistant",
    "subtitle": "School of Public Health, HKU",
    "fileUrl": "/static/24794bfddd05de06d588a76ea9038d63/hku_med_ra.pdf",
    "contents": [
      "Develop and design a JavaFX application to perform bioinformatics analysis."
    ],
    "from": "2017-07-02",
    "to": "2017-09-09"
  },
  {
    "title": "Teaching Assistant",
    "subtitle": "Faculty of Engineering, HKU",
    "fileUrl": "/static/cd1779f0dbd677bbf13c7fd054db1cab/hku_eng_ta.pdf",
    "contents": [
      "Instruct over 20 students during tutorial sessions of a C++ programming course."
    ],
    "from": "2017-01-01",
    "to": "2017-04-30"
  }
];

const IndexPage = () => {
  const sx = useSx();

  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <Timeline data={works} />
        {/* <Landing />
        <WaveSmooth sx={sx.waveSmooth} />
        <About sx={sx.about} />
        <WaveRough sx={sx.waveRough} />
        <Testimonial />
        <WaveSmoothFlat sx={sx.waveSmoothFlat} />
        <Work sx={sx.work} />
        <WaveSmooth2 sx={sx.waveSmooth2} />
        <Education sx={sx.education} />
        <WaveRoaring sx={sx.waveRoaring} />
        <Contact /> */}
      </main>
      {/* <FooterDivider sx={sx.footerDivider} /> */}
      {/* <Footer sx={sx.footer} /> */}
      <ScrollToTopFab />
    </Fragment>
  );
};

IndexPage.whyDidYouRender = true;

export default IndexPage;
