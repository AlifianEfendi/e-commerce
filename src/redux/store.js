import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./actions/cartSlice";

const store = configureStore({
    reducer: { cart: cartReducer }
})

console.log("onCreate store", store.getState());

store.subscribe(() => console.log("Store changed", store.getState()));

export default store;