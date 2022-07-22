import React, { FC } from "react";

import { Box } from "@mui/material";
import PaginationItem from "./PaginationItem";
import useSx from "./usePaginationSx";

type PaginationProps = {
  onChangeIndex: (index: number) => void,
  index: number,
  count: number
}

const Pagination: FC<PaginationProps> = ({ onChangeIndex, index, count }) => {
  const sx = useSx();
  const handleChangeIndex = (index: number) => () => onChangeIndex && onChangeIndex(index);

  return (
    <Box sx={sx.root}>
      {Array(count).map((_, itemIndex) => (
        <PaginationItem
          key={itemIndex}
          active={itemIndex === index}
          onClick={handleChangeIndex(itemIndex)}
          aria-label={`Go to Page ${itemIndex}`}
        />
      ))}
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Pagination.whyDidYouRender = true;

export default Pagination;