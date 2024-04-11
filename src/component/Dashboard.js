import React, { useState } from "react";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import TotalCounts from "./TotalCounts";
import sampleData from "./Data";

const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    const filtered = sampleData.filter(
      (item) => item.department === selectedDepartment
    );
    setFilteredData(filtered);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
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
      <h1 className="my-5 text-center">Hospital Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
          <DateFilter onDateChange={handleDateChange} dateRange={dateRange} />
        </div>
        <div className="col-md-8">
          <TotalCounts data={filteredData} />
          <Charts data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
