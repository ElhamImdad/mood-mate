import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeelingModel } from "../../../models/FeelingModel";

interface FeelingState {
  isFeelingFormVisible: boolean;
  feeling: FeelingModel;
}

const initialState: FeelingState = {
  isFeelingFormVisible: false,
  feeling: {} as FeelingModel,
};

export const FeelingUtilsSlice = createSlice({
  name: "feeling",
  initialState,
  reducers: {
    setActiveFeeling: (state, action: PayloadAction<FeelingModel>) => {
      const { id, feelingName, specificFeeling } = action.payload;
      state.feeling.id = id;
      state.feeling.feelingName = feelingName;
      state.feeling.specificFeeling = specificFeeling;
    },
    togleFeelinfForm: (state) => {
      state.isFeelingFormVisible = !state.isFeelingFormVisible;
    }
  },
});

export const { setActiveFeeling, togleFeelinfForm } =
FeelingUtilsSlice.actions;
export default FeelingUtilsSlice.reducer;
