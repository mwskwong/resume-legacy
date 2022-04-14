import { ButtonBase } from "@mui/material";
import PropTypes from "prop-types";
import useSx from "./usePaginationItemSx";

const PaginationItem = ({ active = false, onClick, ...props }) => {
  const sx = useSx({ active });

  return (
    <ButtonBase
      sx={sx.root}
      disableRipple
      onClick={onClick}
      {...props}
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