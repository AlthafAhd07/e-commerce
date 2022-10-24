import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/userCart/cartSlice";
import authReducer from "../features/userAuth/authSlice";

export const store = configureStore({
  reducer: {
    userCart: cartReducer,
    authUser: authReducer,
  },
});
