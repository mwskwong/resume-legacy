import { Fragment, lazy, useMemo } from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab";

import NavBar from "components/NavBar";
import SEO from "components/SEO";
import ScrollToTopFab from "components/ScrollToTopFab";

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

const IndexPage = () => {
  const sx = useSx();

  return (
    <Fragment>
      <SEO />
      <NavBar />
      <main>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent variant="body2">
              {"Aug 2021 — Present"}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={sx.timelineContent}>
              {/* <Typography sx={sx.periodMobile} variant="body2" component="div" gutterBottom>
                {period}
              </Typography> */}
              <Typography variant="subtitle1" component="div" gutterBottom>
                {"Programmer (Database Management System)"}
              </Typography>
              <Typography component="div" gutterBottom>
                {"EDPS Limited | Outsourced to Hospital Authority"}
              </Typography>
              <List disablePadding>
                <ListItem disableGutters>
                  <ListItemText primary={"Participate in conducting internal knowledge sharing session."} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={"Initiate and maintain a CMS to manage internal training materials, guidelines and documentations."} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={"Design and develop a database health check system to facilitate SRE."} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={"Support and guide application teams on MySQL deployment and maintenance."} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={"Design and develop a React web app to visualize database CPU utilization."} />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemText primary={"POC on data virtualization with Delphix DataOp platform."} />
                </ListItem>
              </List>
              {/* {data.fileUrl && (
                <Button sx={sx.downloadButton} startIcon={<Download />} href={data.fileUrl}>
                  Download
                </Button>
              )} */}
            </TimelineContent>
          </TimelineItem >
        </Timeline>
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
