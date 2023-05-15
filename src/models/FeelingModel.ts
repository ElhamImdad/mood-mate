export interface SpecificFeelingModel {
    id: number;
    name: string;
    selected?: boolean;
  }
  export interface FeelingModel {
    id: number;
    emoji: string;
    feelingName: string;
    specificFeeling: SpecificFeelingModel[];
  }