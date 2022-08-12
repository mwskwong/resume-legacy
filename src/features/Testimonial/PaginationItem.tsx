import { Box, Button, ButtonProps } from "@mui/material";
import React, { FC } from "react";

import useSx from "./usePaginationItemSx";

type PaginationItemProps = ButtonProps & {
  active: boolean
}

const PaginationItem: FC<PaginationItemProps> = ({ active = false, ...props }) => {
  const sx = useSx(active);

  return (
    <Button color={active ? "primary" : "inherit"} sx={sx.root} {...props}>
      <Box component="span" sx={sx.item} />
    </Button>
  );
};

if (process.env.NODE_ENV === "development") PaginationItem.whyDidYouRender = true;

export default PaginationItem;