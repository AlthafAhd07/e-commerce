import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  productCount: 0,
};

export const cartSlice = createSlice({
  name: "userCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.products.unshift({
        product: action.payload.product,
        count: action.payload.count,
      });
      state.productCount += 1;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.product.id !== action.payload
      );
      state.productCount -= 1;
    },
    addMultipleToCart: (state, action) => {
      state.products = action.payload;
      state.productCount = action.payload.length;
    },
    clearCart: (state) => {
      state = {
        products: [],
        productCount: 0,
      };
    },
  },
});

export const { addToCart, addMultipleToCart, clearCart, removeFromCart } =
  cartSlice.actions;

export const selectCart = (state) => state.userCart;

export default cartSlice.reducer;
