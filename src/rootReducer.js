
import productsSlice from "./slices/productsSlice";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        products: productsSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;