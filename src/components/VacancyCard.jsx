import exam from "../assets/images/exam4.jpeg";

export const VacancyCard = ({
  id,
  title,
  company,
  location,
  job_type,
  experience,
  salary_range,
}) => {
  return (
    <div className="flex-grow border-2 p-4">
      <img src={exam} className="w-10 h-10" alt="Vacancy" />
      <h2 className="text-xl font-semibold">{title}</h2>
      <p>{company.company_name}</p>
      <p>{location.location_name}</p>
      <p>{job_type.job_type_name}</p>
      <p>{experience.experience_name}</p>
      <p>{salary_range.range}</p>
      <button className="bg-blue-500 text-white p-2 mt-2">Kontak</button>
    </div>
  );
};
