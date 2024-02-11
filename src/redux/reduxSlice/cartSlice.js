import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart", // State
  initialState: {
    data: JSON.parse(localStorage.getItem("cart")) || [], // value state
  },
  // Reducer
  reducers: {
    // action
    addToCart: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id); // find item
      // Cek item apakah sudah ada, jika ada tinggal qty ditambah, jika belum buat item
      if (item) {
        item.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
    minusTocart: (state, action) => {
      const item = state.data.find((item) => item.id === action.payload.id); // find item
      // Cek item apakah sudah ada, jika ada tinggal qty ditambah, jika belum buat item
      if (item) {
        if (item.qty !== 0) item.qty--; // Akan terus mengurangi smpai qty tidak sama dengan nol
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart, minusTocart } = cartSlice.actions; // export action
export default cartSlice.reducer; // export reducer
