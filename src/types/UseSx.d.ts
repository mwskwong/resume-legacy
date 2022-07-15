import { SxProps, Theme } from "@mui/material";

type UseSx = (sx?: SxProps<Theme>) => {
  [key: string]: SxProps<Theme> | undefined
}

export default UseSx;