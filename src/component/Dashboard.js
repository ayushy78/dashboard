import React, { useState } from 'react';
import DepartmentFilter from './DepartmentFilter';
import DateFilter from './DateFilter';
import Charts from './Charts';
import sampleData from './Data';

const Dashboard = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [dateRange, setDateRange] = useState({ startDate: null, endDate: null });
  const [filteredData, setFilteredData] = useState(sampleData);

  const handleDepartmentChange = (department) => {
    setSelectedDepartment(department);
    const filtered = sampleData.filter((item) => item.department === selectedDepartment);
    setFilteredData(filtered);
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
    const filtered = sampleData.filter((item) => {
      const itemDate = new Date(item.date);
      if (!dateRange.startDate && !dateRange.endDate) {
        return true;
      } else if (!dateRange.startDate) {
        return itemDate <= dateRange.endDate;
      } else if (!dateRange.endDate) {
        return itemDate >= dateRange.startDate;
      } else {
        return itemDate >= dateRange.startDate && itemDate <= dateRange.endDate;
      }
    });
    setFilteredData(filtered);
  };

  return (
    <div>
      <DepartmentFilter onDepartmentChange={handleDepartmentChange} />
      <DateFilter onDateChange={handleDateChange} />
      <Charts data={filteredData} />
    </div>
  );
};

export default Dashboard;