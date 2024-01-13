export interface WineData {
    "Alcohol": number | string;
    "Malic Acid": number | string;
    "Ash": number | string;
    "Alcalinity of ash": number | string;
    "Magnesium": number | string;
    "Total phenols": number | string;
    "Flavanoids": number | string;
    "Nonflavanoid phenols": number | string;
    "Proanthocyanins": string;
    "Color intensity": number | string;
    "Hue": number | string;
    "OD280/OD315 of diluted wines": number | string;
    "Unknown": number | string;
}

// Extend Array prototype with CustomFilter
declare global {
    interface Array<T> {
      CustomFilter(callback: (wineData: WineData) => boolean,property : Property): number[];
    }
  }

export interface Stats {
    mean : number;
    mode : number;
    median : number;
}

export interface ClassWiseStats {
    [key : string] : Stats;
}

export interface FlavanoidsStatsProps {
    classWiseStats: ClassWiseStats;
    title : string;
}

export interface ClassWiseValues {
    [key : string] : number[]
}

 export type Property = 'Flavanoids' | ''
  