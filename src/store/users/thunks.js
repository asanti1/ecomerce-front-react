import { mobilierApi } from "../../api/mobilierAPI";
import { setUsers, startLoadingUsers } from "./usersSlice";

export const getUsers = () => {
  return async (dispatch) => {
    dispatch(startLoadingUsers());

    const { data } = await mobilierApi.get(`/users`);

    dispatch(setUsers({ users: data }));
  };
};
