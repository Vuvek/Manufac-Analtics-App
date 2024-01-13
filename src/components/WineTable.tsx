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
              <th>{`Class ${wine}`}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{title} Mean</td>
            {classData.map((wine: number[]) => (
              <td>{classWiseStats[`Class ${wine}`].mean}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Median</td>
            {classData.map((wine: number[]) => (
              <td>{classWiseStats[`Class ${wine}`].median}</td>
            ))}
          </tr>
          <tr>
            <td>{title} Mode</td>
            {classData.map((wine: number[]) => (
              <td>{classWiseStats[`Class ${wine}`].mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatsTable;
