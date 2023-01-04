import { setUser, startSettingUser } from "./userSlice";

export const userInit = (user) => {
  return (dispatch) => {
    dispatch(startSettingUser());

    dispatch(setUser({ user }));
  };
};
