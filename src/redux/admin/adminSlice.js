import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addProduct,
  addSupplier,
  deleteProduct,
  getCustomers,
  getDashboard,
  getOrders,
  getProducts,
  getSuppliers,
  updateProduct,
  updateSupplier,
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
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.total = state.products.total + 1;
        state.products.result = [...state.products.result, action.payload];
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.products.result.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.products.result[index] = action.payload;
        }
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products.result = state.products.result.filter(
          (item) => item._id !== action.payload
        );
      })
      .addCase(getSuppliers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suppliers = action.payload;
      })
      .addCase(addSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        state.suppliers.result = [...state.suppliers.result, action.payload];
      })
      .addCase(updateSupplier.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.suppliers.result.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.suppliers.result[index] = action.payload;
        }
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
          getCustomers.pending,
          addProduct.pending,
          updateProduct.pending,
          deleteProduct.pending,
          addSupplier.pending,
          updateProduct.pending
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
          getCustomers.rejected,
          addProduct.rejected,
          updateProduct.rejected,
          deleteProduct.rejected,
          addSupplier.rejected,
          updateProduct.rejected
        ),
        (state, { error }) => {
          state.isLoading = false;
          state.error = error.message;
        }
      );
  },
});

export const adminReducer = adminSlice.reducer;
