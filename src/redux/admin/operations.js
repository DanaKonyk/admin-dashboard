import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../services/api";
import { Notify } from "notiflix";

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

export const addProduct = createAsyncThunk(
  "admin/newProduct",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/products", value);
      return data;
    } catch (error) {
      Notify.failure("Ooops, something went wrong. Please try again");
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "admin/updProduct",
  async ({ id, value }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/products/${id}`, value);
      return data;
    } catch (error) {
      Notify.failure("Ooops, something went wrong. Please try again");
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "admin/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await instance.delete(`/products/${id}`);
      Notify.success("Successfully deleted.");
      return data;
    } catch (error) {
      Notify.failure("Ooops, something went wrong. Please try again");
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

export const addSupplier = createAsyncThunk(
  "admin/newSupplier",
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await instance.post("/suppliers", value);
      return data;
    } catch (error) {
      Notify.failure("Ooops, something went wrong. Please try again");
      return rejectWithValue(error.message);
    }
  }
);

export const updateSupplier = createAsyncThunk(
  "admin/updSupplier",
  async ({ id, value }, { rejectWithValue }) => {
    try {
      const { data } = await instance.put(`/suppliers/${id}`, value);
      return data;
    } catch (error) {
      Notify.failure("Ooops, something went wrong. Please try again");
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
