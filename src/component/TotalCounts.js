import React from "react";

const TotalCounts = ({ data }) => {
  const totalPatients = data.reduce((sum, item) => sum + item.numPatients, 0);
  const totalAdmissions = data.reduce(
    (sum, item) => sum + item.numAdmissions,
    0
  );
  const totalVisits = data.reduce((sum, item) => sum + item.numVisits, 0);

  return (
    <div className="row">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Patients</h5>
            <p className="card-text">{totalPatients}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Admissions</h5>
            <p className="card-text">{totalAdmissions}</p>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Visits</h5>
            <p className="card-text">{totalVisits}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalCounts;
