import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

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
    const totalVisitCounts = visitCounts.reduce((a, b) => a + b, 0);
    setTotalVisitCount(totalVisitCounts);

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
    <div className="container my-5" style={{ width: "50vw", height: "50vh" }}>
      <div className="row h-100 align-items-center justify-content-center">
        <div className="col-12 h-100 d-flex flex-column align-items-center justify-content-center">
          <h2>Total Visitor Count: {totalVisitCount}</h2>
          <h3>Daily Visits Graph</h3>
          <div style={{ width: "100%", height: "100%" }}>
            <Line data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitGraph;
