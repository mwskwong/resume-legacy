import { Box } from "@mui/material";
import PaginationItem from "./PaginationItem";
import PropTypes from "prop-types";
import React from "react";
import useSx from "./usePaginationSx";

const Pagination = ({ references, onChangeIndex, index }) => {
  const sx = useSx();
  const handleChangeIndex = index => () => onChangeIndex && onChangeIndex(index);

  return (
    <Box sx={sx.root}>
      {references.map(({ name }, itemIndex) => (
        <PaginationItem
          key={name}
          active={itemIndex === index}
          onClick={handleChangeIndex(itemIndex)}
          index={itemIndex}
          aria-label={`Testimonial from ${name}`}
        />
      ))}
    </Box>
  );
};

Pagination.propTypes = {
  references: PropTypes.array,
  onChangeIndex: PropTypes.func,
  index: PropTypes.number
};

Pagination.whyDidYouRender = true;

export default Pagination;