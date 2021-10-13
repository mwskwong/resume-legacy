import { Box } from "@mui/material";
import PaginationItem from "./PaginationItem";
import PropTypes from "prop-types";
import useSx from "./usePaginationSx";

const Pagination = ({ count = 1, onChangeIndex, index }) => {
  const sx = useSx();
  const handleSelectIndex = idx => () => onChangeIndex && onChangeIndex(idx);

  return (
    <Box sx={sx.root}>
      {[...Array(count)].map((_, currentIndex) => (
        <PaginationItem
          key={currentIndex}
          active={currentIndex === index}
          onClick={handleSelectIndex(currentIndex)}
          index={currentIndex}
        />
      ))}
    </Box>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
  onChangeIndex: PropTypes.func,
  index: PropTypes.number
};

Pagination.whyDidYouRender = true;

export default Pagination;