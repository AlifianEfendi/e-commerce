import { legacy_createStore } from "redux";

// * Reducer
const cartReducer = (state = {
    cart: [],
}, action) => {
    switch (action.type) {
        case "ADD_TO_CART" :
            return {
                ...state, 
                cart: [...state.cart, action.payload]
            }
        case "REMOVE_FROM_CART" :
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            }
        default :
        return state
    }
}
// * Store
const store = legacy_createStore(cartReducer);

console.log("onCreate store", store.getState());

// * Subscribe
store.subscribe(() => {
    console.log("Store changed", store.getState());
})

// * Dispatch
store.dispatch({ type: "ADD_TO_CART", payload: { id: 2, qty: 20 } });
store.dispatch({ type: "ADD_TO_CART", payload: { id: 5, qty: 3 } });
store.dispatch({ type: "REMOVE_FROM_CART", payload: 2 });