import { Box, Divider, Typography } from "@mui/material";

import PropTypes from "prop-types";
import { AcUnitRounded as Snow } from "@mui/icons-material";
import useSx from "./useSectionHeaderSx";

const SectionHeader = ({ heading }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root}>
      <Typography sx={sx.heading} variant="h2" gutterBottom>
        {heading}
      </Typography>
      <Box sx={sx.separatorContainer}>
        <Divider sx={sx.divider} />
        <Snow />
        <Divider sx={sx.divider} />
      </Box>
    </Box>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired
};

SectionHeader.whyDidYouRender = true;

export default SectionHeader;