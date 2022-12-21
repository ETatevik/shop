import {data} from "../utils/config";

const {createSlice} = require("@reduxjs/toolkit");

const initialState = {
    productLists : [...data],
    editProduct: {}
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
        },
        setEditProduct(state, {payload}) {
            state.editProduct = state.productLists.find(({id}) => id === payload);
        },
        saveEditProduct(state, {payload}) {
            state.productLists = state.productLists.map( item => {
                if(item.id === payload.id) {
                    Object.keys(payload).forEach((key) => {
                        item[key] = payload[key];
                    });
                }
            });
            state.editProduct = {};
        },
        cancelEditProduct(state) {
            state.editProduct = {};
        }
    },
})

export const {addProduct, removeProduct, removeAllProducts, setEditProduct, saveEditProduct, cancelEditProduct} = productsSlice.actions;

export default productsSlice.reducer;