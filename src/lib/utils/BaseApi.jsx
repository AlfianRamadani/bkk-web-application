import axios from "axios"; 

export const BaseApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

// // Example functions to get data from API
// const getAlumni = async () => {
//     const response = await BaseApi.get("/alumni");
//     return response.data;
// };

// const getVacancy = async () => {
//     const response = await BaseApi.get("/vacancy");
//     return response.data;
// };

// export { getAlumni, getVacancy };
