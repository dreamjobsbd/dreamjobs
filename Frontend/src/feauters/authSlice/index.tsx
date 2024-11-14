
//packages
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

//services
import { api } from "../../services/apiService";

//types
import { authState, User, loginCredentilas } from "./authSliceType";


//define state for authslice
export const initialState: authState = {
  user: null,
  isLoading: false,
  error: null,
  isLoggedIn : false
}


//async thunk for login
export const login = createAsyncThunk("auth/login",
  async (credentials: loginCredentilas, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", credentials);
      if (res.data.success){ 
        localStorage.setItem('isLoggedIn', 'true'); // Add this line
        return res.data;
      } else {
        return rejectWithValue(res.data.message || "Login failed");
      }
    } catch (error: any) {
      console.log(error.response?.data?.message);
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
});


export const logout = createAsyncThunk("auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/logout");
      // Clear stored value in localStorage 
      localStorage.removeItem('isLoggedIn');
      // Reset the API instance
      api.defaults.headers.common['Authorization'] = '';
      return res.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);


//async thunk to get current user
export const getCurrentUser = createAsyncThunk("auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/current-user");
      return res.data.payload.user;
    } catch (error: any) {
      localStorage.removeItem('isLoggedIn'); // Add this line
      return rejectWithValue(error.response?.data?.message);
    }
  });


let refreshTokenTimeout: any;

// handle access token timeout
const loadAccessTokenTimeout = (dispatch: any) => {
    clearTimeout(refreshTokenTimeout);
    refreshTokenTimeout = setTimeout(() => {
        dispatch(loadAccessToken());
    }, 55000); // Refresh 5 seconds before expiration
};

//async thunk to load accessToken
export const loadAccessToken = createAsyncThunk("/auth/loadAccessToken",
  async (_, { rejectWithValue , dispatch }) => {
    try {
      await api.get("/auth/refresh-token");
      dispatch(loadAccessTokenTimeout);
    } catch (error: any) {
      rejectWithValue(error.response?.data?.message)
    }
  }
)


//create authSlice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuth: (state) => {
      state.user = null;
      state.isLoading = false;
      state.error = null;
    }
  },
  extraReducers(builder) {
    builder
      //handle login states
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(login.fulfilled, (state) => {
          state.isLoading = false
          state.error = null
          state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload as string;
      })

      .addCase(logout.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
        state.isLoading = false;
        state.error = null;
        state.isLoggedIn = false; // Add this line
        clearTimeout(refreshTokenTimeout);
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      //handle get current user states
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload as User;
        state.isLoggedIn = true; // Add this line

      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string
        state.isLoggedIn = false; // Add this line

      })

      //handle load access token states
      .addCase(loadAccessToken.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loadAccessToken.rejected, (state) => {
        state.isLoading = false;
        state.user = null;
      })
  }

})

export const {resetAuth} = authSlice.actions;
export default authSlice.reducer;