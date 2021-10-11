import { graphql, useStaticQuery } from "gatsby";

import Email from "components/icons/Email";
import Location from "components/icons/Location";
import Mobile from "components/icons/Mobile";
import PersonalInfoItem from "./PersonalInfoItem";
import { Stack } from "@mui/material";
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
  const { allContentfulContact } = useStaticQuery(graphql`{
    allContentfulContact {
      edges {
        node {
          email
          phone
          address
        }
      }
    }
  }`);

  const contact = allContentfulContact.edges[0].node;

  return (
    <Stack spacing={3} sx={sx.root}>
      {Object.entries(contactTemplate).map(([key, { Icon, title }]) => (
        <PersonalInfoItem
          key={key}
          Icon={Icon}
          title={title}
          value={contact[key]}
        />
      ))}
    </Stack>
  );
};

PersonalInfo.whyDidYouRender = true;

export default PersonalInfo;