import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/userCart/cartSlice";

export const store = configureStore({
  reducer: {
    userCart: cartReducer,
  },
});
