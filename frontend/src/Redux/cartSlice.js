import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalProducts: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const exists = state.products.find(
        (item) => item.title === action.payload.title
      );
      if (exists) {
        exists.quantity++;
        state.totalProducts++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalProducts++;
      }
    },

    increaseAmount: (state, action) => {
      const item = state.products.find((item) => item.title === action.payload);
      if (item) {
        item.quantity++;
        state.totalProducts++;
      }
    },

    decreaseAmount: (state, action) => {
      const item = state.products.find((item) => item.title === action.payload);
      if (item) {
        item.quantity--;
        state.totalProducts--;
      }
    },

    removeBook: (state, action) => {
      state.products = state.products.filter(
        (item) => item.title !== action.payload
      );
      state.totalProducts--;
    },

    updateTotalAmt: (state, action) => {
      let totalAmt = 0;

      state.products.forEach((elem) => {
        // quantity += elem.quantity;
        totalAmt += elem.quantity * elem.price;
      });

      state.total = totalAmt;
    },

    emptyCart: (state, action) => {
      state.products = [];
      state.total = 0;
      state.totalProducts = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  increaseAmount,
  decreaseAmount,
  removeBook,
  updateTotalAmt,
  emptyCart,
} = cartSlice.actions;
