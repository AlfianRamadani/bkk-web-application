import React, { useEffect, useState } from 'react';
import useAlumni from '../../lib/utils/api/useAlumni';

export default function BasicTable() {
    const { AlumniData, isLoading } = useAlumni();
    
    const [searchedData, setSearchedData] = useState([]);
    const [search, setSearch] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(10); // Jumlah data per halaman

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

    useEffect(() => {
        if (AlumniData) {
            handleAlumniSearch();
        }
    }, [search, AlumniData]);

    const handleAlumniSearch = () => {
        const searchQuery = search.toLowerCase();
        const filteredData = AlumniData.filter(data =>
            data.name.toLowerCase().includes(searchQuery) ||
            data.vocation_name.toLowerCase().includes(searchQuery)
        );
        setSearchedData(filteredData);
    };

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };

    // Get current data for pagination
    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = searchedData.slice(indexOfFirstData, indexOfLastData);

    // Calculate total pages
    const totalPages = Math.ceil(searchedData.length / dataPerPage);

    // Handle pagination navigation
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleFirstPage = () => setCurrentPage(1);
    const handleLastPage = () => setCurrentPage(totalPages);
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={handleInputChange}
                    placeholder="Search alumni..."
                    className="px-4 py-2 w-80 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            <div className='max-h-[50rem] overflow-y-auto mt-10 shadow-lg rounded-lg border border-gray-200'>
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
                                    <td className="px-4 py-2 border-b">{alumni.birthdate}</td>
                                    <td className="px-4 py-2 border-b">{alumni.gender.gender_name}</td>
                                    <td className="px-4 py-2 border-b">{alumni.email}</td>
                                    <td className="px-4 py-2 border-b">{alumni.phone}</td>
                                    <td className="px-4 py-2 border-b">{alumni.address}</td>
                                    <td className="px-4 py-2 border-b">{alumni.vocation_name}</td>
                                    <td className="px-4 py-2 border-b">{alumni.graduation_year.year}</td>
                                    <td className="px-4 py-2 border-b">{alumni.status.status_name}</td>
                                </tr>
                            ))
                        ) : isLoading ? (
                            <tr>
                                <td colSpan="9" className="px-4 py-2 text-center">Loading Data.</td>
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
