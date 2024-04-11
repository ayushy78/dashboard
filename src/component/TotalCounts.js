import React from "react";

const TotalCounts = ({ data }) => {
  const totalPatients = data.reduce((sum, item) => sum + item.numPatients, 0);
  const totalAdmissions = data.reduce(
    (sum, item) => sum + item.numAdmissions,
    0
  );
  const totalOutPatients = data.reduce(
    (sum, item) => sum + item.numOutpatients,
    0
  );
  const totalVisits = data.reduce((sum, item) => sum + item.numVisits, 0);
  const totalDischargeSummaries = data.reduce(
    (sum, item) => sum + item.numDischargeSummaries,
    0
  );

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Patients</h5>
            <p className="card-text">{totalPatients}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Admissions</h5>
            <p className="card-text">{totalAdmissions}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Visits</h5>
            <p className="card-text">{totalVisits}</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Outpatients</h5>
            <p className="card-text">{totalOutPatients}</p>
          </div>
        </div>
      </div>
      <div className="col-md-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Discharge Summaries</h5>
            <p className="card-text">{totalDischargeSummaries}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCounts;
