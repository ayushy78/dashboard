import React, { useState } from "react";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import sampleData from "./Data";
import logo from "../logo.png"; // Import the logo

const Dashboard = () => {
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleDepartmentChange = (department) => {
    const filtered = sampleData.filter(
      (item) => item.department === department
    );
    setFilteredData(filtered);
  };

  const handleDateChange = (dates) => {
    const filtered = sampleData.filter((item) => {
      const itemDate = new Date(item.date);
      if (!dates.startDate && !dates.endDate) {
        return true;
      } else if (!dates.startDate) {
        return itemDate <= dates.endDate;
      } else if (!dates.endDate) {
        return itemDate >= dates.startDate;
      } else {
        return itemDate >= dates.startDate && itemDate <= dates.endDate;
      }
    });
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <div className="row">
        <div className="col">
          <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
        </div>
        <div className="col">
          <DateFilter onDateChange={handleDateChange} />
        </div>
      </div>
      <Charts data={filteredData} />
    </div>
  );
};

export default Dashboard;