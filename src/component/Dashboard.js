import React, { useState } from "react";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import logo from "../logo.png";
import sampleData from "./Data";
import "./Dashboard.css";
const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    year: null,
    month: null,
  });
  const [filteredData, setFilteredData] = useState(sampleData);

  const clearFilters = () => {
    setSelectedDepartment("");
    setDateRange({
      startDate: null,
      endDate: null,
      year: null,
      month: null,
    });
    setFilteredData(sampleData);
  };

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    const filtered = sampleData.filter(
      (item) => item.department === selectedDepartment
    );
    setFilteredData(filtered);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
    let filtered = sampleData.filter((item) => {
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
    // Filter by year and month if not null
    if (dates.year) {
      filtered = filtered.filter(
        (item) => new Date(item.date).getFullYear() === dates.year
      );
    }
    if (dates.month) {
      filtered = filtered.filter(
        (item) => new Date(item.date).getMonth() + 1 === dates.month
      );
    }
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="col">
          <h1 className="display-4 my-5 text-center mb-5">
            Retrospective Dashboard
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
          <DateFilter onDateChange={handleDateChange} dateRange={dateRange} />
          <button onClick={clearFilters}>Clear Filters</button>
        </div>
        <div className="col-md-8">
          <Charts data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
