import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addCategory = createAsyncThunk(
  "category/add",
  async ({ category, toast }, { rejectWithValue }) => {
    console.log(category);
    try {
      const response = await api.addCategory({ name: category });
      toast.success("Category added successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCategories = createAsyncThunk(
  "category/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async ({ Id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteCategory(Id);
      toast.success("Category deleted successfully");
      window.location.reload();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: null,
    loading: false,
    error: null,
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
  extraReducers: {
    [addCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [addCategory.fulfilled]: (state, action) => {
      state.categories = action.payload;
    },
    [addCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [getCategories.pending]: (state, action) => {
      state.loading = true;
    },

    [getCategories.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    [getCategories.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    [deleteCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    },
    [deleteCategory.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default categorySlice.reducer;
