import { Button, SxProps, Theme } from "@mui/material";
import React, { FC } from "react";
import { graphql, useStaticQuery } from "gatsby";

type DownloadResumeButtonProps = {
  sx?: SxProps<Theme>
}

const DownloadResumeButton: FC<DownloadResumeButtonProps> = ({ sx }) => {
  const { resume } = useStaticQuery<Queries.DownloadResumeButtonQuery>(graphql`
    query DownloadResumeButton {
      resume: contentfulAsset(title: {eq: "Resume"}) {
        publicUrl
      }
    }
  `);

  return (
    <Button
      sx={sx}
      variant="contained"
      size="large"
      href={resume?.publicUrl}
    >
      Download Resume
    </Button>
  );
};

if (process.env.NODE_ENV === "development") DownloadResumeButton.whyDidYouRender = true;

export default DownloadResumeButton;