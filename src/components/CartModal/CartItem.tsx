import React from "react";
//mui
import { Box, IconButton, Typography } from "@mui/material";
//images
import ProductImage from "../../assets/images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../../assets/images/icon-delete.svg";
import { CartItemType } from "../../types";

const CartItem: React.FC<CartItemType> = () => {
  return (
    <Box sx={{ display: "flex", gap: { sm: 2, xs: 1.5 }, alignItems: "center" }}>
      <Box
        component="img"
        sx={{ width: { sm: 60, xs: 40 }, borderRadius: 2 }}
        src={ProductImage}
        alt="product"
      />
      <Box sx={{ "&>p, &>span": { fontSize: { sm: 16, xs: 14 } }, flexGrow: 1 }}>
        <Typography>Fall Limited Edition Sneakers</Typography>
        <Typography>
          $125.00 x 3
          <Box component="span" sx={{ ml: 1, fontWeight: 700, color: "#000" }}>
            $375.00
          </Box>
        </Typography>
      </Box>
      <IconButton size="large">
        <img src={DeleteIcon} alt="delete" />
      </IconButton>
    </Box>
  );
};

export { CartItem };
