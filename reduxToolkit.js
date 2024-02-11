import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

// ACTION
const addToCart = createAction("ADD_TO_CART");
const login = createAction("CREATE_SESSION");

// REDUCER
// const initialState = {
//   login: false,
//   cart: [],
// };

const cartReducer = createReducer([], (builder) => {
  // addCase cara kerja nya hampir sama dengan switch seperti di file redux.js
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload); // Cara pertama
    //  state.cart = [...state.cart, action.payload]; // Cara kedua
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  // addCase cara kerja nya hampir sama dengan switch seperti di file redux.js
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

// STORE
const store = configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
console.log("on create Store:", store.getState());

// SUBSCRIBE
// subscribe berguna untuk mengecek apakah ada perubahan state
store.subscribe(() => {
  console.log("store change:", store.getState());
});

// DISPATCH
// const action1 = addToCart({ id: 2, qty: 20 }); // Cara Pertama
// Cara kedua, addToCart langsung di masukkan ke dalam dispacth
store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login());
