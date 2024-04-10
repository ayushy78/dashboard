import React, { useState, memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });

  const handleDateChange = (dates) => {
    const [start, end] = dates;
    setDateRange({ startDate: start, endDate: end });
    onDateChange({ startDate: start, endDate: end });
  };

  return (
    <div className="mb-4">
      <h3 className="mb-3">Filter by Date Range</h3>
      <MemoisedDatePicker
        selected={dateRange.startDate}
        onChange={handleDateChange}
        startDate={dateRange.startDate}
        endDate={dateRange.endDate}
        selectsRange
        inline
        className="react-datepicker-container"
      />
    </div>
  );
};

const MemoisedDatePicker = memo(DatePicker);

export default DateFilter;
