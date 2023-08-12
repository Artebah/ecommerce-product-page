import React from "react";
//mui
import { Box, IconButton, Typography } from "@mui/material";
//images
import DeleteIcon from "../../assets/images/icon-delete.svg";
import { CartItemType } from "../../types";
//hooks
import { useAppDispatch } from "../../hooks";
import { removeItemFromCart } from "../../redux/slices/cartSlice";

const CartItem: React.FC<CartItemType> = ({ id, count, img, name, price }) => {
  const dispatch = useAppDispatch();

  const deleteItemFromCartHandler = () => {
    setTimeout(() => {
      dispatch(removeItemFromCart(id));
    }, 0);
  };

  return (
    <Box sx={{ display: "flex", gap: { sm: 2, xs: 1.5 }, alignItems: "center" }}>
      <Box
        component="img"
        sx={{ width: { sm: 60, xs: 40 }, borderRadius: 2 }}
        src={img}
        alt="product"
      />
      <Box sx={{ "&>p, &>span": { fontSize: { sm: 16, xs: 14 } }, flexGrow: 1 }}>
        <Typography>{name}</Typography>
        <Typography>
          ${price} x {count}
          <Box component="span" sx={{ ml: 1, fontWeight: 700, color: "#000" }}>
            ${price * count}
          </Box>
        </Typography>
      </Box>
      <IconButton onClick={deleteItemFromCartHandler} size="large">
        <img src={DeleteIcon} alt="delete" />
      </IconButton>
    </Box>
  );
};

export { CartItem };
