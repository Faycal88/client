import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import * as api from "../api";

export const addOrder = createAsyncThunk(
  "order/addOrder",
  async ({ newOrder, toast }, { rejectWithValue }) => {
    try {
      const response = await api.addOrder(newOrder);
      toast.success("Order added");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    loading: false,
    error: null,
  },
  reducers: {
    addToOrder: (state, action) => {
      state.order.push(action.payload);
    },
  },
  extraReducers: {
    [addOrder.pending]: (state, action) => {
      state.loading = true;
    },
    [addOrder.fulfilled]: (state, action) => {
      state.order = action.payload;
      state.loading = false;
    },
    [addOrder.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default orderSlice.reducer;