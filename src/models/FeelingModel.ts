export interface SpecificFeelingModel {
    id: number;
    name: string;
  }
  export interface FeelingModel {
    id: number;
    emoji: any;
    feelingId?: number;
    feelingName: string;
    specificFeeling: SpecificFeelingModel[];
  }
  export interface FeelingContextProps {
    activeEmogi: FeelingModel | null;
    updateActiveEmogi: (data: FeelingModel) => void;
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