import SelectField from "./SelectField";
import { useRef } from "react";

const TopFilter = ({ filtersData, onChange, search, setSearch }) => {
  const searchRef = useRef(null);

  // Handle pencarian
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle perubahan filter
  const handleFilterChange = (label, value) => {
    onChange(label, value);
  };

  return (
    <section className="max-w-7xl mx-auto py-10">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
        Cari <span className="text-accent">Lowongan</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8 bg-white p-6 rounded-xl shadow-lg">
        <div className="flex-1">
          <label htmlFor="search-vacancies" className="block text-lg font-medium text-gray-700 mb-2">
            Search
          </label>
          <input
            ref={searchRef}
            type="text"
            value={search} // Menggunakan state search
            onChange={handleSearchChange} // Memanggil handleSearchChange pada perubahan input
            id="search-vacancies"
            placeholder="Search for jobs..."
            className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
          />
        </div>

        <div className="flex-1">
          <p className="text-lg font-medium text-gray-700 mb-2">Filter</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtersData && (
              <>
                <SelectField
                  label="Location"
                  options={filtersData.locations}
                  onChange={handleFilterChange}
                />
                <SelectField
                  label="Job Type"
                  options={filtersData.job_type}
                  onChange={handleFilterChange}
                />
                <SelectField
                  label="Experience"
                  options={filtersData.experience}
                  onChange={handleFilterChange}
                />
                <SelectField
                  label="Salary Range"
                  options={filtersData.salary_range}
                  onChange={handleFilterChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopFilter;
