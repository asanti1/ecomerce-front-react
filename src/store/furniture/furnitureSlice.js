import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  furnitures: [],
  isLoading: false,
};

export const furnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {
    startLoadingFurnitures: (state) => {
      state.isLoading = true;
    },
    setFurnitures: (state, action) => {
      state.isLoading = false;
      state.furnitures = action.payload.furnitures;
    },
  },
});

export const { startLoadingFurnitures, setFurnitures } = furnitureSlice.actions;
