import React from "react";
import Select from "react-select";
import Card from "./Cards";

const DepartmentFilter = ({ onDepartmentChange }) => {
  const departments = [
    { value: "all", label: "All Departments" },
    { value: "Cardiology", label: "Cardiology" },
    { value: "Neurology", label: "Neurology" },
    { value: "Orthopedics", label: "Orthopedics" },
    { value: "Pediatrics", label: "Pediatrics" },
  ];

  const handleDepartmentChange = (selectedOption) => {
    onDepartmentChange(
      selectedOption.value === "all" ? "" : selectedOption.value
    );
  };

  return (
    <Card>
      <div className="card mb-4">
        <div className="card-body">
          <h3 className="mb-3">Department</h3>
          <Select
            options={departments}
            onChange={handleDepartmentChange}
            placeholder="Select a department"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </div>
      </div>
    </Card>
  );
};

export default DepartmentFilter;
