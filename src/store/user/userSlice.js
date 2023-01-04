import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isSetting: false,
  },
  reducers: {
    startSettingUser: (state) => {
      state.isSetting = true;
    },
    setUser: (state, action) => {
      state.isSetting = false;
      state.user = action.payload.user;
    },
  },
});

export const { startSettingUser, setUser } = userSlice.actions;
