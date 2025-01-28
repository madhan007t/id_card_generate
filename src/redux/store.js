import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slice/authslice";
const store = configureStore({
  reducer: {
    authSlice: authSlice,
  },
});
export default store;
