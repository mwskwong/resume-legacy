import { Box, Divider, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useSectionHeaderSx";

const SectionHeader = ({ heading, Icon }) => {
  const sx = useSx();

  return (
    <Box component="header" sx={sx.root}>
      <Typography sx={sx.heading} variant="h2" gutterBottom>
        {heading}
      </Typography>
      <Box sx={sx.separatorContainer}>
        <Divider sx={sx.divider} />
        <Icon />
        <Divider sx={sx.divider} />
      </Box>
    </Box>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};

SectionHeader.whyDidYouRender = true;

export default SectionHeader;