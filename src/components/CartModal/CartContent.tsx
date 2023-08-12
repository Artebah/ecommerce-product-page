import React from "react";
//mui
import { Box, Typography, useTheme } from "@mui/material";
//components
import { OrangeButton } from "../OrangeButton";
//types
import { CartItem } from "./CartItem";
//hooks
import { useAppSelector } from "../../hooks";
//redux

function CartContent() {
  const theme = useTheme();
  const cartItems = useAppSelector((state) => state.cart.cartItems);

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
              <CartItem key={item.id} {...item} />
            ))}
          </Box>
          <OrangeButton onClick={() => {}}>Checkout</OrangeButton>
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
