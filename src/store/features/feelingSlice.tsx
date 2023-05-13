import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    FeelingModel,
    SpecificFeelingModel,
  } from "../../models/FeelingModel";
  
  interface FeelingState {
    // id: number;
    feeling: FeelingModel;
    // totalFeelings: FeelingModel[];
  }
  // interface SpecificFeelingState {
  //   specificFeelings: SpecificFeelingModel[];
  // }
  
  const initialState: FeelingState = {
    // id: 0,
    feeling: {} as FeelingModel,
    // totalFeelings: [],
  };

  export const FeelingSlice = createSlice({
    name: "feeling",
    initialState,
    reducers:{
        setFeeling: (state, action: PayloadAction<{ id: number, feelingName: string, specificFeeling: SpecificFeelingModel[]}>) =>  {
            const {id, feelingName, specificFeeling} = action.payload;
            state.feeling.id = id;
            state.feeling.feelingName = feelingName;
            state.feeling.specificFeeling = specificFeeling;
        }
    }
  })

  export const {setFeeling} = FeelingSlice.actions;
  export default FeelingSlice.reducer;

