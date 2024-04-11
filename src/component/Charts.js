import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, BarElement } from "chart.js";

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement);

const Charts = ({ data }) => {
  const patientsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: "Number of Patients",
        data: data.map((item) => item.numPatients),
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const admissionsData = {
    labels: ["Total Admissions"],
    datasets: [
      {
        data: [data.reduce((sum, item) => sum + item.numAdmissions, 0)],
        backgroundColor: ["rgba(255,99,132,0.6)"],
        borderColor: ["rgba(255,99,132,1)"],
      },
    ],
  };

  const visitsData = {
    labels: ["Total Visits"],
    datasets: [
      {
        data: [data.reduce((sum, item) => sum + item.numVisits, 0)],
        backgroundColor: ["rgba(54,162,235,0.6)"],
        borderColor: ["rgba(54,162,235,1)"],
      },
    ],
  };

  const outpatientsData = {
    labels: ["Total Outpatients"],
    datasets: [
      {
        data: [data.reduce((sum, item) => sum + item.numOutpatients, 0)],
        backgroundColor: ["rgba(153,102,255,0.6)"],
        borderColor: ["rgba(153,102,255,1)"],
      },
    ],
  };

  const dischargeSummariesData = {
    labels: ["Total Discharge Summaries"],
    datasets: [
      {
        data: [data.reduce((sum, item) => sum + item.numDischargeSummaries, 0)],
        backgroundColor: ["rgba(255,206,86,0.6)"],
        borderColor: ["rgba(255,206,86,1)"],
      },
    ],
  };

  return (
    <div>
      <h2 className="mb-4">Data Charts</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Number of Patients</h3>
              <Line data={patientsData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total Admissions</h3>
              <Bar data={admissionsData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total Visits</h3>
              <Bar data={visitsData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total Outpatients</h3>
              <Bar data={outpatientsData} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total Discharge Summaries</h3>
              <Bar data={dischargeSummariesData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;