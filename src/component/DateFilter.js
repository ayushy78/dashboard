import React, { useState, memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onDateChange, dateRange }) => {
  const [startDate, setStartDate] = useState(dateRange.startDate || null);
  const [endDate, setEndDate] = useState(dateRange.endDate || null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDateChange({ startDate: date, endDate });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDateChange({ startDate, endDate: date });
  };

  return (
    <div className="mb-4">
      <h3 className="mb-3">Filter by Date Range</h3>
      <div className="d-flex">
        <div className="mr-3">
          <label>Start Date:</label>
          <MemoisedDatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date("2023-12-31")}
            minDate={new Date("2010-01-01")}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select start year"
          />
        </div>
        <div>
          <label>End Date:</label>
          <MemoisedDatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            maxDate={new Date("2023-12-31")}
            minDate={new Date("2010-01-01")}
            showYearPicker
            dateFormat="yyyy"
            placeholderText="Select end year"
          />
        </div>
      </div>
    </div>
  );
};

const MemoisedDatePicker = memo(DatePicker);
export default DateFilter;
