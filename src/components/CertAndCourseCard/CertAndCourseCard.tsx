import { Card, CardActionArea, CardContent, SvgIconProps, Typography } from "@mui/material";
import React, { ElementType, FC } from "react";

import EnterpriseDB from "components/icons/EnterpriseDB";
import Microsoft from "components/icons/Microsoft";
import MongoDB from "components/icons/MongoDB";
import Oracle from "components/icons/Oracle";
import Udemy from "components/icons/Udemy";
import camelCase from "camelcase";
import useSx from "./useSx";

type CertAndCourseCardProps = {
  name: string,
  organization: string,
  status?: string,
  certificationUrl?: string
}

const Icons: Record<string, ElementType<SvgIconProps>> = {
  microsoft: Microsoft,
  oracle: Oracle,
  udemy: Udemy,
  enterpriseDb: EnterpriseDB,
  mongoDb: MongoDB
};

const CertAndCourseCard: FC<CertAndCourseCardProps> = ({ name, organization, status, certificationUrl }) => {
  const sx = useSx();
  const organizationCamelCase = camelCase(organization);
  const Icon = Icons[organizationCamelCase];
  const cardContent = (
    <CardContent sx={sx.cardContent}>
      {Icon && <Icon fontSize="large" sx={sx.icon} />}
      <div>
        <Typography>{name}</Typography>
        <Typography variant="body2" color={`${organizationCamelCase}.main`}>{organization}</Typography>
        {status && <Typography variant="body2" sx={sx.status}>{status}</Typography>}
      </div>
    </CardContent>
  );

  return (
    <Card>
      {certificationUrl
        ? (
          <CardActionArea href={certificationUrl} target="_blank">
            {cardContent}
          </CardActionArea>
        )
        : cardContent
      }
    </Card>
  );
};

if (process.env.NODE_ENV === "development") CertAndCourseCard.whyDidYouRender = true;

export default CertAndCourseCard;