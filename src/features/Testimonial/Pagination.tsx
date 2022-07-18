import React, { FC } from "react";

import { Box } from "@mui/material";
import PaginationItem from "./PaginationItem";
import ReferenceProps from "./ReferenceProps";
import useSx from "./usePaginationSx";

type PaginationProps = {
  references?: ReferenceProps[],
  onChangeIndex: (index: number) => void,
  index: number
}

const Pagination: FC<PaginationProps> = ({ references = [], onChangeIndex, index }) => {
  const sx = useSx();
  const handleChangeIndex = (index: number) => () => onChangeIndex && onChangeIndex(index);

  return (
    <Box sx={sx.root}>
      {references.map(({ name }, itemIndex) => (
        <PaginationItem
          key={name}
          active={itemIndex === index}
          onClick={handleChangeIndex(itemIndex)}
          aria-label={`Testimonial from ${name}`}
        />
      ))}
    </Box>
  );
};

if (process.env.NODE_ENV === "development") Pagination.whyDidYouRender = true;

export default Pagination;