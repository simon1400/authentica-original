import { Theme as MuiTheme, ThemeOptions } from '@mui/material/styles';
import {createTheme, stepClasses} from '@mui/material'

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 940,
      lg: 1200,
      xl: 1440
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
        body: {
          overflowX: "hidden",
          position: 'relative',
          paddingBottom: "100vh",
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
          "&:after": {
            content: "''",
            display: "block",
            position: "absolute",
            width: "100%",
            height: "2px",
            backgroundColor: theme.palette.primary.main,
            bottom: "-10px",
            left: 0,
          },
          "&:hover": {
            backgroundColor: "transparent",
          },
        },
        startIcon: {
          marginRight: "11px",
          transition: 'transform .5s ease',
          transform: "scale(1)",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "solid 1.5px rgba(228, 0, 43, 0.3)",
          display: "flex",
          "*:nth-of-type(1)": {
            fontSize: '18px',
            margin: "auto",
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
            transition: 'transform .5s ease',
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.05)",
              backgroundColor: theme.palette.primary.main,
            }
          },
        },
        {
          props: { variant: 'withIcon' },
          style: {
            color: theme.palette.primary.main,
            
            "&:hover": {
              
              backgroundColor: "transparent",
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
    },
    body2: {
      color: 'black',
      fontSize: "23px",
      lineHeight: "1.83",
      fontFamily: theme.typography.fontFamily,
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
        lineHeight: "1.81"
      }
    },
    h1: {
      fontSize: "94px",
      fontFamily: theme.typography.fontFamily,
      fontWeight: 600,
      lineHeight: 1,
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