import { useEffect, useState } from "react";

const SelectField = ({ label, options, onChange, selectedValue }) => {
  const [selectedFilter, setSelectedFilter] = useState('');

  // Get option value based on label
  const getOptionValue = (item) => {
    switch (label) {
      case "Location":
      case "Type":
      case "Experience":
      case "Salary":
        return item.id;
      default:
        return "undefined";
    }
  };

  // Get option text based on label
  const getOptionText = (item) => {
    switch (label) {
      case "Location":
        return item.location_name;
      case "Type":
        return item.job_type_name;
      case "Experience":
        return item.experience_name;
      case "Salary":
        return item.range;
      default:
        return undefined;
    }
  };

  useEffect(() => {
    // Update the selectedFilter based on selectedValue prop
    const getSelectedValue = (selected) => {
      switch (label) {
        case "Location":
          return selected?.location || '';
        case "Type":
          return selected?.type || '';
        case "Experience":
          return selected?.experience || '';
        case "Salary":
          return selected?.salary || '';
        default:
          return '';
      }
    };

    setSelectedFilter(getSelectedValue(selectedValue));
  }, [selectedValue, label]);

  const handleSelectChange = (e) => {
    onChange(label, e.target.value); // Send selected value to parent
  };

  return (
    <div className="flex flex-col mb-4">
      <label htmlFor={label.toLowerCase()} className="text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        name={label}
        id={label.toLowerCase()}
        className="border border-gray-300 p-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        onChange={handleSelectChange}
        value={selectedFilter} // Set the selected value based on state
      >
        <option value="">Select {label}</option>
        {options.map((item) => {
          const value = getOptionValue(item);
          const text = getOptionText(item);
          return value && text ? (
            <option key={value} value={value}>
              {text}
            </option>
          ) : null;
        })}
      </select>
    </div>
  );
};

export default SelectField;
