import React, { useEffect, useRef } from "react";
import { Line, Bar, Pie } from "react-chartjs-2";
import Card from "./Cards";

import "./Charts.css";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement
);

const Charts = ({ data }) => {
  const chartRefs = useRef([]);

  useEffect(() => {
    const maxHeight = Math.max(
      ...chartRefs.current.map(
        (ref) => ref?.chartInstance?.canvas?.offsetHeight || 0
      )
    );
    chartRefs.current.forEach((ref) => {
      if (ref?.chartInstance?.canvas) {
        ref.chartInstance.canvas.parentNode.style.height = `${maxHeight}px`;
      }
    });
  }, [data]);

  const patientsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Number of Patients",
        data: data.map((item) => item.numPatients),
        backgroundColor: "rgba(75, 192, 192, 0.4)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        
      },
    ],
  };

  const totalCountsData = {
    labels: ["Admissions", "Visits", "Outpatients", "Discharge Summaries"],
    datasets: [
      {
        data: [
          data.reduce((sum, item) => sum + item.numAdmissions, 0),
          data.reduce((sum, item) => sum + item.numVisits, 0),
          data.reduce((sum, item) => sum + item.numOutpatients, 0),
          data.reduce((sum, item) => sum + item.numDischargeSummaries, 0),
        ],
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
      },
    ]
  };

  const ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
        },
      },
      x: {
        ticks: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Data Charts",
        font: {
          size: 24,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          weight: "bold",
        },
      },
      tooltip: {
        bodyFont: {
          size: 14,
          family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        },
      },
      legend: {
        labels: {
          font: {
            size: 14,
            family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
          },
        },
      },
    },
    backgroundColor: 'rgba(255,99,132,0.2)',
    borderColor: 'rgba(255,99,132,1)',
    borderWidth: 1,
    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    hoverBorderColor: 'rgba(255,99,132,1)',
  };

  const admissionsData = {
    labels: ["Inpatient", "Outpatient"],
    datasets: [
      {
        data: [
          data.reduce((sum, item) => sum + item.numAdmissions, 0),
          data.reduce((sum, item) => sum + item.numVisits, 0),
        ],
        backgroundColor: ["rgba(255,99,132,0.6)", "rgba(54,162,235,0.6)"],
        borderColor: ["rgba(255,99,132,1)", "rgba(54,162,235,1)"],
      },
    ],
  };

  const prescriptionsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Number of Prescriptions",
        data: data.map((item) => item.numPrescriptions),
        backgroundColor: "rgba(255, 206, 86, 0.4)",
        borderColor: "rgba(255, 206, 86, 1)",
        borderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const labResultsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Number of Lab Results",
        data: data.map((item) => item.numLabResults),
        backgroundColor: "rgba(153,102,255,0.4)",
        borderColor: "rgba(153,102,255,1)",
      },
    ],
  };

  return (
    <Card className="cardds">
      <h2 className="mb-4">Data Charts</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <Card className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Number of Patients</h3>
              <Line
                data={patientsData}
                ref={(ref) => (chartRefs.current[0] = ref)}
              />
            </div>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card className="chart-card card h-100">
            <div className="card-body">
              <h3 className="card-title">Total Counts</h3>
              <div className="chart-container">
                <Bar
                  data={totalCountsData}
                  options={{ ChartOptions, height: 700, width:500, }}
                  ref={(ref) => (chartRefs.current[1] = ref)}
                ></Bar>
              </div>
            </div>
          </Card>
        </div>

        <div className="col-md-6 mb-4">
          <Card className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Number of Prescriptions</h3>
              <Line
                data={prescriptionsData}
                ref={(ref) => (chartRefs.current[3] = ref)}
              />
            </div>
          </Card>
        </div>
        <div className="col-md-6 mb-4">
          <Card className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Number of Lab Results</h3>
              <Line
                data={labResultsData}
                ref={(ref) => (chartRefs.current[4] = ref)}
              />
            </div>
          </Card>
        </div>
      </div>
      <div className="col-md-12 mb-4">
        <Card className="card h-100">
          <div className="card-body">
            <h3 className="card-title">Admissions vs Visits</h3>
            <Pie
              data={admissionsData}
              ref={(ref) => (chartRefs.current[2] = ref)}
            />
          </div>
        </Card>
      </div>
    </Card>
  );
};

export default Charts;
