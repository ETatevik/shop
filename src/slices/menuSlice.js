import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: 'menu',
    initialState: 0,
    reducers: {
        changeMenu(state, {payload}) {
            return payload;
        }
    }
});

export const {changeMenu} = menuSlice.actions;

export default menuSlice.reducer;