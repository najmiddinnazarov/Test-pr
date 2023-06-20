import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function LineChart({ chartData }) {
  return <Line data={chartData} />;
}

export default LineChart;
