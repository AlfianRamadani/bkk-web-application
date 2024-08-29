import React from "react";


export const VacancyList = ({
  image,
  title,
  company,
  location,
  vacancyType,
  experience,
  workMode,
  salary,
  onSelectVacancy,
}) => {
  return (

      <VacancyList
      key={vacancy.id}
      id={vacancy.id}
        image={exam} // Use a valid image path or placeholder
        title={vacancy.title}
        company={vacancy.company.company_name}
        location={vacancy.location.location_name}
        vacancyType={vacancy.job_type.job_type_name}
        experience={vacancy.experience.experience_name}
        workMode={vacancy.job_type.job_type_name} // Assuming `workMode` corresponds to `job_type_name`
        salary={vacancy.salary_range.range}
      />
  );
};
