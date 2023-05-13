import {
  SET_FEELING,
  SET_SPECIFIC_FEELING,
  FeelingActionModels,
  FeelingModel,
  SpecificFeelingModel,
} from "../../models/FeelingModel";

interface FeelingState {
  feelings: FeelingModel;
}
// interface SpecificFeelingState {
//   specificFeelings: SpecificFeelingModel[];
// }

const initialFeelingState: FeelingState = {
  feelings: {} as FeelingModel,
  
};

export function feelingReducer(state: FeelingState = initialFeelingState, action: FeelingActionModels):FeelingState {
  switch (action.type) {
    case SET_FEELING: {
      return {
        ...state,
        feelings: action.payload
      };
    }
    default:
      return state;
  }
};