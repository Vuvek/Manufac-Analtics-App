import React from "react";
import {
  FlavanoidsStatsProps,
} from "../types/wineUtils";

const WineStatsTable: React.FC<FlavanoidsStatsProps> = ({ classWiseStats,title }) => {
  const classData = JSON.parse(localStorage.getItem("classData") ?? "[]");
  return (
    <div className="table-container">
      <h2 className="heading">{title} Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classData.map((wine: number[]) => (
              <th key={`Class ${wine}`}>{`Class ${wine}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title} Mean</td>
            {classData.map((wine: number[]) => (
              <td key={`Class ${wine}`} >{classWiseStats[`Class ${wine}`].mean}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Median</td>
            {classData.map((wine: number[]) => (
              <td key={`Class ${wine}`} >{classWiseStats[`Class ${wine}`].median}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Mode</td>
            {classData.map((wine: number[]) => (
              <td key={`Class ${wine}`} >{classWiseStats[`Class ${wine}`].mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatsTable;
