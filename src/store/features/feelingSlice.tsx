import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FeelingModel, SpecificFeelingModel } from "../../models/FeelingModel";

interface FeelingState {
  isFeelingFormVisible: boolean;
  feeling: FeelingModel;
  // totalFeelings: FeelingModel[];
}
// interface SpecificFeelingState {
//   specificFeelings: SpecificFeelingModel[];
// }

const initialState: FeelingState = {
  isFeelingFormVisible: false,
  feeling: {} as FeelingModel,
  // totalFeelings: [],
};

export const FeelingSlice = createSlice({
  name: "feeling",
  initialState,
  reducers: {
    setActiveFeeling: (state, action: PayloadAction<FeelingModel>) => {
      const { id, feelingName, specificFeeling } = action.payload;
      state.feeling.id = id;
      state.feeling.feelingName = feelingName;
      state.feeling.specificFeeling = specificFeeling;
    },
    setSelectedSpecificFeeling: (
      state,
      action: PayloadAction<{ selectedID: number }>
    ) => {
      const id = action.payload.selectedID;
      state.feeling.specificFeeling.map((item) => {
        if (item.id === id) item.selected = !item.selected;
      });
    },
    togleFeelinfForm: (state) => {
      state.isFeelingFormVisible = !state.isFeelingFormVisible;
    }
  },
});

export const { setActiveFeeling, setSelectedSpecificFeeling, togleFeelinfForm } =
  FeelingSlice.actions;
export default FeelingSlice.reducer;
