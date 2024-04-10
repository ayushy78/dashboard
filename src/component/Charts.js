import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';

const Charts = ({ data }) => {
  const patientsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Number of Patients',
        data: data.map((item) => item.numPatients),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const admissionsData = {
    labels: ['Inpatient', 'Outpatient'],
    datasets: [
      {
        data: [
          data.reduce((sum, item) => sum + item.numAdmissions, 0),
          data.reduce((sum, item) => sum + item.numVisits, 0),
        ],
        backgroundColor: ['rgba(255,99,132,0.6)', 'rgba(54,162,235,0.6)'],
        borderColor: ['rgba(255,99,132,1)', 'rgba(54,162,235,1)'],
      },
    ],
  };

  const prescriptionsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Number of Prescriptions',
        data: data.map((item) => item.numPrescriptions),
        backgroundColor: 'rgba(255,206,86,0.4)',
        borderColor: 'rgba(255,206,86,1)',
      },
    ],
  };

  const labResultsData = {
    labels: data.map((item) => item.date),
    datasets: [
      {
        label: 'Number of Lab Results',
        data: data.map((item) => item.numLabResults),
        backgroundColor: 'rgba(153,102,255,0.4)',
        borderColor: 'rgba(153,102,255,1)',
      },
    ],
  };

  return (
    <div>
      <h2>Data Charts</h2>
      <div>
        <h3>Number of Patients</h3>
        <Line data={patientsData} />
      </div>
      <div>
        <h3>Admissions vs Visits</h3>
        <Pie data={admissionsData} />
      </div>
      <div>
        <h3>Number of Prescriptions</h3>
        <Bar data={prescriptionsData} />
      </div>
      <div>
        <h3>Number of Lab Results</h3>
        <Line data={labResultsData} />
      </div>
    </div>
  );
};

export default Charts;