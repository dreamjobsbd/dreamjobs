
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../services/apiService";
import { JobType , JobsState } from "./JobType";


const initialState: JobsState = {
  isLoading: false,
  jobs: null,
  error: null,
  searchTerm: '',
};

export const GetJobs = createAsyncThunk(
  "jobs/GetJobs",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/job/all-job");
      return res.data.payload.jobPosts;
    } catch (error: any) {
      console.log(error.response?.data?.message);
      return rejectWithValue(error.response?.data?.message || 'An error occurred');
    }
  }
);

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetJobs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(GetJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload as JobType[];
        state.error = null;
      })
      .addCase(GetJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.jobs = null;
        state.error = action.payload as string;
      })
  },
});

export const { setSearchTerm } = jobsSlice.actions;

export default jobsSlice.reducer;