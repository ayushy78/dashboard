import React, { useState } from "react";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import logo from "../logo.png";
import sampleData from "./Data";
import "./Dashboard.css";
import TotalCounts from "./TotalCounts";
import Card from "./Cards";

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
    let filtered = sampleData;
    if (selectedDepartment === "") {
      filtered = sampleData.filter(
        (item) => item.department === selectedDepartment
      );
    }
    console.log(filtered);
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
    console.log(filtered);
    setFilteredData(filtered);
  };

  console.log(filteredData);

  return (
    <div>
      <div className="header bg-primary text-white p-3" style={{ position: "sticky", top: 0 }}>
        <div className="logo-container d-flex align-items-center">
          <img src={logo} className="logo mr-3" alt="logo" />
          <div className="app-name">
            <h1>Sanjay Gandhi Post Graduate Institute of Medical Sciences</h1>
          </div>
        </div>
      </div>
      <div className="dashboard-container mt-4">
        <div className="container">
          <div className="row">
            <h1 className="display-4 my-5 text-center w-100">
              Retrospective Dashboard
            </h1>
          </div>
          <div>
            <Card title="Total Patients" value="1000" />
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-body">
                  <DepartmentFilter
                    onDepartmentChange={handleDepartmentChange}
                  />
                  <DateFilter
                    onDateChange={handleDateChange}
                    dateRange={dateRange}
                  />
                  <button
                    className="btn btn-primary btn-lg mt-3 rounded-pill"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <TotalCounts data={filteredData} />
                  <Charts data={filteredData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
