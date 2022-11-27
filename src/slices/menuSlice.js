import {createSlice} from "@reduxjs/toolkit";
import {PAGE_IDS} from "../costansts";

const menuSlice = createSlice({
    name: 'menu',
    initialState: PAGE_IDS.ADMIN,
    reducers: {
        changeMenu(state, {payload}) {
            return payload;
        }
    }
});

export const {changeMenu} = menuSlice.actions;

export default menuSlice.reducer;