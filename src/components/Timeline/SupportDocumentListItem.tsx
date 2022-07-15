import * as styles from "./support-document-list-item.module.css";

import { GatsbyImage, ImageDataLike, getImage } from "gatsby-plugin-image";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React, { FC } from "react";

import useSx from "./useSupportDocumentListItemSx";

interface SupportDocumentListItemProps {
  supportDocument: {
    title: string,
    url: string,
    thumbnail: ImageDataLike
  }
}

const SupportDocumentListItem: FC<SupportDocumentListItemProps> = ({ supportDocument: { title, url, thumbnail } }) => {
  const image = getImage(thumbnail);
  const sx = useSx();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url} sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          {
            image && (
              <GatsbyImage
                image={image}
                alt={`Thumbnail of ${title}`}
                className={styles.thumbnail}
              />
            )

          }
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );

};

SupportDocumentListItem.whyDidYouRender = true;

export default SupportDocumentListItem;