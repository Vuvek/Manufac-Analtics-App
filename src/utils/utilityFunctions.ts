import { ClassWiseStats, Property, Stats, WineData } from "../types/wineUtils";

const calculateMean = (data : number[]) => {
  
    // Calculate mean
    const mean = data.reduce((sum, current : any) => sum + current, 0) / data.length;
    return mean.toFixed(3);
}


  // Function to calculate median
const calculateMedian = (data : number[]) => {
  let median;

  const mid = Math.floor(data.length / 2);

    // calculate median
    if(data.length % 2 === 0) {
      const middle1 = data[mid - 1];
      const middle2 = data[mid];
      median = (middle1 + middle2) / 2;
    } else {
      const middle = data[mid];
      median = middle
    }
    return median.toFixed(3);
}


// Function to calculate mode
export const calculateMode = (data: number[]) => {
  const modeMap: Record<number, number> = {};
  let maxCount = 0;
  let mode: number | null = null;

  data.forEach(value => {
    modeMap[value] = (modeMap[value] || 0) + 1;

    if (modeMap[value] > maxCount) {
      maxCount = modeMap[value];
      mode = value;
    }
  });

  return mode !== null ? (mode as number).toFixed(3) : 'No mode';
};


  
  // Function to calculate Statistics
export const calculateStatisticalMeasures = (data : number[]) : Stats => {

  // Calculate mean
  const mean = calculateMean(data);

  // Calculate median
  const median = calculateMedian(data);

  // Calculate mode
  const mode = calculateMode(data);

  return {mean : +mean,mode : +mode,median : +median};
};


export const getClassNames = (wineData : WineData[]) => {
  return Array.from(new Set(wineData.map(wine => wine.Alcohol)));
}
  

// Gamma Function
export const calculateGamma = (entry : WineData) => {
  const {Ash,Hue,Magnesium} = entry;
  return Number(((+Ash * +Hue) / +Magnesium).toFixed(3))
}


// Function to calculate class-wise statistics for Flavanoids or Gamma
export const calculateClassWiseStats = (wineData: WineData[],property : Property) => {
  const classStats : ClassWiseStats = {};
  let classData = getClassNames(wineData);
  localStorage.setItem("classData",JSON.stringify(classData));

  classData.forEach(wine => {
    // Filter data by class
    const cleanData = wineData.CustomFilter((entry) => entry.Alcohol === wine,property);

    classStats[`Class ${wine}`] = calculateStatisticalMeasures(cleanData);
  })

  return classStats;
};