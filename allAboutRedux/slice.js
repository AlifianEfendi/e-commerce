import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            state.push(action.payload);
        },
        removeFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        }
    }
});


const store = configureStore({
    reducer: cartSlice.reducer,
});

console.log("onCreate store", store.getState());

store.subscribe(() => {
    console.log("Store changed", store.getState());
})

const { addToCart, removeFromCart } = cartSlice.actions;

store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(addToCart({ id: 5, qty: 3 }));
store.dispatch(removeFromCart(2));