import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Colorsprops } from "../../../models/ColorsShemeModel";
import axios from "axios";
import { colorsURL } from "../../../services/axios/apis";

type FetchColorsState = {
  loading: boolean;
  colorsVal: string[];
  // colors: Colorsprops[];
  awesomeColor: string;
  goodColor: string;
  notBadColor: string;
  badColor: string;
  awfulColor: string;
  error: string;
};

const initialState: FetchColorsState = {
  loading: false,
  colorsVal: [],
  awesomeColor: "",
  goodColor: "",
  notBadColor: "",
  badColor: "",
  awfulColor: "",
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
        state.colorsVal.forEach((color, i) => {
          switch (i) {
            case 0:
              state.awfulColor = color;
              break
            case 1:
              state.badColor = color;
              break
            case 2:
              state.notBadColor = color;
              break
            case 3:
              state.goodColor = color;
              break
            case 5:
              state.awesomeColor = color;
              break
            default: ""
          }
        });
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
