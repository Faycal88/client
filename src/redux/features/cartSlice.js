import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../api";

export const cart = createAsyncThunk(
  "auth/cart",
  async ({ productId, toast }, { rejectWithValue }) => {
    try {
      const response = await api.cart({ add: productId });

      toast.success("Added to cart successfully");
      window.location.reload();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCart = createAsyncThunk(
  "auth/cart",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getCart();
      return response.data.cart;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeFromBag = createAsyncThunk(
  "auth/cart",
  async ({ productId, toast }, { rejectWithValue }) => {
    try {
      const response = await api.removeFromBag({ remove: productId });
      toast.success("Removed from cart successfully");
      localStorage.setItem("cart", JSON.stringify(response.data.cart));
      window.location.reload();
      return response.data.cart;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data.message);
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [cart.pending]: (state, action) => {
      state.loading = true;
    },
    [cart.fulfilled]: (state, action) => {
      state.cart = action.payload;
      state.loading = false;
    },
    [cart.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default cartSlice.reducer;
