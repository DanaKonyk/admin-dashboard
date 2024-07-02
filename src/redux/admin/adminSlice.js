import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getCustomers,
  getDashboard,
  getOrders,
  getProducts,
  getSuppliers,
} from "./operations";

const initialState = {
  dashboard: [],
  orders: [],
  products: [],
  suppliers: [],
  customers: [],
  page: 1,
  limit: 5,
  isLoading: false,
  error: null,
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.dashboard = action.payload;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.orders = action.payload;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suppliers = action.payload;
      })
      .addCase(getCustomers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.customers = action.payload;
      })
      .addMatcher(
        isAnyOf(
          getDashboard.pending,
          getOrders.pending,
          getProducts.pending,
          getSuppliers.pending,
          getCustomers.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getDashboard.rejected,
          getOrders.rejected,
          getProducts.rejected,
          getSuppliers.rejected,
          getCustomers.rejected
        ),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error.message;
        }
      );
  },
});

export const adminReducer = adminSlice.reducer;
