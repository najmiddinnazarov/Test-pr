import React from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, Chart } from "chart.js";

Chart.register(CategoryScale);

function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

export default LineChart;
