import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/counterSlice";

export const store = configureStore({
  reducer: {
    userCart: cartReducer,
  },
});
