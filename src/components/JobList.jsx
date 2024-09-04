import React from "react";
import exam from "../assets/images/exam4.jpeg";

const JobList = ({ vacancies, onSelectVacancy }) => {
  return (
    <section className="max-w-7xl mx-auto p-4 overflow-auto">
      {/* Display the total number of results */}
      <p className="text-lg font-semibold mb-4">
      </p>
      <div className="flex flex-col gap-6 ">
        {vacancies?.map((vacancy) => (
          <button
            onClick={() => onSelectVacancy(vacancy.id)}
            key={vacancy.id}
            className="border-2 p-4 w-72 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="flex w-full flex-col items-center  gap-4">
              {/* Profile image */}
              <img
                src={vacancy.profil_img || exam}
                className="min-w-full h-16  object-cover rounded-md"
                alt={vacancy.title}
              />
              {/* Vacancy details */}
              <div className="">
                <p className="text-xl font-semibold text-gray-800">
                  {vacancy.title}
                </p>
                <p className="text-gray-600">{vacancy.company.company_name}</p>
                <p className="text-sm text-gray-500">
                  {vacancy.location.location_name} -{" "}
                  {vacancy.job_type.job_type_name}
                </p>
                <p className="text-sm text-gray-500">
                  Pengalaman: {vacancy.experience.experience_name}
                </p>
                <p className="text-sm font-semibold text-green-600 mt-2">
                  Gaji: {"Rp " + vacancy.salary_range.range}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default JobList;
