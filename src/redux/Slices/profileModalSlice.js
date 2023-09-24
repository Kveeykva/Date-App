import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVisible: false,
};

const ProfileModal = createSlice({
  name: "modalx",
  initialState,
  reducers: {
    showModalx: (state) => {
      state.isVisible = true;
    },
    hideModalx: (state) => {
      state.isVisible = false;
    },
    toggleModalx: (state) => {
      state.isVisible = !state.isVisible;
    },
  },
});

export const { showModalx, hideModalx, toggleModalx } = ProfileModal.actions;
export default ProfileModal.reducer;
