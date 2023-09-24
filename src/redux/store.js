import { configureStore } from "@reduxjs/toolkit";
import homeCarousel from "./Slices/carouselSlice";
import accountSlice from "./Slices/accountSlice";
import settingsSlice from "./Slices/settingsSlice";
import modalSlice from "./Slices/modalSlice";
import modalxSlice from "./Slices/profileModalSlice";

export const store = configureStore({
  reducer: {
    carousel: homeCarousel,
    account: accountSlice,
    settings: settingsSlice,
    modal: modalSlice,
    modalx: modalxSlice,
  },
});
