import React from "react";
import { mean, median, mode } from "../constant";
import Table from "../Table";

function GammaTable({ wineData }) {
  return (
    <div>
      <Table
        mean={mean}
        median={median}
        mode={mode}
        wineData={wineData}
        table="Gamma"
      />
    </div>
  );
}

export default GammaTable;
