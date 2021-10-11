import { Box, Divider, Typography } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useSectionHeaderSx";

const SectionHeader = ({ heading, Icon }) => {
  const sx = useSx();

  return (
    <header>
      <Typography sx={sx.heading} variant="h2" gutterBottom>
        {heading}
      </Typography>
      <Box sx={sx.separatorContainer}>
        <Divider sx={sx.divider} />
        <Icon />
        <Divider sx={sx.divider} />
      </Box>
    </header>
  );
};

SectionHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired
};

SectionHeader.whyDidYouRender = true;

export default SectionHeader;