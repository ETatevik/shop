import productsSlice from "./slices/productsSlice";
import {configureStore} from "@reduxjs/toolkit";
import menuSlice from "./slices/menuSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        menu: menuSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export default store;