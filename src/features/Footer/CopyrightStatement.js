import { graphql, useStaticQuery } from "gatsby";

import { Typography } from "@mui/material";
import useSx from "./useCopyrightStatementSx";

const CopyrightStatement = () => {
  const sx = useSx();
  const year = new Date().getFullYear();
  const { name } = useStaticQuery(graphql`{
    name: contentfulName {
      firstName
      middleName
      lastName
    }
  }`);
  const statement = `Copyright © ${year} ${name.lastName.toUpperCase()}, ${name.firstName} ${name.middleName}.`;

  return (
    <Typography sx={sx.root} variant="body2">
      {statement}
    </Typography>
  );
};

CopyrightStatement.whyDidYouRender = true;

export default CopyrightStatement;