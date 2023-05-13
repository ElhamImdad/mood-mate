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
        setActiveFeeling: (state, action: PayloadAction<FeelingModel>) =>  {
            const {id, feelingName, specificFeeling} = action.payload;
            state.feeling.id = id;
            state.feeling.feelingName = feelingName;
            state.feeling.specificFeeling = specificFeeling;
        },
        setSelectedSpecificFeeling: (state, action: PayloadAction<SpecificFeelingModel>) => {
            const selectedItem = action.payload;
            state.feeling.specificFeeling.map((item) => {if (item.id === selectedItem.id) item.selected= !selectedItem.selected})
        }
       
    }
  })

  export const {setActiveFeeling, setSelectedSpecificFeeling} = FeelingSlice.actions;
  export default FeelingSlice.reducer;
