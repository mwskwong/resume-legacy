import * as styles from "./support-document-list-item.module.css";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText } from "@mui/material";
import React, { FC } from "react";

import SupportDocument from "./SupportDocument";
import useSx from "./useSupportDocumentListItemSx";

type SupportDocumentListItemProps = {
  supportDocument: SupportDocument
}

const SupportDocumentListItem: FC<SupportDocumentListItemProps> = ({ supportDocument: { title, url, thumbnail } }) => {
  const image = thumbnail && getImage(thumbnail);
  const sx = useSx();

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url ?? undefined} sx={sx.button}>
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