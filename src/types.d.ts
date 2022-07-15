import { SxProps, Theme } from "@mui/material";

export type SectionId = "home" | "about" | "work" | "education" | "testimonial" | "contact"

export type SectionProps = { sx: SxProps<Theme> }

export type UseSx = (sx?: SxProps<Theme>) => {
  [key: string]: SxProps<Theme> | undefined
}
