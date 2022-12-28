import { configureStore } from "@reduxjs/toolkit";
import homeCarousel from "./Slices/carouselSlice";

export const store = configureStore({
  reducer: {
    carousel: homeCarousel,
  },
});
