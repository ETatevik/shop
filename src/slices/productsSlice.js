import {data} from "../utils/config";

const {createSlice} = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name: 'products',
    initialState: data,
    reducers: {
        addProduct(state, {payload}) {
            state.push(...payload);
        },
        removeProduct(state, {payload}) {
            return state.filter(({id}) => id !== payload);
        },
        removeAllProducts() {
            return [];
        }
    },
})

export const {addProduct, removeProduct, removeAllProducts} = productsSlice.actions;

export default productsSlice.reducer;