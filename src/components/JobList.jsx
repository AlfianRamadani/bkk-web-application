import React from "react";
import exam from "../assets/images/exam4.jpeg";

const JobList = ({ vacancies, onSelectVacancy }) => {
  return (
    <section className="max-w-7xl mx-auto pr-5  overflow-auto">
   
      <div className="flex flex-col gap-6 ">
        {vacancies?.map((vacancy) => (
          <button
            onClick={() => onSelectVacancy(vacancy.id)}
            key={vacancy.id}
            className="border-2 p-6 max-w-md max-h-[42rem] rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
          >
            <div className="flex w-full flex-col gap-2">
              {/* Profile image */}
              <img
                src={vacancy.profil_img || exam}
                className="w-16 h-16  object-cover rounded-md"
                alt={vacancy.title}
              />
              {/* Vacancy details */}
              <div className="text-start">
                <p className="text-2xl font-semibold text-gray-800 tracking-wide hover:underline">
                  {vacancy.title}
                </p>
                <p className="text-xl  tracking-wide  text-gray-600">{vacancy.company.company_name}</p>
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
