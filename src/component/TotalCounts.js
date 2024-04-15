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
      <Cards title="Patients" value={totalPatients} />
      <Cards title="Admissions" value={totalAdmissions} />
      <Cards title="Visits" value={totalVisits} />
      <Cards title="Outpatients" value={totalOutPatients} />
      <Cards title="Discharge Summaries" value={totalDischargeSummaries} />
    </div>
  );
};

export default TotalCounts;
