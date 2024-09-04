import SelectField from "./SelectField";
import { useRef } from "react";

const TopFilter = ({ filtersData, onChange, search, setSearch, selectedFilters, vacancies, removeFilters, initialValues }) => {
  const searchRef = useRef(null);

  // Handle search input change
  const handleSearchChange = (e) => setSearch(e.target.value);

  // Handle filter change
  const handleFilterChange = (label, value) => onChange(label, value);

  // Get the option text based on label and value
  const getOptionText = (label, value, data) => {
    if (!data) return null;

    const selectedOption = data.find((item) => item.id == value);
    if (!selectedOption) return null;

    switch (label) {
      case "Location":
        return selectedOption.location_name;
      case "Type":
        return selectedOption.job_type_name;
      case "Experience":
        return selectedOption.experience_name;
      case "Salary":
        return selectedOption.range;
      default:
        return value;
    }
  };


  const renderFilterTag = (label, value, removeHandler, data) => {
    const optionText = getOptionText(label, value, data);
    return (
      value && optionText && (
        <div className="flex bg-cyan-100 text-cyan-800 rounded-lg py-1 px-4">
          {optionText}
          <button className="ml-2 text-cyan-600 justify-self-end" onClick={() => removeHandler(label)}>
            &#x2715;
          </button>
        </div>
      )
    );
  };

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 md:px-0 px-4">
        Cari <span className="text-accent">Lowongan</span>
      </h1>

      <div className="bg-white p-6 rounded-xl shadow-lg">
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Search Field */}
          <div className="flex-1 ">
            <label htmlFor="search-vacancies" className="block text-lg font-medium text-gray-700 mb-2">
              Search
            </label>
            <input
              ref={searchRef}
              type="text"
              value={search}
              onChange={handleSearchChange}
              id="search-vacancies"
              placeholder="Search for jobs..."
              className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
            />
            {/* <p className="text-[#6c757d] mt-1 ms-">lorem</p> */}
          </div>

          {/* Filters */}
          {filtersData && (
            <div className="flex-1">
              <p className="text-lg font-medium text-gray-700 mb-2">Filter</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <SelectField
                  label="Location"
                  options={filtersData.locations}
                  onChange={handleFilterChange}
                  selectedValue={initialValues}
                />
                <SelectField
                  label="Type"
                  options={filtersData.job_type}
                  onChange={handleFilterChange}
                  selectedValue={initialValues}

                />
                <SelectField
                  label="Experience"
                  options={filtersData.experience}
                  onChange={handleFilterChange}
                  selectedValue={initialValues}

                />
                <SelectField
                  label="Salary"
                  options={filtersData.salary_range}
                  onChange={handleFilterChange}
                  selectedValue={initialValues}

                />
              </div>
            </div>
          )}
        </div>

        {/* Active Filters */}
        <div className="flex gap-4 md:items-center mt-4">
          {(search || selectedFilters.location || selectedFilters.type || selectedFilters.experience || selectedFilters.salary) && (
            <p>Active filters:</p>
          )}


          <div className="flex flex-nowrap flex-col">

          {search && (
            <div className="bg-cyan-100 text-cyan-800 rounded-lg py-1 px-4">
              {search}
              <button className="ml-2 text-cyan-600" onClick={() => setSearch("")}>
                &#x2715;
              </button>
            </div>
          )}

          {renderFilterTag("Location", selectedFilters.location, removeFilters, filtersData?.locations)}
          {renderFilterTag("Type", selectedFilters.type, removeFilters, filtersData?.job_type)}
          {renderFilterTag("Experience", selectedFilters.experience, removeFilters, filtersData?.experience)}
          {renderFilterTag("Salary", selectedFilters.salary, removeFilters, filtersData?.salary_range)}
          {
              (search || selectedFilters.location || selectedFilters.type || selectedFilters.experience || selectedFilters.salary) &&   <button
              className="self-center"
              onClick={() => {
                setSearch("");
                removeFilters("location");
                removeFilters("type");
                removeFilters("experience");
                removeFilters("salary");
              }}
            >
              &#x2715;
            </button>
          }
          </div>
        
        </div>
        <p className="text-base mt-2">Showing results: {vacancies?.length}</p>
      </div>
    </section>
  );
};

export default TopFilter;
