import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCarousel = createAsyncThunk(
  "carousel/fetchCarousel",
  async () => {
    try {
      const response = await fetch("http://192.168.1.32:3000/carousel");
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
);

export const carouselSlice = createSlice({
  name: "carousel",
  reducers: {},
  initialState: {
    carousel: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCarousel.fulfilled, (state, action) => {
      state.carousel = action.payload;
    });
  },
});

export const {} = carouselSlice.actions;

export const selectCarousel = (state) => state.carousel;

export default carouselSlice.reducer;
