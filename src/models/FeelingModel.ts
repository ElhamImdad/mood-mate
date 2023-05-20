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

export interface EntriesFeelingModel {
  id: number;
  day: string;
  month: string;
  year: string;
  date?: string;
  feelingId?: number;
  feelingName: string;
  specificFeeling: SpecificFeelingModel[];
  note?: string;
}

export interface FeelingContextProps {
  activeEmogi: FeelingModel | null;
  updateActiveEmogi: (data: FeelingModel) => void;
}

// export interface FeelngsPerMonthContextProps {
//   feelngsPerMonth: { [key: string]: EntriesFeelingModel[] }  | null;
//   updatefeelngsPerMonth: (data: EntriesFeelingModel) => void
// }

export interface FeelngsPerMonthContextProps {
  feelngsPerMonth: EntriesFeelingModel[] | null;
  updatefeelngsPerMonth: (data: EntriesFeelingModel[]) => void
}
