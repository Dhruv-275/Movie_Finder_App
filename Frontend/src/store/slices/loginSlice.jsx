import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      state.user = action.payload;
    },
    logoutAction: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { loginAction, logoutAction } = loginSlice.actions;
export default loginSlice.reducer;
