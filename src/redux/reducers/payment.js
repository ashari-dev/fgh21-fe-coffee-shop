import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quantity: 0,
    size: "",
    variant: "",
    productId: "",
};

const payment = createSlice({
    name:"payment",
    initialState,
    reducers: {
        addQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        addSize: (state, action) => {
            state.size = action.payload;
        },
        addVariant: (state, action) => {
            state.variant = action.payload;
        },
        addProductId: (state, action) => {
            state.productId = action.payload;
        },
        removeData: (state) => {
            state.quantity =  0;
            state.size =  "";
            state.variant =  "";
            state.productId = "";
        },
    }
})
export const { addQuantity, addSize, addVariant, addProductId, removeData} = payment.actions;
export default payment.reducer;