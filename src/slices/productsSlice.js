import {data} from "../utils/config";

const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    productLists : [...data]
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct(state, {payload}) {
            state.productLists.push(...payload);
        },
        removeProduct(state, {payload}) {
            state.productLists = state.productLists.filter(({id}) => id !== payload);
        },
        removeAllProducts(state) {
            state.productLists = [];
        }
    },
})

export const {addProduct, removeProduct, removeAllProducts} = productsSlice.actions;

export default productsSlice.reducer;