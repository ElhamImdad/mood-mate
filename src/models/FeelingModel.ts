export interface SpecificFeelingModel {
    id: number;
    name: string;
  }
  export interface FeelingModel {
    id: number;
    emoji: any;
    feelingName: string;
    specificFeeling: SpecificFeelingModel[];
  }

  export interface EntriesFeelingModel {
    id: number;
    day: string;
    month: string;
    year: string;
    feelingName: string;
    specificFeeling: SpecificFeelingModel[];
    note?: string;
  }