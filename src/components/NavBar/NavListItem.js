import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import React, { memo } from "react";

import PropTypes from "prop-types";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={`#${id}`} selected={active}>
        <ListItemText
          primary={label}
          primaryTypographyProps={primaryTypographyProps}
        />
      </ListItemButton>
    </ListItem>
  );
};

NavListItem.propTypes = {
  label: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  id: PropTypes.string
};

NavListItem.whyDidYouRender = true;

export default memo(NavListItem);