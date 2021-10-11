import { Typography } from "@mui/material";
import useSx from "./useCopyrightStatementSx";

const CopyrightStatement = () => {
  const sx = useSx();
  const year = new Date().getFullYear();
  const statement = `Copyright © ${year} KWONG, Matthew Wang Shun.`;

  return (
    <Typography sx={sx.root} variant="body2">
      {statement}
    </Typography>
  );
};

CopyrightStatement.whyDidYouRender = true;

export default CopyrightStatement;