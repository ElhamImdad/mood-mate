export interface SpecificFeelingModel {
    id: number;
    name: string;
    selected?: boolean;
  }
  export interface FeelingModel {
    id: number;
    img?: any;
    feelingName: string;
    specificFeeling: SpecificFeelingModel[];
  }