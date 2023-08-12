import { createTheme, responsiveFontSizes } from "@mui/material";

export let theme = createTheme({
  typography: {
    fontFamily: "Kumbh Sans",
  },
  palette: {
    primary: {
      main: "#FF7D1B",
      light: "#FFAC6A",
    },
    text: {
      primary: "#68707D",
    },
    action: {
      disabled: "#B9B9C4",
    },
  },
  breakpoints: {
    values: {
      xl: 1440,
      lg: 1200,
      md: 900,
      sm: 600,
      xs: 0,
    },
  },
});

theme = responsiveFontSizes(theme);

console.log(theme.breakpoints.values);
