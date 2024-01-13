import React from "react";
import { FlavanoidsStatsProps } from "../types/wineTableTypes";

const WineStatsTable: React.FC<FlavanoidsStatsProps> = (props) => {
  // props
  const { classWiseStats, title } = props;

  // Getting classData from storage
  const classData = JSON.parse(localStorage.getItem("classData") ?? "[]");

  return (
    <div className="table-container">
      {/* Heading */}
      <h2 className="heading">{title} Statistics</h2>

      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {classData.map((wine: string) => (
              <th key={wine}>{wine}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{title} Mean</td>
            {classData.map((wine: string) => (
              <td key={wine}>{classWiseStats[wine].mean}</td>
            ))}
          </tr>

          <tr>
            <td>{title} Median</td>
            {classData.map((wine: string) => (
              <td key={wine}>{classWiseStats[wine].median}</td>
            ))}
          </tr>

          <tr>
            <td>{title} Mode</td>
            {classData.map((wine: string) => (
              <td key={wine}>{classWiseStats[wine].mode}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WineStatsTable;
