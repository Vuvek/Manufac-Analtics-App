import { Property, WineData } from "../types/wineUtils";
import { calculateGamma } from "./utilityFunctions";

Array.prototype.CustomFilter = function (callback : (wineData : WineData) => boolean,property : Property) : number[] {
    let wineData : WineData[] = this;
    let newArr : number[] = [];
    for (let i = 0; i < wineData.length; i++) {
      const check = callback(wineData[i]);
      if(check) {
        if(property) {
          newArr.push(+wineData[i][property]);
        } else {
          newArr.push(calculateGamma(wineData[i]));
        }
      }
    }
    return newArr;
};