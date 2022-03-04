import { alpha } from "@mui/system";

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
        section: {
          scrollMarginTop: "56px",
          [`@media (min-width: ${theme.breakpoints.values.xs}px) and (orientation: landscape)`]: {
            scrollMarginTop: "48px"
          },
          [`@media (min-width: ${theme.breakpoints.values.sm}px)`]: {
            scrollMarginTop: "64px"
          },
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
        color: "primary",
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
          backgroundColor: theme.palette.background.sectionPrimary,
          "&:hover": {
            backgroundColor: theme.palette.background.sectionPrimary
          }
        }
      }
    },
    MuiFormControl: {
      defaultProps: {
        variant: "filled",
        color: "primary"
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          textTransform: "capitalize"
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: theme.shape.borderRadius
        }
      }
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.text.primary,
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