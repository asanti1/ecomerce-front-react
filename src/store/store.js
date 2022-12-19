import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { furnitureSlice } from "./furniture/furnitureSlice";

export default configureStore({
  reducer: {
    furnitures: furnitureSlice.reducer,
    auth: authSlice.reducer,
  },
});
