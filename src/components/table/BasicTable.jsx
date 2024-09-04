import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import useAlumni from '../../lib/utils/api/useAlumni';
import debounce from 'lodash.debounce'; // Ensure lodash.debounce is installed

export default function BasicTable() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { AlumniData, isLoading } = useAlumni();

  const [searchedData, setSearchedData] = useState([]);
  const [search, setSearch] = useState(searchParams.get('search') || '');

  const [currentPage, setCurrentPage] = useState(Number(searchParams.get('page')) || 1);
  const [dataPerPage] = useState(10); // Number of items per page

  const header = {
    'name': 'Name',
    'birthdate': 'Birthdate',
    'gender': 'Gender',
    'email': 'Email',
    'phone': 'Phone',
    'address': 'Address',
    'batch': 'Batch',
    'major': 'Major',
    'status': 'Status'
  };

  // Debounced search handler
  const debouncedHandleSearch = useCallback(debounce((query) => {
    handleAlumniSearch(query);
  }, 300), []);

  useEffect(() => {
    if (AlumniData) {
      debouncedHandleSearch(search);
    }
  }, [search, AlumniData]);

  useEffect(() => {
    if (AlumniData) {
      handleAlumniSearch(search);
      setSearchParams({
        search,
        page: currentPage
      });
    }
  }, [search, currentPage]);

  const handleAlumniSearch = (query = search) => {
    if (AlumniData) {
      const searchQuery = query.toLowerCase();
      const filteredData = AlumniData.filter(data =>
        data.name.toLowerCase().includes(searchQuery) ||
        data.vocation_name.toLowerCase().includes(searchQuery)
      );
      setSearchedData(filteredData);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleClearSearch = () => {
    setSearch('');
    setCurrentPage(1);
  };

  // Get current data for pagination
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = searchedData.slice(indexOfFirstData, indexOfLastData);

  // Calculate total pages
  const totalPages = Math.ceil(searchedData.length / dataPerPage);

  // Handle pagination navigation
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleFirstPage = () => paginate(1);
  const handleLastPage = () => paginate(totalPages);
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };
  const handlePrevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-80">
          <input
            type="text"
            value={search}
            onChange={handleInputChange}
            placeholder="Search alumni..."
            className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-full"
          />
          {search && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 px-3 flex items-center"
            >
              <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          )}
        </div>
      </div>

      <div className='max-h-[50rem] overflow-x-auto mt-10 shadow-lg rounded-lg border border-gray-200'>
        <table className="table-auto w-full text-left bg-white rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              {Object.entries(header).map(([key, value]) => (
                <th key={key} className="px-4 py-2 font-medium text-gray-700 text-sm">{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((alumni, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border-b">{alumni.name}</td>
                  <td className="px-4 py-2 border-b flex-nowrap">{alumni.birthdate}</td>
                  <td className="px-4 py-2 border-b">{alumni.gender?.gender_name || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.email || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.phone || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.address || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.vocation_name || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.graduation_year?.year || 'N/A'}</td>
                  <td className="px-4 py-2 border-b">{alumni.status?.status_name || 'N/A'}</td>
                </tr>
              ))
            ) : isLoading ? (
              <tr>
                <td colSpan="9" className="px-4 py-2 text-center">Loading Data...</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="9" className="px-4 py-2 text-center">No alumni found based on your search.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={handleFirstPage}
          className={`px-4 py-2 bg-gray-300 text-black rounded ${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={handlePrevPage}
          className={`px-4 py-2 bg-gray-300 text-black rounded ${currentPage === 1 && 'cursor-not-allowed opacity-50'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          className={`px-4 py-2 bg-gray-300 text-black rounded ${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <button
          onClick={handleLastPage}
          className={`px-4 py-2 bg-gray-300 text-black rounded ${currentPage === totalPages && 'cursor-not-allowed opacity-50'}`}
          disabled={currentPage === totalPages}
        >
          Last
        </button>
      </div>
    </div>
  );
}
