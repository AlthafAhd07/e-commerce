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
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
