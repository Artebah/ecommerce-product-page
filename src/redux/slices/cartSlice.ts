import { PayloadAction, createSlice, nanoid } from "@reduxjs/toolkit";
import { CartItemType } from "../../types";

interface InitialStateType {
  cartItems: CartItemType[];
}

const initialState: InitialStateType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: {
      prepare: (infoItem: CartItemType) => {
        return {
          payload: {
            ...infoItem,
            id: nanoid(),
          },
        };
      },
      reducer: (state, action: PayloadAction<CartItemType>) => {
        const newItem = action.payload;
        const dublicate = state.cartItems.find(
          (item) => item.img === newItem.img && item.name === newItem.name
        );

        if (dublicate) {
          dublicate.count = newItem.count;
        } else {
          state.cartItems.push(newItem);
        }
      },
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const newState = state.cartItems.filter((item) => item.id !== action.payload);

      return { cartItems: newState };
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
