import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
};

const order = createSlice({
    name:"order",
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.data.push(action.payload);
        },
        changeOrderData: (state, action) => {
            state.data = action.payload
        },
        removeOrderData: (state) => {
            state.data = []
        },
    }
})
export const { addOrder, changeOrderData, removeOrderData } = order.actions;
export default order.reducer;