import { useQuery } from "react-query";
import { BaseApi } from "../BaseApi";




const fetchFilters = async() => {
  const response = await BaseApi.get('/filter');
  return response.data; 
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
