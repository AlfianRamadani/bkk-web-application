import { Link } from "react-router-dom";
import exam from "../assets/images/exam4.jpeg";
import { TbMapPin } from "react-icons/tb";
import { GoClock } from "react-icons/go";
import { LuBuilding } from "react-icons/lu";
const JobDescriptions = () => (
  <>
    <h3>Job Descriptions:</h3>
  </>
)

export const VacancyCard = ({
  id,
  title,
  company,
  location,
  job_type,
  experience,
  salary_range,
  profil_img,
  industry,
  header,
  requirement,
  application_link,
  benefit,
  nummber_of_hires,
  job_tags,
  work_model,
  
}) => {
  return (
    <div className="flex flex-col flex-grow border-2 rounded-xl p-4 gap-2">
      <img src={profil_img} className="w-full object-cover h-1/3 rounded-lg " loading="lazy" alt="Vacancy" />
      <h2 className="text-xl font-medium text-text tracking-wide">{title}</h2>
      <div className="flex text-slate-600 gap-2 items-center">
      <p>{company.company_name}</p>
      <Link className="underline text-sm">Lihat semua lowongan kerja</Link>
      </div>
      <p className="flex items-center gap-3 text-sm text-slate-600 tracking-wide"><TbMapPin></TbMapPin> {location.location_name}</p>
      <p className="flex items-center gap-3 text-sm text-slate-600 tracking-wide"><LuBuilding></LuBuilding> {industry.name}</p>
      <p className="flex items-center gap-3 text-sm text-slate-600 tracking-wide"><GoClock></GoClock> {job_type.job_type_name}</p>
      <p></p>
      <div className="flex gap-5 list-disc  text-sm text-slate-600 tracking-wide">
      <p>{experience.experience_name}</p>
      <p>{salary_range.range}</p>

      </div>
 

      <button className="w-20 h-10 font-normal text-sm rounded-md bg-blue-500 text-white p-2 mt-2">Kontak</button>
      <JobDescriptions />
    </div>
  );
};
