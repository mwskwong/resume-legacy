import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, TypographyProps } from "@mui/material";
import React, { ElementType, FC } from "react";

import MongoDB from "components/icons/MongoDB";
import camelCase from "camelcase";
import dateTimeFormat from "utils/dateTimeFormat";
import { nord14 } from "nord";
import useSx from "./useCertListItemSx";

type CertListItemProps = {
  name: string
  organization: string
  issuedDate?: string | null,
  expirationDate?: string | null,
  url?: string | null
}

const icons: Record<string, { ElementType: ElementType, color: string }> = {
  mongoDb: {
    ElementType: MongoDB,
    color: nord14
  }
};

const CertListItem: FC<CertListItemProps> = ({ name, organization, issuedDate, expirationDate, url }) => {
  const issued = issuedDate
    ? `Issued ${dateTimeFormat.format(new Date(issuedDate))}`
    : "In Progress";
  const expire = expirationDate
    ? `Expires ${dateTimeFormat.format(new Date(expirationDate))}`
    : "Never Expired";

  const icon = icons[camelCase(organization)];
  const sx = useSx(icon.color);

  const primaryTypographyProps: TypographyProps = {
    variant: "subtitle1"
  };
  const secondaryTypographyProps: TypographyProps = {
    variant: "body1",
    color: "textPrimary"
  };


  const content = (
    <>
      <ListItemIcon>
        {icon && <icon.ElementType sx={sx.icon} />}
      </ListItemIcon>
      <ListItemText
        primary={name}
        secondary={
          <>
            <Typography sx={sx.organization} component="span">
              {organization}
            </Typography>
            {`${issued}${issuedDate ? ` | ${expire}` : ""}`}
          </>
        }
        primaryTypographyProps={primaryTypographyProps}
        secondaryTypographyProps={secondaryTypographyProps}
      />
    </>
  );

  if (url) {
    return (
      <ListItem disablePadding>
        <ListItemButton component="a" href={url}>
          {content}
        </ListItemButton>
      </ListItem>
    );
  }

  return (
    <ListItem>
      {content}
    </ListItem>
  );
};

if (process.env.NODE_ENV === "development") CertListItem.whyDidYouRender = true;

export default CertListItem;