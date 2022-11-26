const {createSlice} = require("@reduxjs/toolkit");

const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        addProduct(state, {payload}) {
            state.push(...payload);
        },
        removeProduct(state, {payload}) {
            return state.filter(({id}) => id !== payload);
        },
    },
})

export const {addProduct, removeProduct} = productsSlice.actions;

export default productsSlice.reducer;