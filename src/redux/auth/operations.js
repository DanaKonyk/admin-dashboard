import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, instance, setToken } from "../../services/api";

export const logIn = createAsyncThunk(
  "auth/login",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/users/login", value);
      setToken(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await instance.post("/users/logout");
      clearToken();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return rejectWithValue("Unable to fatcn user");
    }

    try {
      setToken(persistedToken);
      const { data } = await instance.get("/users/current");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
