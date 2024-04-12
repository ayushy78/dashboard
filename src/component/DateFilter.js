import React, { useState, useEffect, memo } from "react";
import DatePicker from "react-datepicker";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ onDateChange, dateRange }) => {
  const [startDate, setStartDate] = useState(dateRange.startDate || null);
  const [endDate, setEndDate] = useState(dateRange.endDate || null);
  const [year, setYear] = useState(null);
  const [month, setMonth] = useState(null);

  useEffect(() => {
    setStartDate(dateRange.startDate);
    setEndDate(dateRange.endDate);
    setYear(dateRange.year);
    setMonth(dateRange.month);
  }, [dateRange]);

  const years = Array.from({ length: 14 }, (_, i) => 2010 + i).map((year) => ({
    value: year,
    label: year.toString(),
  }));

  const selectedYear = years.find((option) => option.value === year);

  const months = Array.from({ length: 12 }, (_, i) => {
    const month = new Date(0, i).toLocaleString("default", { month: "short" });
    return {
      value: i + 1,
      label: month,
    };
  });

  const selectedMonth = months.find((option) => option.value === month);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDateChange({ startDate: date, endDate, year, month });
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDateChange({ startDate, endDate: date, year, month });
  };

  const handleYearChange = (select) => {
    setYear(select.value);
    onDateChange({ startDate, endDate, year: select.value, month });
  };

  const handleMonthChange = (select) => {
    setMonth(select.value);
    onDateChange({ startDate, endDate, year, month: select.value });
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h3 className="mb-3">Filter by Date Range</h3>
        <div className="row">
          <div className="col-md-6">
            <label className="mb-2">Start Date</label>
            <MemoisedDatePicker
              value={startDate || ""}
              selected={startDate}
              onChange={handleStartDateChange}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              maxDate={new Date("2023-12-31")}
              minDate={new Date("2010-01-01")}
              showYearPicker
              dateFormat="yyyy-mm-dd"
              placeholderText="Select start year"
              className="form-control"
            />
          </div>
          <div className="col-md-6">
            <label className="mb-2">End Date</label>
            <MemoisedDatePicker
              value={endDate || ""}
              selected={endDate}
              onChange={handleEndDateChange}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              maxDate={new Date("2023-12-31")}
              minDate={new Date("2010-01-01")}
              showYearPicker
              dateFormat="yyyy-mm-dd"
              placeholderText="Select end year"
              className="form-control"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label className="mb-2">Year</label>
            <Select
              value={selectedYear || ""}
              options={years}
              year={year}
              onChange={handleYearChange}
              placeholder="Select a year"
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
          <div className="col-md-6">
            <label className="mb-2">Month</label>
            <Select
              value={selectedMonth || ""}
              options={months}
              month={month}
              onChange={handleMonthChange}
              placeholder="Select a month"
              className="react-select-container"
              classNamePrefix="react-select"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const MemoisedDatePicker = memo(DatePicker);
export default DateFilter;
