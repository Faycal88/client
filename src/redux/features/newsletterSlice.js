import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addSubsriber = createAsyncThunk(
  "subsriber/addSubsriber",
  async ({ email, toast }, { rejectWithValue }) => {
    try {
      const response = await api.addSubsriber(email);
      toast.success("Thank you for subscribing!");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

/* export const getSubsribers = createAsyncThunk(
  "subsriber/getSubsribers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getSubsribers();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteSubsriber = createAsyncThunk(
  "subsriber/deleteSubsriber",
  async ({ Id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteSubsriber(Id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
); */

const subsriberSlice = createSlice({
  name: "subsriber",
  initialState: {
    subsribers: null,
    loading: false,
    error: null,
  },
});

export default subsriberSlice.reducer;
