import { createTheme } from "@mui/material/styles";

let mainTheme = createTheme({
  // The colour palette of the app.
  palette: {
    primary: {
      main: "#42AAF5",
    },
    secondary: {
      main: "#FFFFFF",
    },
    font: {
      main: "#808080"
    },
    background: {
      main: "#fffefa",
    },
    dark: {
      main: "#202020"
    }
  },

  // Viewport width breakpoints in pixels
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },

  // Default fonts
  typography: {
    fontFamily: ["sans-serif"].join(","),
  },
});

// Component overrides
mainTheme = createTheme(mainTheme, {
  components: {
    // Remove box shadow from header
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },

    /* Set the default maxwidth of all containers to 'xl' for consistent layout
          and removes default padding*/
    MuiContainer: {
      defaultProps: {
        maxWidth: "xl",
        disableGutters: true,
      },
    },

    // Set background colour of tabs and bottom indicator height
    MuiTabs: {
      styleOverrides: {
        root: {
        },
        indicator: {
          height: '5px',
        }
      }
    },

    // Selected tab color, text color and font size overrides
    MuiTab: {
      styleOverrides: {
        root: {
          
    
        }
      }
    },
  },
});

export { mainTheme };
