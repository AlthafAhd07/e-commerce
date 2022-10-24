import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
const productSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const selectProducts = (state) => state.allProducts;

export const { getAllProducts } = productSlice.actions;

export default productSlice.reducer;
