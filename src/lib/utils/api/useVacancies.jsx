import { useQuery } from 'react-query';
import { BaseApi } from '../BaseApi'; // Adjust the import path as necessary



const QUERY_KEY = 'vacancies';

// Function to fetch vacancies
const fetchVacancies = async () => {
  const { data } = await BaseApi.get('/vacancy');
  return data;
};

// Custom hook for fetching vacancie
const useVacancies = () => {
  const {data, isLoading, isError} = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: fetchVacancies,
    refetchOnWindowFocus: true, // Refetch on window focus
  });
  return {
    vacanciesData : data?.data,
    isLoading,
    isError,
  }
};

export default useVacancies;