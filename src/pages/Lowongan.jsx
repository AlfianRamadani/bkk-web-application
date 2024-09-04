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
import { useSearchParams } from "react-router-dom";

const Lowongan = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { vacanciesData, isLoading: isVacanciesLoading } = useVacancies();
  const { filtersData, isLoading: isFiltersLoading } = useFilters();

  const [selectedVacancy, setSelectedVacancy] = useState(undefined);
  const [filteredVacancies, setFilteredVacancies] = useState([]);

  const initialFilters = {
    location: searchParams.get("location") || null,
    type: searchParams.get("type") || null,
    experience: searchParams.get("experience") || null,
    salary: searchParams.get("salary") || null,
  };

  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [search, setSearch] = useState(searchParams.get("search") || '');

  // Update URL parameters based on filters and search
  const updateUrlParams = () => {
    const params = {};

    if (search) params.search = search;
    if (selectedFilters.location) params.location = selectedFilters.location;
    if (selectedFilters.type) params.type = selectedFilters.type;
    if (selectedFilters.experience) params.experience = selectedFilters.experience;
    if (selectedFilters.salary) params.salary = selectedFilters.salary;

    setSearchParams(params);
  };

  const handleRemoveFilters = (label) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [label.toLowerCase().replace(' ', '_')]: null,
    }));
  };

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
        vacancy.description.toLowerCase().includes(search.toLowerCase()) ||
        vacancy.company.company_name.toLowerCase().includes(search.toLowerCase()) ||
        vacancy.industry.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (selectedFilters.location) {
      filtered = filtered.filter(vacancy =>
        vacancy.location_id == selectedFilters.location
      );
    }

    if (selectedFilters.type) {
      filtered = filtered.filter(vacancy =>
        vacancy.type_id == selectedFilters.type
      );
    }

    if (selectedFilters.experience) {
      filtered = filtered.filter(vacancy =>
        vacancy.experience_id == selectedFilters.experience
      );
    }

    if (selectedFilters.salary) {
      filtered = filtered.filter(vacancy =>
        vacancy.salary_id == selectedFilters.salary
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
    updateUrlParams();
  }, [search, selectedFilters]);

  useEffect(() => {
    setSearch(searchParams.get("search") || '');
    setSelectedFilters({
      location: searchParams.get("location") || null,
      type: searchParams.get("type") || null,
      experience: searchParams.get("experience") || null,
      salary: searchParams.get("salary") || null,
    });
  }, [searchParams]);

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
              selectedFilters={selectedFilters}
              removeFilters={handleRemoveFilters}
              initialValues={initialFilters}
              vacancies={filteredVacancies}
            />
            <div className="flex gap-10 max-w-7xl mx-auto py-8 h-[150dvh] bg-white p-6 rounded-xl shadow-lg">
              {filteredVacancies.length > 0 ? (
                <JobList vacancies={filteredVacancies} onSelectVacancy={handleVacancySelect} />
              ) : (
                <div>No vacancies found based on your filters.</div>
              )}
              <div className="hidden md:flex md:flex-grow">
                {selectedVacancy ? (
                  <VacancyCard {...selectedVacancy} />
                ) : (
                  <>
                    <div className="flex flex-col items-center">

                      <p className="justify-self-center">&larr;Pilih Lowongan Kerja</p>
                      <p>Tampilkan detal di sini</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Lowongan;
