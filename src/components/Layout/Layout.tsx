import React from "react";
//mui
import { Container } from "@mui/material";
//components
import { Header } from "../Header";

const Layout = () => {
  return (
    <Container maxWidth="xl">
      <Header />
    </Container>
  );
};

export { Layout };
