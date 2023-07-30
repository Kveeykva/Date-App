import { configureStore } from "@reduxjs/toolkit";
import homeCarousel from "./Slices/carouselSlice";
import accountSlice from "./Slices/accountSlice";
import settingsSlice from "./Slices/settingsSlice";

export const store = configureStore({
  reducer: {
    carousel: homeCarousel,
    account: accountSlice,
    settings: settingsSlice,
  },
});
