import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLoginThunk,
  fetchLogoutThunk,
  fetchRefreshUserThunk,
  fetchRegisterThunk,
} from "./operations";
import { errorMessage } from "../../services/errorMessage";

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
      .addCase(fetchRegisterThunk.rejected, () => {
        return errorMessage("This user already exists, go to Login!");
      })
      .addCase(fetchLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(fetchLoginThunk.rejected, () => {
        return errorMessage(
          "Username or password is wrong, Please try again or go to Register!"
        );
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
