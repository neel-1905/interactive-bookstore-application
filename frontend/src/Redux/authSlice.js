import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("user") || null,
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem("user", action.payload);
      localStorage.setItem("isLoggedIn", true);
      state.user = action.payload;
      state.isLoggedIn = true;
    },

    logout: (state, action) => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
