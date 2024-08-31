import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.data = action.payload;
    },
    editProfile: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addProfile, editProfile } = profile.actions;
export default profile.reducer;
