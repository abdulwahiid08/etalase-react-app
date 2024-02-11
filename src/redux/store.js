import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("On create Store:", store.getState());

store.subscribe(() => {
  console.log("Store Change : ", store.getState());
});

export default store;
