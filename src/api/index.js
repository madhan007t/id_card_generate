import axios from "axios";
import { admintoken } from "../helper/notificationhelper";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const custom_request = axios.create();

custom_request.interceptors.request.use((config) => {
  const token = localStorage.getItem(admintoken);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const addregister = async (formdata) => await custom_request.post(`${BASE_URL}/user/user_signup`, formdata);

export const userlogin = async (formdata) => await custom_request.post(`${BASE_URL}/user/user_login`, formdata);

export const checklogin = async (formdata) => await custom_request.get(`${BASE_URL}/user/check_login`, formdata);
