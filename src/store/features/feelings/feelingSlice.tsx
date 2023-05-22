import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { EntriesFeelingModel } from "../../../models/FeelingModel";
import { axiosInstance } from "../../../services/axios/axios";
import { feelingListURL } from "../../../services/axios/apis";
import { sortDates } from "../../../utils/Utils";

type FetchFeelingsState = {
  loading: boolean;
  feelingsList: EntriesFeelingModel[];
  feelingsPerMonth: { [key: string]: EntriesFeelingModel[] };
  error: string;
};

const initialState: FetchFeelingsState = {
  loading: false,
  feelingsList: [],
  feelingsPerMonth: {},
  error: "",
};

// Generates pending, fulfilled and rejected action types
export const fetchFeelings = createAsyncThunk("feelings/fetchfeelings", () => {
  return axiosInstance.get(feelingListURL).then((response) => response.data);
});

const feelingsSlice = createSlice({
  name: "feelings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFeelings.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchFeelings.fulfilled,
      (state, action: PayloadAction<EntriesFeelingModel[]>) => {
        state.loading = false;
        const sortedDate = sortDates(action.payload);
        state.feelingsList = sortedDate;
        state.feelingsPerMonth = {};
        state.feelingsList.forEach((feelingObj: EntriesFeelingModel) => {
            const date = new Date(feelingObj.date);
            const year = date.getFullYear();
            const month = date.getMonth();
            const monthKey = `${year}-${month}`;
            if (!state.feelingsPerMonth[monthKey]) {
              state.feelingsPerMonth[monthKey] = [];
            }
            
            state.feelingsPerMonth[monthKey].push(feelingObj);
          });
    
        state.error = "";
      }
    );
    builder.addCase(fetchFeelings.rejected, (state, action) => {
      state.loading = false;
      state.feelingsList = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default feelingsSlice.reducer;
