import { useQuery } from "react-query";
import { BaseApi } from "../BaseApi";



// Function to fetch filters data from the API
const fetchAlumni = async () => {
  const response = await BaseApi.get('/alumni');
  return response.data; // Return the `data` property
}

// Custom hook
const useAlumni = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['Alumni'],
    queryFn: fetchAlumni,
    refetchOnWindowFocus: true,
  });

  return {
    AlumniData: data?.data?.alumni, // Access `data.data`
    isLoading,
   
  };
}

export default useAlumni;
