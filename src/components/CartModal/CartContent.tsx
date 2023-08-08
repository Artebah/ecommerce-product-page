import React from "react";
//mui
import { Box, Typography, useTheme } from "@mui/material";
//components
import { OrangeButton } from "../OrangeButton";
//types
import { CartItemType } from "../../types";
import { CartItem } from "./CartItem";

function CartContent() {
  const theme = useTheme();
  const cartItems: CartItemType[] = [];

  return (
    <Box
      sx={{
        padding: theme.spacing(2),
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}>
      {cartItems.length ? (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cartItems.map((item) => (
              <CartItem {...item} />
            ))}
          </Box>
          <OrangeButton>Checkout</OrangeButton>
        </>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 100,
          }}>
          <Typography fontWeight={700}>Your cart is empty</Typography>
        </Box>
      )}
    </Box>
  );
}

export { CartContent };
