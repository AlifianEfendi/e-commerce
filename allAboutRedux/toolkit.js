import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
    builder.addCase(addToCart, (state, action) => {
        state.push(action.payload);
    })
})

const login = createAction("CREATE_SESSION");

const loginReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true
    })
})

const logout = createAction("DESTROY_SESSION");

const logoutReducer = createReducer({ status: false }, (builder) => {
    builder.addCase(logout, (state, action) => {
        state.status = false
    })
})

const store = configureStore({
    reducer: {
        cart: cartReducer,
        login: loginReducer,
        logout: logoutReducer
    }
})

console.log("onCreate store", store.getState());

store.subscribe(() => {
    console.log("Store changed", store.getState());
})

store.dispatch(addToCart({ id: 2, qty: 20 }));
store.dispatch(login());
store.dispatch(logout());