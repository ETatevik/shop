import {createSlice} from "@reduxjs/toolkit";

const productModalSlice = createSlice({
    name: "productModal",
    initialState: false,
    reducers: {
        toggleModal(state, {payload}){
            return payload;
        }
    }
});

export const {toggleModal} = productModalSlice.actions;

export default productModalSlice.reducer;