import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EntriesFeelingModel } from "../../../models/FeelingModel";
import { axiosInstance } from "../../../services/axios";
import { feelingListURL } from "../../../services/apis";
import axios from "axios";

type FetchFeelingsState = {
  loading: boolean;
  feelingsList: EntriesFeelingModel[];
  error: string;
}

const initialState: FetchFeelingsState = {
  loading: false,
  feelingsList: [],
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchFeelings = createAsyncThunk("feelings/fetchfeelings", () => {
  return axios
    .get("https://run.mocky.io/v3/7ef58f5e-4b6b-4e5b-9447-ccfcddd6a7ed")
    .then((response) => response.data);
});

const feelingsSlice = createSlice({
  name: "feelings",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchFeelings.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(
      fetchFeelings.fulfilled,
      (state, action: PayloadAction<EntriesFeelingModel[]>) => {
        state.loading = false;
        state.feelingsList = action.payload;
        state.error = "";
      }
    )
    builder.addCase(fetchFeelings.rejected, (state, action) => {
      state.loading = false;
      state.feelingsList = [];
      state.error = action.error.message || "Something went wrong";
    })
  }
})

export default feelingsSlice.reducer;
