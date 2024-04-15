import React from "react";
import Cards from "./Cards";

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
    <div className="cardds">
      <Cards>
        <h2>Patients</h2>
        <h4>{totalPatients}</h4>
      </Cards>
      <Cards>
        <h2>Admissions</h2>
        <h4>{totalAdmissions}</h4>
      </Cards>
      <Cards>
        <h2>Visits</h2>
        <h4>{totalVisits}</h4>
      </Cards>
      <Cards>
        <h2>Outpatients</h2>
        <h4>{totalOutPatients}</h4>
      </Cards>
      <Cards>
        <h2>Discharge Summaries</h2>
        <h4>{totalDischargeSummaries}</h4>
      </Cards>
    </div>
  );
};

export default TotalCounts;
