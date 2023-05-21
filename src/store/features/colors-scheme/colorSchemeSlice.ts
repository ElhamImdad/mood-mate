import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Colorsprops } from "../../../models/ColorsShemeModel";
import axios from "axios";
import { colorsURL } from "../../../services/axios/apis";

type FetchColorsState = {
  loading: boolean;
  colorsVal: string[];
  // colors: { colorValue: string; feelingID: number }[];
  error: string;
};

const initialState: FetchColorsState = {
  loading: false,
  colorsVal: [],
  // colors: [],
  error: "",
};

export const fetchColors = createAsyncThunk("colors/fetchColors", () => {
  return axios
    .get(colorsURL)
    .then((response) =>
      response.data.colors.map((colorObj: any) => colorObj.hex.value)
    );
});

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchColors.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchColors.fulfilled,
      (state, action: PayloadAction<string[]>) => {
        state.loading = false;
        state.colorsVal = action.payload;
      
        // state.colorsVal.map((colorOb, idxj) => {
        //   //  state.colors = { colorValue: colorOb };
        // });
        // console.log("colors in store ->>", state.colorsVal);

        state.error = "";
      }
    );
    builder.addCase(fetchColors.rejected, (state, action) => {
      state.loading = false;
      state.colorsVal = [];
      state.error = action.error.message || "Something went wrong";
    });
  },
});

export default colorSlice.reducer;
