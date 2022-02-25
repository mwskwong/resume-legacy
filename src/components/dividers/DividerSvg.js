import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { unstable_styleFunctionSx } from "@mui/system";
import useSx from "./useDividerSvgSx";

const Svg = styled.svg(unstable_styleFunctionSx);

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