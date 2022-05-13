import PropTypes from "prop-types";
import React from "react";
import { styled } from "@mui/material";
import useSx from "./useDividerSvgSx";

const Svg = styled("svg")``;

const DividerSvg = ({ sx: sxProp, ...props }) => {
  const sx = useSx({ sxProp });

  return (
    <Svg
      sx={sx.root}
      {...props}
    />
  );
};

DividerSvg.propTypes = {
  sx: PropTypes.object
};

DividerSvg.whyDidYouRender = true;

export default DividerSvg;