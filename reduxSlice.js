import { configureStore, createSlice } from "@reduxjs/toolkit";

// REDUCER, STATE AND ACTION
const cartSlice = createSlice({
  name: "cart", // nama state
  initialState: [], // value state
  reducers: {
    // addToCart adalah sebuah action
    // Data action itu diambil dari dispacth
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

// STORE
const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
console.log("on create Store:", store.getState());

// SUBSCRIBE
store.subscribe(() => {
  console.log("store change:", store.getState());
});

// EVENT HANDLE / DISPATCH
store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 20 }));
