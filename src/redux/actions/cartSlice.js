import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        data: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.data.find(item => item.id === action.payload.id);
            if(itemInCart) {
                itemInCart.qty += 1;
            } else {
                state.data.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            if(state.data.length === 1) localStorage.removeItem("cart");
            state.data = state.data.filter(item => item.id !== action.payload);
        }
    },
})

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;