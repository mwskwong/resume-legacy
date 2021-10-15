import { ListItem, ListItemButton, ListItemText } from "@mui/material";

import PropTypes from "prop-types";
import { memo } from "react";
import useSx from "./useNavListItemSx";

const NavListItem = ({ label, id, active }) => {
  const sx = useSx({ active });
  const primaryTypographyProps = { sx: sx.textPrimary };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={sx.root} component="a" href={`#${id}`} selected={active}>
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