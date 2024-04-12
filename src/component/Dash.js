import React, { useState, useEffect } from "react";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import logo from "../logo.png";
import sampleData from "./Data";
import axios from "axios";

import "./Dashboard.css";
const Dash = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    year: null,
    month: null,
  });

  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/posts")
      .then((res) => {
        setFilteredData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const clearFilters = () => {
    setSelectedDepartment("");
    setDateRange({
      startDate: null,
      endDate: null,
      year: null,
      month: null,
    });
    setFilteredData(filteredData);
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
    <div>
      <div className="header">
        <div className="logo-container">
          <img src={logo} className="logo" alt="logo" />
          <div className="app-name">
            <h1>Sanjay Gandhi Post Graduate Institute of Medical Sciences</h1>
          </div>
        </div>
      </div>
      <div className="dashboard-container row align-items-center">
        <div className="container">
          <div className="row">
            <h1 className="display-4 my-5 text-center mb-5">
              Retrospective Dashboard
            </h1>
          </div>
          <div className="row">
            <div className="col-md-4">
              <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
              <DateFilter
                onDateChange={handleDateChange}
                dateRange={dateRange}
              />
              <button onClick={clearFilters}>Clear Filters</button>
            </div>
            <div className="col-md-8">
              <Charts data={filteredData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
