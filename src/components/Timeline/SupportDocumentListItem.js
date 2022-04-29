import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material";

import PropTypes from "prop-types";
import useSx from "./useSupportDocumentListItemSx";

const SupportDocumentListItem = ({ supportDocument: { title, url, thumbnail } }) => {
  const image = getImage(thumbnail);
  const theme = useTheme();
  const sx = useSx();
  const gatsbyImageStyle = { borderRadius: theme.shape.borderRadius };

  return (
    <ListItem disablePadding>
      <ListItemButton sx={sx.button} component="a" href={url}>
        <ListItemAvatar sx={sx.avatar}>
          <GatsbyImage
            image={image}
            alt={`Thumbnail of ${title}`}
            style={gatsbyImageStyle}
          />
        </ListItemAvatar>
        <ListItemText sx={sx.text} primary={title} />
      </ListItemButton>
    </ListItem>
  );

};

SupportDocumentListItem.propTypes = {
  supportDocument: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired
  })
};
SupportDocumentListItem.whyDidYouRender = true;

export default SupportDocumentListItem;