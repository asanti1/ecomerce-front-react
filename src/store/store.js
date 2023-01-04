import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { furnitureSlice } from "./furniture/furnitureSlice";
import { userSlice } from "./user/userSlice";
import { usersSlice } from "./users/usersSlice";

export default configureStore({
  reducer: {
    furnitures: furnitureSlice.reducer,
    auth: authSlice.reducer,
    users: usersSlice.reducer,
    user: userSlice.reducer,
  },
});
