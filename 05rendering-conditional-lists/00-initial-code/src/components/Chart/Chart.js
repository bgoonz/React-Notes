import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  return (
    <div className="chart">
      <h1>Chart</h1>
      {props.dataPoints.map((dataPoint) => {
          return <ChartBar value={ dataPoint.value } maxVale={ null } label={ dataPoint.label } key={dataPoint.label } />;
      })}
    </div>
  );
};

export default Chart;
