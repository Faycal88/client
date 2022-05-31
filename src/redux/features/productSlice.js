import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../api";

export const addProduct = createAsyncThunk(
  "product/addProduct",
  async ({ formData, toast }, { rejectWithValue }) => {
    try {
      const response = await api.addProduct(formData);
      window.location.reload();
      toast.success("Product added");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProduct = createAsyncThunk(
  "product/getProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getOne(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.deleteProduct(id);
      window.location.reload();
      toast.success("Product deleted");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const FindEditProduct = createAsyncThunk(
  "product/FindEditProduct",
  async ({ id, data, toast }, { rejectWithValue }) => {
    console.log(id, data);
    try {
      const response = await api.FindEditProduct({ id, data });
      toast.success("Product updated");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    error: null,
    loading: null,
    product: null,
  },
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
  },
  extraReducers: {
    [addProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [FindEditProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [FindEditProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [FindEditProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload;
      state.loading = false;
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default productSlice.reducer;
