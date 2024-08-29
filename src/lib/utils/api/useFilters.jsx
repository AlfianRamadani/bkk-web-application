import { useQuery } from "react-query";
import { BaseApi } from "../BaseApi";



// Function to fetch filters data from the API
const fetchFilters = async () => {
  const response = await BaseApi.get('/filter');
  return response.data; // Return the `data` property
}

// Custom hook
const useFilters = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['filters'],
    queryFn: fetchFilters,
    refetchOnWindowFocus: true,
  });

  return {
    filtersData: data?.data, // Access `data.data`
    isLoading,
    isError,

  };
}

export default useFilters;
