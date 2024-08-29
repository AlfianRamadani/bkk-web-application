import { useEffect, useState } from "react";
import { Seo } from "../components/Seo";
import Layout from "../components/Layout.jsx";
import { VacancyList } from "../components/VacancyList";
import useVacancies from "../lib/utils/api/useVacancies";
import TopFilter from "../components/TopFilter";
import JobList from "../components/JobList";
import useFilters from "../lib/utils/api/useFilters.jsx";
import { VacancyCard } from "../components/VacancyCard";
import BreadCrumb from "../components/BreadCrumb.jsx";


const Lowongan = () => {
  const { vacanciesData, isLoading: isVacanciesLoading } = useVacancies();
  const { filtersData, isLoading: isFiltersLoading } = useFilters();
  
  const [selectedVacancy, setSelectedVacancy] = useState(undefined);
  const [filteredVacancies, setFilteredVacancies] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    location: null,
    jobType: null,
    experience: null,
    salaryRange: null,
  });

  console.log({

    selectedVacancy,
  });


  const handleFilterChange = (label, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [label.toLowerCase().replace(' ', '_')]: value,
    }));
  };

  const filterVacancies = () => {
    let filtered = vacanciesData;


    if (search) {
      filtered = filtered.filter(vacancy =>
        vacancy.title.toLowerCase().includes(search.toLowerCase()) ||
        vacancy.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedFilters.location) {
      filtered = filtered.filter(vacancy => 
        vacancy.location_id == selectedFilters.location
      );
    }

    if (selectedFilters.jobType) {
      filtered = filtered.filter(vacancy => 
        vacancy.type_id == selectedFilters.jobType
      );
    }

    if (selectedFilters.experience) {
      filtered = filtered.filter(vacancy => 
        vacancy.experience_id == selectedFilters.experience
      );
    }

    if (selectedFilters.salaryRange) {
      filtered = filtered.filter(vacancy => 
        vacancy.salary_id == selectedFilters.salaryRange
        
      );
    }

    setFilteredVacancies(filtered);
  };

  useEffect(() => {

    if (vacanciesData) {
      filterVacancies();
    }
  }, [vacanciesData, search, selectedFilters]);


  useEffect(() => {
    if (filteredVacancies.length > 0) {
      handleVacancySelect(filteredVacancies[0].id);
    }
  }, [filteredVacancies]);

  const handleVacancySelect = (id) => {
    const vacancy = vacanciesData.find((vacancy) => vacancy.id === id);
    setSelectedVacancy(vacancy);
  };

  return (
    <>
      <Seo title="Lowongan" description="This is the lowongan page" />
      <Layout>
        <main className="">
          <BreadCrumb pageNow="Lowongan" title="Lowongan Pekerjaan"></BreadCrumb>
          <div className="py-8">

          <TopFilter 
            filtersData={filtersData} 
            onChange={handleFilterChange} 
            search={search}
            setSearch={setSearch} 
          />
          <div className="flex gap-10 max-w-7xl mx-auto py-8 h-screen">
            {filteredVacancies.length > 0 ? (
              <JobList  vacancies={filteredVacancies} onSelectVacancy={handleVacancySelect} />
            ) : (
              <div>No vacancies found based on your filters.</div>
            )}
            <div className="hidden md:flex md:flex-grow">

            {selectedVacancy && <VacancyCard {...selectedVacancy} />}
            </div>
          </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Lowongan;
