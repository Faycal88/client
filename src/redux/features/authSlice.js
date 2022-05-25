import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const login = createAsyncThunk(
  "auth/login",
  async ({ logUser, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signin(logUser);
      toast.success("Login Successful");
      navigate("/");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ newUser, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.signup(newUser);
      toast.success("Registred Successful");
      navigate("/");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

export const Gsign = createAsyncThunk(
  "auth/googlesign",
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.Gsignup(result);
      toast.success("Google success");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const Fsign = createAsyncThunk(
  "auth/facebooksign",
  async ({ result, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.Fsignup(result);
      toast.success("Facebook success");
      navigate("/");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const Update = createAsyncThunk(
  "auth/update",
  async ({ user, toast }, { rejectWithValue }) => {
    try {
      const response = await api.update(user);
      console.log(response);
      toast.success("Update Successful");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    error: null,
    loading: false,
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
      state.cart = null;
    },
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [register.pending]: (state, action) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [Gsign.pending]: (state, action) => {
      state.loading = true;
    },
    [Gsign.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [Gsign.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [Fsign.pending]: (state, action) => {
      state.loading = true;
    },
    [Fsign.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [Fsign.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [Update.pending]: (state, action) => {
      state.loading = true;
    },
    [Update.fulfilled]: (state, action) => {
      state.loading = false;
      localStorage.setItem("profile", JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [Update.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});
export const { setUser, setLogout } = authSlice.actions;
export default authSlice.reducer;
