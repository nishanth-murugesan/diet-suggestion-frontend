import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export function Piechart({ values }) {
  const data = {
    labels: ["protein", "fat", "carbohydrates", "calories"],
    datasets: [
      {
        data: [
          values.protein,
          values.fat,
          values.carbohydrates,
          values.calories,
        ],
        backgroundColor: [
          "rgba(52, 185, 63, 0.842)",
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  };
  return (
    <div className="piechart">
      <Pie data={data} />
    </div>
  );
}
