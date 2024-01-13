import {
  ClassWiseStats,
  ClassWiseValues,
  Property,
  WineData,
} from "../types/wineTableTypes";

// Function to calculate mean
const calculateMean = (data: number[]) => {
  const mean =
    data.reduce((sum, current: any) => sum + current, 0) / data.length;
  return mean.toFixed(3);
};

// Function to calculate median
const calculateMedian = (data: number[]) => {
  let median;
  const mid = Math.floor(data.length / 2);

  if (data.length % 2 === 0) {
    const middle1 = data[mid - 1];
    const middle2 = data[mid];
    median = (middle1 + middle2) / 2;
  } else {
    const middle = data[mid];
    median = middle;
  }

  return median.toFixed(3);
};

// Function to calculate mode
const calculateMode = (data: number[]) => {
  const modeMap: Record<number, number> = {};
  let maxCount = 0;
  let mode: number | null = null;

  data.forEach((value) => {
    modeMap[value] = (modeMap[value] || 0) + 1;

    if (modeMap[value] > maxCount) {
      maxCount = modeMap[value];
      mode = value;
    }
  });

  return mode !== null ? (mode as number).toFixed(3) : "No mode";
};

// Function to calculate Statistics
const calculateStatisticalMeasures = (
  classWiseValues: ClassWiseValues
): ClassWiseStats => {
  const classWiseStatistics: ClassWiseStats = {};

  for (const alcoholClass in classWiseValues) {
    const values = classWiseValues[alcoholClass];

    // Calculate mean
    const mean = calculateMean(values);

    // Calculate median
    const median = calculateMedian(values);

    // Calculate mode
    const mode = calculateMode(values);

    classWiseStatistics[alcoholClass] = {
      mean: +mean,
      median: +median,
      mode: +mode,
    };
  }

  return classWiseStatistics;
};

// Gamma Function
const calculateGamma = (entry: WineData) => {
  const { Ash, Hue, Magnesium } = entry;
  return Number(((+Ash * +Hue) / +Magnesium).toFixed(3));
};

// Function to calculate class-wise statistics for Flavanoids or Gamma
const calculateClassWiseStats = (wineData: WineData[], property: Property) => {
  const classWiseValues: ClassWiseValues = {};

  // Iterate through the dataset and collect "Flavanoids" or Gamma values for each class
  for (const wine of wineData) {
    const alcoholClass = wine.Alcohol;

    if (!classWiseValues[`Class ${alcoholClass}`]) {
      classWiseValues[`Class ${alcoholClass}`] = [];
    }

    if (property) {
      // property is not empty store Flavanoids values
      classWiseValues[`Class ${alcoholClass}`].push(+wine[property]);
    } else {
      // property is empty then calculate Gamma
      classWiseValues[`Class ${alcoholClass}`].push(calculateGamma(wine));
    }
  }
  // storing classData in the storage
  localStorage.setItem(
    "classData",
    JSON.stringify(Object.keys(classWiseValues))
  );

  return calculateStatisticalMeasures(classWiseValues);
};

// export all Statistics Measures
export default calculateClassWiseStats;
