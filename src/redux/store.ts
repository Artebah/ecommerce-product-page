import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
