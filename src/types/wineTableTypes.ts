export interface WineData {
  Ash: number | string;
  Hue: number | string;
  Proanthocyanins: string;
  Alcohol: number | string;
  Unknown: number | string;
  Magnesium: number | string;
  Flavanoids: number | string;
  "Malic Acid": number | string;
  "Total phenols": number | string;
  "Color intensity": number | string;
  "Alcalinity of ash": number | string;
  "Nonflavanoid phenols": number | string;
  "OD280/OD315 of diluted wines": number | string;
}

export interface Stats {
  mean: number;
  mode: string;
  median: number;
}

export interface ClassWiseStats {
  [key: string]: Stats;
}

export interface FlavanoidsStatsProps {
  title: string;
  classWiseStats: ClassWiseStats;
}

export interface ClassWiseValues {
  [key: string]: number[];
}

export type Property = "Flavanoids" | "";
