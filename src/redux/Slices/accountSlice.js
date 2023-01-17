import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  reducers: {
    setAttribute(state, action) {
      state.userDetail = { ...state.userDetail, ...action.payload };
    },
  },
  initialState: {
    userDetail: undefined,
  },
});

export const { setAttribute } = accountSlice.actions;

export const selectAccount = (state) => state.account;

export default accountSlice.reducer;
