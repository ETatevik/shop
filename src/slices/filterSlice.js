import {createSlice} from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filterSlice",
    initialState: '',
    reducers: {
        filterBy(state, {payload}){
            return payload;
        }
    }
});

export const {filterBy} = filterSlice.actions;

export default filterSlice.reducer;