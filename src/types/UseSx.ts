import { SxProps, Theme } from "@mui/material";

interface UseSx {
  (args?: { sx: SxProps<Theme> }): {
    [key: string]: SxProps<Theme>
  }
}

export default UseSx;