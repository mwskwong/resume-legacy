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
        sizeLarge: {
          padding: "1rem 1.25rem",
          ...theme.typography.body1,
          lineHeight: 21 / 16,
          fontWeight: 700
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
          bottom: 20,
          right: 20,
          borderRadius: 10,
          boxShadow: "none",
          "&:active": {
            boxShadow: "none"
          }
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
          color: theme.palette.mode === "light" ? nord6 : nord3,
          boxShadow: "none"
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
    MuiTimelineItem: {
      styleOverrides: {
        positionRight: {
          "&.MuiTimelineItem-missingOppositeContent": {
            "&::before": {
              display: "none"
            }
          },
          "& > .MuiTimelineContent-positionRight": {
            paddingRight: 0
          }
        }
      }
    },
    MuiTextField: {
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
    }
  }
});

export default getThemedComponents;