import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function VisitGraph() {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Daily Visits",
        data: [],
        fill: false,
        backgroundColor: "rgb(75, 192, 192)",
        borderColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  });
  const [totalVisitCount, setTotalVisitCount] = useState(0);

  useEffect(() => {
    const visitCounts = [];
    const labels = [];
    const daysToShow = 7;
    for (let i = 0; i < daysToShow; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateString = date.toISOString().split("T")[0];
      const visitCount = localStorage.getItem(`visitCount_${dateString}`);
      visitCounts.unshift(visitCount ? parseInt(visitCount) : 0);
      labels.unshift(dateString);
    }

    // Get total visit count from local storage
    const totalCount = localStorage.getItem("totalVisitCount");
    console.log(totalCount);
    console.log(visitCounts);
    setTotalVisitCount(totalCount);

    setData({
      labels: labels,
      datasets: [
        {
          label: "Daily Visits",
          data: visitCounts,
          fill: false,
          backgroundColor: "rgb(75, 192, 192)",
          borderColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    });
  }, []);

  return (
    <div className="container my-5 h-1/2">
      <div className="VisitGraph">
        <h2>Daily Visits Graph</h2>
        <Line data={data} />
        <p>Total visits across all time: {totalVisitCount}</p>
      </div>
    </div>
  );
}

export default VisitGraph;
