import { SxProps, Theme } from "@mui/material";

export type SectionId = "home" | "about" | "work" | "certification" | "education" | "testimonial" | "contact"

export type SectionProps = { sx?: SxProps<Theme> }

export type UseSx = (sx?: SxProps<Theme>) => Record<string, SxProps<Theme> | typeof sx>
