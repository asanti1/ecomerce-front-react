import axios from "axios";

export const mobilierApi = axios.create({
  baseURL: "http://localhost:3000",
});
