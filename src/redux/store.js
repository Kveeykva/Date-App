import { configureStore } from "@reduxjs/toolkit";
import homeCarousel from "./Slices/carouselSlice";
import accountSlice from "./Slices/accountSlice";

export const store = configureStore({
  reducer: {
    carousel: homeCarousel,
    account: accountSlice,
  },
});
