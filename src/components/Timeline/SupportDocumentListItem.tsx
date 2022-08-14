import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, useTheme } from "@mui/material";
import React, { CSSProperties, FC } from "react";

import SupportDocument from "./SupportDocument";
import useSx from "./useSupportDocumentListItemSx";

type SupportDocumentListItemProps = {
  supportDocument: SupportDocument
}

const SupportDocumentListItem: FC<SupportDocumentListItemProps> = ({ supportDocument: { title, url, thumbnail } }) => {
  const image = getImage(thumbnail);
  const sx = useSx();
  const theme = useTheme();
  const gatsbyImageStyle: CSSProperties = { borderRadius: theme.shape.borderRadius };

  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href={url ?? undefined} target="_blank" sx={sx.button}>
        <ListItemAvatar sx={sx.avatar}>
          {
            image && (
              <GatsbyImage
                image={image}
                alt={`Thumbnail of ${title}`}
                style={gatsbyImageStyle}
              />
            )

          }
        </ListItemAvatar>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );

};

if (process.env.NODE_ENV === "development") SupportDocumentListItem.whyDidYouRender = true;

export default SupportDocumentListItem;