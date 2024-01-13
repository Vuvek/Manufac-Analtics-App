import {
  Property,
  WineData,
  ClassWiseStats,
  ClassWiseValues
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
  data = data.sort((a, b) => a - b);
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
  let modeValues = [];
  let maxFrequency = 0;
  const frequencyMap: any = new Map();

  for (const val of data) {
    frequencyMap.set(val, (frequencyMap.get(val) || 0) + 1);
  }

  for (const [value, frequency] of frequencyMap) {
    if (frequency > maxFrequency) {
      modeValues = [value];
      maxFrequency = frequency;
    } else if (frequency === maxFrequency) {
      modeValues.push(value);
    }
  }

  return modeValues.length === data.length ? "No mode" : modeValues.join(",");
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
      mode: mode,
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

  for (const wine of wineData) {
    const alcoholClass = wine.Alcohol;

    if (!classWiseValues[`Alcohol ${alcoholClass}`]) {
      classWiseValues[`Alcohol ${alcoholClass}`] = [];
    }

    if (property) {
      // property is not empty hence store Flavanoids values from Wine Data.
      classWiseValues[`Alcohol ${alcoholClass}`].push(+wine[property]);
    } else {
      // property is empty hence calculate Gamma Values.
      classWiseValues[`Alcohol ${alcoholClass}`].push(calculateGamma(wine));
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
