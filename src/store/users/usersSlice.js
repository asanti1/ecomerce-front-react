import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [{}],
    isLoading: false,
  },
  reducers: {
    startLoadingUsers: (state) => {
      state.isLoading = true;
    },
    setUsers: (state, action) => {
      state.isLoading = false;
      state.users = action.payload.users;
    },
  },
});

export const { startLoadingUsers, setUsers } = usersSlice.actions;
 