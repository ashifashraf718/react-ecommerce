import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.cartData.push(action.payload);

      console.log("add to cart :", action);
    },
    removeFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        (item) => item.id !== action.payload
      );
      console.log("remove from cart :", action);
    },
    removeAllCart: (state, action) => {
      state.cartData = [];
    },
  },
});
export const { addToCart, removeFromCart, removeAllCart } = cartSlice.actions;
export default cartSlice.reducer;
