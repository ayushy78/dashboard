import React from 'react';
import Select from 'react-select';

const DepartmentFilter = ({ onDepartmentChange }) => {
  const departments = [
    { value: 'Cardiology', label: 'Cardiology' },
    { value: 'Neurology', label: 'Neurology' },
    { value: 'Orthopedics', label: 'Orthopedics' },
    { value: 'Pediatrics', label: 'Pediatrics' },
  ];

  const handleDepartmentChange = (selectedOption) => {
    onDepartmentChange(selectedOption.value);
  };

  return (
    <div className="mb-4">
      <h3 className="mb-3">Filter by Department</h3>
      <Select
        options={departments}
        onChange={handleDepartmentChange}
        placeholder="Select a department"
        className="react-select-container"
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default DepartmentFilter;