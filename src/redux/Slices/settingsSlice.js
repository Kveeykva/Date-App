import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  reducers: {
    setAttribute(state, action) {
      state.settingsDetail = { ...state.settingsDetail, ...action.payload };
    },
  },
  initialState: {
    settingsDetail: {},
  },
});

export const { setAttribute } = settingsSlice.actions;

export const selectSettings = (state) => state.settings;

export default settingsSlice.reducer;
