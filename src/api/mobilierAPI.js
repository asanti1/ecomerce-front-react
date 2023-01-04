import axios from "axios";

export const mobilierApi = axios.create({
  baseURL: "http://localhost:3000",
});

mobilierApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers["Authorization"] = `bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getUserById = async (id) => {
  const { status } = await mobilierApi.get(`/users/${id}`);
  return status;
};

export const modifyUserById = async (id, fields) => {
  const { data } = await mobilierApi.patch(`/users/${id}`, fields);
  return data;
};

export const login = async (email, password) => {
  const { status } = await mobilierApi.post("/auth/login", {
    email,
    password,
  });
  console.log(status);
  return status;
};
