import { Box, Stack, Typography } from "@mui/material";
import { EmailRounded as Email, LocationOnRounded as Location, PhoneAndroidRounded as Mobile } from "@mui/icons-material";
import React, { memo } from "react";
import { graphql, useStaticQuery } from "gatsby";

import useSx from "./usePersonalInfoSx";

const contactTemplate = {
  phone: {
    Icon: Mobile,
    title: "Call Me On"
  },
  email: {
    Icon: Email,
    title: "Email Me At"
  },
  address: {
    Icon: Location,
    title: "Find Me At"
  }
};

const PersonalInfo = () => {
  const sx = useSx();
  const { contact } = useStaticQuery<Queries.PersonalInfoQuery>(graphql`
    query PersonalInfo {
      contact: contentfulContact {
        address
        email
        phone
      }
    }
  `);

  return (
    <Stack spacing={3} sx={sx.root}>
      {
        (
          Object.entries(contactTemplate) as
          [
            keyof typeof contactTemplate,
            typeof contactTemplate[keyof typeof contactTemplate]
          ][]
        ).map(([key, { Icon, title }]) => (
          <Box key={key} sx={sx.itemContainer}>
            <Icon fontSize="large" />
            <Typography component="div" sx={sx.title} gutterBottom>
              {title}
            </Typography>
            <Typography component="div" sx={sx.value}>
              {contact?.[key]}
            </Typography>
          </Box>
        ))
      }
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default memo(PersonalInfo);