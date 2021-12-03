import { alpha } from "@mui/system";
import { darkScrollbar } from "@mui/material";
import { nord6 } from "./nord";

const getThemedComponents = theme => ({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.background.default, .72),
          backdropFilter: "blur(20px)",
          boxShadow: "none",
          color: theme.palette.text.primary,
          backgroundImage: "none"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        sizeLarge: {
          padding: "1rem 1.25rem",
          ...theme.typography.body1,
          lineHeight: 21 / 16,
          fontWeight: theme.typography.fontWeightBold
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        "::selection": {
          backgroundColor: theme.palette.text.primary,
          color: theme.palette.background.default
        },
        html: {
          scrollBehavior: "smooth",
          "@media (prefers-reduced-motion)": {
            scrollBehavior: "auto"
          }
        },
        body: theme.palette.mode === "light" ? null : darkScrollbar(),
        section: {
          [`@media (min-width: ${theme.breakpoints.values.xs}px) and (orientation: landscape)`]: {
            scrollMarginTop: "48px"
          },
          [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            scrollMarginTop: "64px"
          },
          scrollMarginTop: "56px",
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10)
        },
        ".Typewriter": {
          display: "inline"
        }
      }
    },
    MuiFab: {
      defaultProps: {
        color: "secondary",
        size: "medium"
      },
      styleOverrides: {
        root: {
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
          borderRadius: theme.shape.borderRadius
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.background.sectionSecondary,
          "&:hover": {
            backgroundColor: theme.palette.background.sectionSecondary
          }
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
        color: theme.palette.mode === "light" ? "secondary" : "primary"
      },
      styleOverrides: {
        root: {
          [`@media (min-width: ${theme.breakpoints.values.xs}px) and (orientation: landscape)`]: {
            scrollMarginTop: "72px"
          },
          [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            scrollMarginTop: "88px"
          },
          scrollMarginTop: "80px"
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.black,
          color: nord6,
          backgroundImage: "none"
        }
      }
    },
    MuiTimeline: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0
        }
      }
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: "none"
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        color: "text.primary"
      }
    }
  }
});

export default getThemedComponents;