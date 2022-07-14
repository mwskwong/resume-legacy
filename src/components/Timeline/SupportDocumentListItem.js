import * as styles from "./support-document-list-item.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";

import PropTypes from "prop-types";
import React from "react";
import useSx from "./useSupportDocumentListItemSx";

const SupportDocumentListItem = ({ supportDocument: { title, url, thumbnail } }) => {
  const image = getImage(thumbnail);
  const sx = useSx();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url} sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          <GatsbyImage
            image={image}
            alt={`Thumbnail of ${title}`}
            className={styles.thumbnail}
          />
        </ListItemAvatar>
        <ListItemText primary={title} />
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