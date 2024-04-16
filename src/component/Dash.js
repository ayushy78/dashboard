import React, { useState, useEffect } from "react";

import "./Dashboard.css";
import DepartmentFilter from "./DepartmentFilter";
import DateFilter from "./DateFilter";
import Charts from "./Charts";
import logo from "../logo.png";
import sampleData from "./Data";
import axios from "axios";
import TotalCounts from "./TotalCounts";
import Popup from "./Popup";
import Card from "./Cards";
const Dash = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    year: null,
    month: null,
  });
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState("Initial data");
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
    let filtered = sampleData;
    if (selectedDepartment === "") {
      filtered = sampleData.filter(
        (item) => item.department === selectedDepartment
      );
    }
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
          <TotalCounts data={filteredData} />
          <div className="row">
            {showPopup && (
              <Popup
                onClose={() => setShowPopup(false)}
                data={data}
                onDataChange={(newData) => setData(newData)}
              />
            )}
            <div className="col-md-4">
              <Card>
                <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
                {/* <DateFilter
                  onDateChange={handleDateChange}
                  dateRange={dateRange}
                /> */}
                <div className="button-row">
                  <button onClick={() => setShowPopup(true)}>Open Popup</button>
                  <button onClick={clearFilters}>Clear Filters</button>
                </div>
              </Card>
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
