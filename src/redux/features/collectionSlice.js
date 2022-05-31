import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addCollection = createAsyncThunk(
  "collection/addCollection",
  async ({ data, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.addCollection(data);
      toast.success("Collection added");
      navigate("/admin/collections");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCollections = createAsyncThunk(
  "collection/getCollections",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getCollections();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCollection = createAsyncThunk(
  "collection/deleteCollection",
  async ({ Id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteCollection(Id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getProductsbyCollection = createAsyncThunk(
  "collection/getProductsbyCollection",
  async ({ name }, { rejectWithValue }) => {
    console.log(name);
    try {
      const response = await api.getProductsbyCollection(name);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    collections: null,
    loading: false,
    error: null,
  },
  reducers: {
    addToCollection: (state, action) => {
      state.collections.push(action.payload);
    },
  },
  extraReducers: {
    [addCollection.pending]: (state, action) => {
      state.loading = true;
    },
    [addCollection.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.loading = false;
    },
    [addCollection.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getCollections.pending]: (state, action) => {
      state.loading = true;
    },
    [getCollections.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.loading = false;
    },
    [getCollections.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteCollection.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCollection.fulfilled]: (state, action) => {
      state.collections = action.payload;
      state.loading = false;
    },
    [deleteCollection.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getProductsbyCollection.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductsbyCollection.fulfilled]: (state, action) => {
      state.collections.products = action.payload;
      state.loading = false;
    },
    [getProductsbyCollection.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default collectionSlice.reducer;
