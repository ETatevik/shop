import productsSlice from "./slices/productsSlice";
import {configureStore} from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";
import productModalSlice from "./slices/productModalSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        menu: menuSlice,
        productModal: productModalSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;