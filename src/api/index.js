import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
console.log(BASE_URL);

const custom_request = axios.create();

export const addregister = async (formdata) => await custom_request.post(`${BASE_URL}/user/user_signup`, formdata);
