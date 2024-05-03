import { useEffect, useState } from "react";
import { SCCategoriesPopUp } from "./CategoriesPopUp.styled";

interface Job {
  categories: [{ name: string }];
  name: string;
  contents: string;
}

export const CategoriesPopUp = () => {
  const [jobsData, setJobsData] = useState<Job[]>([]);

  useEffect(() => {
    const localStorageData = localStorage.getItem("Jobs");

    if (localStorageData) {
      const jobs = JSON.parse(localStorageData);
      setJobsData(jobs);
    }
  }, []);

  return (
    <>
      <SCCategoriesPopUp>
        <div className="PopUpFrame">
          <h1>Categories:</h1>
          <ul>
            {jobsData.map((job, index) => (
              <li key={index}>
                <h2>{job.categories[0].name}</h2>
              </li>
            ))}
          </ul>
        </div>
      </SCCategoriesPopUp>
    </>
  );
};
