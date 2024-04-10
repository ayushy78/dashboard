import React, { useState, memo } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
            maxDate={endDate}
            placeholderText="Select start date"
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
            minDate={startDate}
            placeholderText="Select end date"
          />
        </div>
      </div>
    </div>
  );
};

const MemoisedDatePicker = memo(DatePicker);
export default DateFilter;