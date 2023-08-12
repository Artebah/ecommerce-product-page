import React from "react";
//mui
import { Container } from "@mui/material";
//components
import { Header } from "../Header";
import { Main } from "../Main";

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
      <Main />
    </Container>
  );
};

export { Layout };
