export const SET_FEELING = 'SET_MOOD';
export const SET_SPECIFIC_FEELING = 'SET_SPECIFIC_FEELING';

interface SetFeelingAction {
        type: typeof SET_FEELING,
        payload: FeelingModel,
}

interface SetSpecificFeelingAction {
        type: typeof SET_SPECIFIC_FEELING,
        payload: SpecificFeelingModel[],
 
}


export interface FeelingModel {
    id?: number;
    // img: any;
    feelingName?: string;
    SpecifyFeeling: SpecificFeelingModel[];
  }

export interface SpecificFeelingModel {
    id: number;
    name: string;
    selected?: boolean;
  }

export type FeelingActionModels = SetFeelingAction 