import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/userCart/cartSlice";
import authReducer from "../features/userAuth/authSlice";
import productReducer from "../features/products/productSlice";
export const store = configureStore({
  reducer: {
    userCart: cartReducer,
    authUser: authReducer,
    allProducts: productReducer,
  },
});
