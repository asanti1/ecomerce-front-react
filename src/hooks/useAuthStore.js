import { useDispatch, useSelector } from "react-redux";
import { mobilierApi } from "../api/mobilierAPI";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogout,
} from "../store/auth/authSlice";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());
    try {
      const { data } = await mobilierApi.post("/auth/login", {
        email,
        password,
      });
      const { user } = data;
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(
        onLogin({
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          email: user.email,
          address: user.address,
          roles: user.roles,
        })
      );
    } catch (error) {
      dispatch(onLogout("Credenciales incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegister = async ({
    firstName,
    lastName,
    phone,
    password,
    email,
    street,
    state,
    country,
    roomNumber,
    city,
  }) => {
    dispatch(onChecking());
    try {
      const { data } = await mobilierApi.post("/auth/register", {
        firstName,
        lastName,
        email,
        phone,
        password,
        address: [
          {
            country,
            street,
            state,
            city,
            roomNumber,
          },
        ],
      });
      startLogin({ email, password });
    } catch (error) {
      dispatch(onLogout(error.response.data?.msg || "--"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch(onLogout());

    try {
      const { data } = await mobilierApi.get("auth/renew");
      localStorage.setItem("token", data.token);
      localStorage.setItem("token-init-date", new Date().getTime());
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout());
    }
  };

  const startLogout = () => {
    localStorage.clear();
    dispatch(onLogout());
  };

  return {
    errorMessage,
    status,
    user,
    checkAuthToken,
    startLogin,
    startLogout,
    startRegister,
  };
};
