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
        productId: action.payload.productId,
        count: action.payload.count,
      });
      state.productCount += 1;
    },
    addMultipleToCart: (state, action) => {
      state.products = action.payload;
      state.productCount = action.payload.length;
    },
  },
});

export const { addToCart, addMultipleToCart } = cartSlice.actions;

export const selectCart = (state) => state.userCart;

export default cartSlice.reducer;
