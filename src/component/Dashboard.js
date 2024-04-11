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
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="my-5 text-center">Hospital Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
          <DateFilter onDateChange={handleDateChange} dateRange={dateRange} />
          
        </div>
        <div className="col-md-8">
          <Charts data={filteredData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
