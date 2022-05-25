import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addArticle = createAsyncThunk(
  "article/add",
  async ({ article, toast }, { rejectWithValue }) => {
    try {
      const response = await api.addArticle(article);
      toast.success("Article added successfully");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getArticles = createAsyncThunk(
  "article/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getArticles();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getArticleBySlug = createAsyncThunk(
  "article/getBySlug",
  async (slug, { rejectWithValue }) => {
    try {
      const response = await api.getArticleBySlug(slug);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getArticleProduct = createAsyncThunk(
  "article/getProduct",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await api.getArticleProduct(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const articleSlice = createSlice({
  name: "article",
  initialState: {
    articles: null,
    loading: false,
    error: null,
  },
  reducers: {
    addArticle: (state, action) => {
      state.articles.push(action.payload);
    },
  },
  extraReducers: {
    [addArticle.pending]: (state, action) => {
      state.loading = true;
    },
    [addArticle.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [addArticle.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getArticles.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticles.fulfilled]: (state, action) => {
      state.article = action.payload;
      state.loading = false;
    },
    [getArticles.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getArticleBySlug.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticleBySlug.fulfilled]: (state, action) => {
      state.article = action.payload;
      state.loading = false;
    },
    [getArticleBySlug.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getArticleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getArticleProduct.fulfilled]: (state, action) => {
      state.article = action.payload;
      state.loading = false;
    },
    [getArticleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default articleSlice.reducer;
