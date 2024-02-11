import { legacy_createStore } from "redux";

// REDUCER
// reducer berguna untuk menampung data
// didalam reducer akan mengolah data dan menginialisasi state dan juga terdapat sebuah action
const cartReducer = (
  state = {
    cart: [{ id: 1, qty: 1 }],
  },
  actions
) => {
  // parameter state berfungsi untuk menampung state
  // parameter actions terdapat type dan payload berfungsi untuk menampung tipe action dan data action nya
  switch (actions.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, actions.payload],
      };

    default:
      return state;
  }
};

// STORE
// store berguna untuk menghubungkan reducer dan menjadi wadah
const store = legacy_createStore(cartReducer);
console.log("on create Store:", store.getState());

// SUBSCRIBE
// subscribe berguna untuk mengecek apakah ada perubahan state
store.subscribe(() => {
  console.log("on subscribe:", store.getState());
});

// DISPATCH
// dispatch berguna untuk mengirimkan action/data
const action1 = {
  type: "ADD_TO_CART",
  payload: {
    id: 2,
    qty: 10,
  },
};
store.dispatch(action1);

const action2 = {
  type: "ADD_TO_CART",
  payload: {
    id: 3,
    qty: 5,
  },
};
store.dispatch(action2);
