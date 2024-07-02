import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";

export const getDashboard = createAsyncThunk(
  "admin/dashboard",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/dashboard");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrders = createAsyncThunk(
  "admin/orders",
  async ({ page = 1, limit = 5, name = "" }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/orders?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getProducts = createAsyncThunk(
  "admin/products",
  async ({ page = 1, limit = 5, name = "" }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/products?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getSuppliers = createAsyncThunk(
  "admin/suppliers",
  async ({ page = 1, limit = 5, name = "" }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/suppliers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCustomers = createAsyncThunk(
  "admin/customers",
  async ({ page = 1, limit = 5, name = "" }, { rejectWithValue }) => {
    try {
      const { data } = await instance.get(
        `/customers?page=${page}&limit=${limit}&name=${name}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
