import React from "react";
import Table from "../Table";
import { mean, median, mode } from "../constant";

function FlavanoidsTable({ wineData }) {
  return (
    <div>
      <Table
        mean={mean}
        median={median}
        mode={mode}
        wineData={wineData}
        table="Flavanoids"
      />
    </div>
  );
}

export default FlavanoidsTable;
