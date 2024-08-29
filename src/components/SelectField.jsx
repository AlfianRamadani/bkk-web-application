const SelectField = ({ label, options, onChange }) => {
  const getOptionValue = (item) => {
    switch (label) {
      case "Location":
      case "Job Type":
      case "Experience":
      case "Salary Range":
        return item.id;
      default:
        return undefined;
    }
  };

  const getOptionText = (item) => {
    switch (label) {
      case "Location":
        return item.location_name;
      case "Job Type":
        return item.job_type_name;
      case "Experience":
        return item.experience_name;
      case "Salary Range":
        return item.range;
      default:
        return undefined;
    }
  };

  const handleSelectChange = (e) => {
    onChange(label, e.target.value); // Mengirimkan nilai yang dipilih ke parent
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
        onChange={handleSelectChange} // Memanggil handleSelectChange pada perubahan
      >
        <option value="" disabled>Select {label}</option>
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
