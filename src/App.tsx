import React from "react";
//redux
import { Provider } from "react-redux";
import store from "./redux/store";
//mui
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
// components
import { Layout } from "./components/Layout";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
