import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';
import {createTheme} from '@mui/material'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 960,
      lg: 1200,
      xl: 1440,
      xxl: 1920
    },
  },
  palette: {
    primary: {
      main: "#e4002b"
    },
    text: {
      primary: "#000"
    }
  },
  typography: {
    fontFamily: "din-2014",
  },
  spacing: 5
})

const themeOption: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          overflowX: "hidden",
        },
        body: {
          overflowX: "hidden",
          position: 'relative',
          marginBottom: "100vh",
          minHeight: "100vh",
          background: "white"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          disableRipple: true,
          fontSize: "16px",
          letterSpacing: "2.56px",
          lineHeight: "1",
          fontWeight: 600,
        },
        text: {
          position: "relative",
          padding: "0",
          lineHeight: "1.8",
          overflowX: "hidden",
          span: {
            display: "inline-block",
            transition: "transform .3s cubic-bezier(0.76, 0, 0.24, 1)"
          },
          "&:after, &:before": {
            content: `''`,
            position: "absolute",
            width: "100%",
            left: 0,
          },
          "&:before": {
            backgroundColor: theme.palette.primary.main,
            height: "2px",
            bottom: 0,
            transformOrigin: "100% 50%",
            transform: "scaleX(0)",
            transition: "transform .3s cubic-bezier(0.76, 0, 0.24, 1)",
          },
          "&:after": {
            content: "attr(data-replace)",
            height: "100%",
            top: 0,
            transformOrigin: "100% 50%",
            transform: "translate3d(200%, 0, 0)",
            transition: "transform .3s cubic-bezier(0.76, 0, 0.24, 1)",
            color: theme.palette.primary.main,
          },
          "&:hover": {
            backgroundColor: "transparent",
            span: {
              transform: "translate3d(-200%, 0, 0)"
            },
            "&:before": {
              transformOrigin: "0% 50%",
              transform: "scaleX(1)"
            },
            "&:after": {
              transform: "translate3d(0, 0, 0)",
            }
          },
        },
        startIcon: {
          marginRight: "11px",
          transition: 'all .5s ease',
          transform: "scale(1)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "solid 1.5px rgba(228, 0, 43, 0.3)",
          display: "flex",
          "*:nth-of-type(1)": {
            fontSize: '18px',
            margin: "auto",
            transition: 'all .5s ease',
          },
          "&:hover": {
            transform: "scale(1.1)",
          }
        }
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            borderRadius: "0",
            minWidth: "300px",
            minHeight: "70px",
            boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
            transition: 'transform .3s ease',
            transform: "scale(1)",
            paddingLeft: "50px",
            paddingRight: "50px",
            "span": {
              transition: 'transform .3s ease',
            },
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: theme.palette.primary.main,
              "span:first-of-type": {
                transform: "scale(0.95)"
              }
            }
          },
        },
        {
          props: { variant: 'withIcon' },
          style: {
            color: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: "transparent",
              span: {
                transform: "scale(1.1)",
                marginRight: "15px",
                border: "solid 1.5px rgba(228, 0, 43, 1)",
                svg: {
                  transform: "scale(0.9)"
                }
              }
            }
          },
        },
      ],
    }
  },
  typography: {
    body1: {
      color: 'black',
      fontSize: "32px",
      lineHeight: "1.5",
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: '19px',
        lineHeight: "1.63"
      },
      ul: {
        li: {

        }
      },
      p: {
        a: {
          position: "relative",
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:after": {
            content: `""`,
            display: "block",
            position: "absolute",
            width: "100%",
            height: "1px",
            bottom: 0,
            left: 0,
            backgroundColor: theme.palette.primary.main,
          }
        },
        ul: {
          paddingLeft: 0,
          li: {
            listStyleType: "none",
            paddingLeft: "30px",
            position: "relative",
            p: {
              marginTop: 0,
              marginBottom: 0,
            },
            "&:before": {
              content: `''`,
              display: "block",
              position: "absolute",
              left: 0,
              top: "28px",
              width: "15px",
              height: "2px",
              backgroundColor: theme.palette.primary.main,
            }
          }
        },
      },
    },
    body2: {
      color: 'black',
      fontSize: "23px",
      lineHeight: "1.83",
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: "1.81"
      },
      p: {
        a: {
          position: "relative",
          color: theme.palette.primary.main,
          textDecoration: "none",
          "&:after": {
            content: `""`,
            display: "block",
            position: "absolute",
            width: "100%",
            height: "1px",
            bottom: 0,
            left: 0,
            backgroundColor: theme.palette.primary.main,
          }
        },
        ul: {
          paddingLeft: 0,
          li: {
            listStyleType: "none",
            paddingLeft: "30px",
            position: "relative",
            p: {
              marginTop: 0,
              marginBottom: 0,
            },
            "&:before": {
              content: `''`,
              display: "block",
              position: "absolute",
              left: 0,
              top: "23px",
              width: "15px",
              height: "2px",
              backgroundColor: theme.palette.primary.main,
            }
          }
        },
      },
    },
    h1: {
      fontSize: "94px",
      // fontSize: "3.7vw",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: 1,
      [theme.breakpoints.down('xxl')]: {
        fontSize: '86px'
      },
      [theme.breakpoints.down('xl')]: {
        fontSize: '70px'
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '58px'
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '35px'
      }
    },
    h2: {
      fontSize: "76px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px'
      }
    },
    h3: {
      fontSize: "45px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px'
      }
    },
    h4: {
      fontSize: "28px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: 1,
      [theme.breakpoints.down('sm')]: {
        fontSize: '20px'
      }
    },
    h5: {
      fontSize: "20px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: .9,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px'
      }
    },
  },
}

theme = createTheme(theme, themeOption)

export default theme;

declare module '@emotion/react' {
  export interface Theme extends MuiTheme {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    withIcon: true;
  }
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
  }
}