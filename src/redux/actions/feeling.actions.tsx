import { ActionCreator } from 'redux'; 
import { SET_FEELING, SET_SPECIFIC_FEELING, FeelingActionModels, FeelingModel, SpecificFeelingModel } from "../../models/FeelingModel";

export const setFeeling = (feeling: FeelingModel) => dispatch => {
    dispatch({
        type: SET_FEELING,
        payload: feeling,
    })
}

export const setSpecificFeeling = (specificFeeling: SpecificFeelingModel) => dispatch => {
    dispatch({
        type: SET_SPECIFIC_FEELING,
        payload: specificFeeling,
    })
}