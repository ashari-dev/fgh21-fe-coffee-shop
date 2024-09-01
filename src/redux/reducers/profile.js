import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
    },
    editProfile: (state, action) => {
      state.data = action.payload;
    },
  },
});
export const { addData, editProfile } = profile.actions;
export default profile.reducer;
