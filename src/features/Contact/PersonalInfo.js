import { Box, Stack, Typography } from "@mui/material";
import { EmailRounded as Email, LocationOnRounded as Location, PhoneAndroidRounded as Mobile } from "@mui/icons-material";
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
  const { contact } = useStaticQuery(graphql`{
    contact: contentfulContact {
      address
      email
      phone
    }
  }`);

  return (
    <Stack spacing={3} sx={sx.root}>
      {Object.entries(contactTemplate).map(([key, { Icon, title }]) => (
        <Box key={key} sx={sx.itemContainer}>
          <Icon fontSize="large" color="action" />
          <Typography component="div" sx={sx.title} gutterBottom>
            {title}
          </Typography>
          <Typography component="div" sx={sx.value}>
            {contact[key]}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;