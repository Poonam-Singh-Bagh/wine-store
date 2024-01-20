import React from "react";

function Table({ mean, median, mode, wineData, table }) {
  return (
    <div className="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            <th>Class 1</th>
            <th>Class 2</th>
            <th>Class 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{table} Mean</th>
            <td>{mean(wineData, 1, table)}</td>
            <td>{mean(wineData, 2, table)}</td>
            <td>{mean(wineData, 3, table)}</td>
          </tr>
          <tr>
            <th>{table} Median</th>
            <td>{median(wineData, 1, table)}</td>
            <td>{median(wineData, 2, table)}</td>
            <td>{median(wineData, 3, table)}</td>
          </tr>
          <tr>
            <th>{table} Mode</th>
            <td>{mode(wineData, 1, table)}</td>
            <td>{mode(wineData, 2, table)}</td>
            <td>{mode(wineData, 3, table)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
