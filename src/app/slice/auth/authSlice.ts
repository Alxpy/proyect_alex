import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialStateAuth } from "./auth";
import { loginApi, logoutApi } from "@/app/api/auth/authApi";
import { PLogin } from "@/app/api/auth/auth";

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (payload: PLogin, { rejectWithValue }) => {
    try {
      const { data, success, message } = await loginApi(payload);
      return success ? data : rejectWithValue(message);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const { data, success, message } = await logoutApi();
      return success ? data : rejectWithValue(message);
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  }
);

const InitialStat: InitialStateAuth = {
  isAllowed: false,
  isLoading: false,
  isLoadingCode: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: InitialStat,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAllowed = true;
        state.user = action.payload;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.isLoading = false;
        state.isAllowed = false;
        state.user = null;
      });
  },
});

export default authSlice.reducer;
