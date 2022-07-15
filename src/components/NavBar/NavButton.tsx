import { Box, Button } from "@mui/material";
import React, { FC, memo } from "react";

import { SectionId } from "types";
import useSx from "./useNavButtonSx";

interface NavButtonProps {
  label: string,
  id: SectionId,
  active: boolean
}

const NavButton: FC<NavButtonProps> = ({ label, id, active }) => {
  const sx = useSx(active);

  return (
    <Button color={active ? "primary" : "inherit"} href={`#${id}`}>
      {label}
      <Box component="span" sx={sx.active} />
    </Button>
  );
};

NavButton.whyDidYouRender = true;

export default memo(NavButton);