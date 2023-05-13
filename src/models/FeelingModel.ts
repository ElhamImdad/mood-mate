export interface SpecificFeelingModel {
  id: number;
  name: string;
  selected?: boolean;
}
export interface FeelingModel {
  id: number;
  // img: any;
  feelingName: string;
  specificFeeling: SpecificFeelingModel[];
}

export const SET_FEELING = 'SET_FEELING';
export const SET_SPECIFIC_FEELING = 'SET_SPECIFIC_FEELING';

interface SetFeelingAction {
        type: typeof SET_FEELING,
        payload: FeelingModel,
}

interface SetSpecificFeelingAction {
        type: typeof SET_SPECIFIC_FEELING,
        payload: SpecificFeelingModel[],
 
}

export type FeelingActionModels = SetFeelingAction | SetSpecificFeelingAction