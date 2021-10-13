import { ButtonBase } from "@mui/material";
import PropTypes from "prop-types";
import useSx from "./usePaginationItemSx";

const PaginationItem = ({ active = false, onClick, index }) => {
  const sx = useSx({ active });

  return (
    <ButtonBase
      sx={sx.root}
      onClick={onClick}
      aria-label={"go to page " + index}
    />
  );
};

PaginationItem.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  index: PropTypes.number
};

PaginationItem.whyDidYouRender = true;

export default PaginationItem;