import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Kumbh Sans",
  },
  palette: {
    primary: {
      main: "#FF7D1B",
      light: "#FFAC6A",
      "100": "#FCEEE3",
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

console.log(theme.breakpoints.values);
