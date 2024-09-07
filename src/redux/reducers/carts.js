import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
};

const carts = createSlice({
    name:"carts",
    initialState,
    reducers: {
        addCart: (state, action) => {
            state.data.push(action.payload);
        },
        changeData: (state, action) => {
            state.data = action.payload
        },
        removeData: (state) => {
            state.data = []
        },
    }
})
export const { addCart, changeData, removeData} = carts.actions;
export default carts.reducer;