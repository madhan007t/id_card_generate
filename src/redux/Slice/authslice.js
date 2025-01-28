import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    _id: "",
    name: "",
    email: "",
  },
};

const authSlice = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    isLoginSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { isLoginSuccess } = authSlice.actions;
export default authSlice.reducer;
