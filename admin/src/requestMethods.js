import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  JSON.parse(localStorage.getItem("persist:root"))?.user &&
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    ?.accesstoken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
