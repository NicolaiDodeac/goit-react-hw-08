import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLoginThunk,
  fetchLogoutThunk,
  fetchRefreshUserThunk,
  fetchRegisterThunk,
} from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLogoutThunk.fulfilled, () => {
        return initialState;
      })
      .addCase(fetchRefreshUserThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(fetchRefreshUserThunk.rejected, (state) => {
        state.isRefreshing = false;
      })
      .addCase(fetchRefreshUserThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
