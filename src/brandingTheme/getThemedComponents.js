import { nord3, nord6 } from "./nord";

import { alpha } from "@mui/system";

const getThemedComponents = theme => ({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.background.default, .72),
          backdropFilter: "blur(20px)",
          boxShadow: `inset 0px -1px 1px ${theme.palette.grey[100]}`,
          color: theme.palette.text.primary
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        textSizeMedium: {
          paddingLeft: 16,
          paddingRight: 16
        },
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
        section: {
          "@media (min-width: 0px) and (orientation: landscape)": {
            scrollMarginTop: "48px"
          },
          [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            scrollMarginTop: "64px"
          },
          scrollMarginTop: "56px",
          paddingTop: theme.spacing(10),
          paddingBottom: theme.spacing(10)
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
        color: "secondary"
      },
      styleOverrides: {
        root: {
          "@media (min-width: 0px) and (orientation: landscape)": {
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
          backgroundColor: theme.palette.mode === "light" ? theme.palette.common.black : theme.palette.common.white,
          color: theme.palette.mode === "light" ? nord6 : nord3
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