import React from "react";

import exam from "../assets/images/exam4.jpeg";

const JobList = ({ vacancies, onSelectVacancy }) => {
  return (
    <section className="max-w-7xl mx-auto overflow-auto ">
      {/* <p>{vacancies.length} hasil pencarian mengenai UI/UX Designer</p> */}
      <div className="flex gap-5">
        <div className="flex flex-col gap-5">
          {vacancies?.map((vacancy) => (
       
              <button onClick={() => onSelectVacancy(vacancy.id)} key={vacancy.id}  className="border-2 p-3 w-72 text-start">
              <img src={exam} className="w-10 h-10" alt="Vacancy" />
              <p>{vacancy.title}</p>
              <p>{vacancy.company.company_name}</p>
              <p>{vacancy.location.location_name}</p>
              <p>{vacancy.job_type.job_type_name}</p>
              <p>{vacancy.experience.experience_name}</p>
              <p>{vacancy.job_type.job_type_name}</p>
              <p>{vacancy.salary_range.range}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobList;
