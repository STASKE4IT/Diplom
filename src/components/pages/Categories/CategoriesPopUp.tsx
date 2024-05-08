import { useEffect, useState, useRef } from "react";
import { SCCategoriesPopUp } from "./CategoriesPopUp.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../../UI/Theme/Theme";

interface Job {
  categories: [{ name: string }];
  name: string;
  contents: string;
}

interface CategoriesPopUpProps {
  toggleTheme: () => void;
}

export const CategoriesPopUp: React.FC<CategoriesPopUpProps> = () => {
  const [jobsData, setJobsData] = useState<Job[]>([]);
  const [isPopupVisible] = useState(true);
  const popupRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? darkTheme : lightTheme;
  });

  useEffect(() => {
    const localStorageData = localStorage.getItem("Jobs");
    if (localStorageData) {
      const jobs = JSON.parse(localStorageData);
      setJobsData(jobs);
    }
  }, []);

  useEffect(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === lightTheme ? darkTheme : lightTheme;
      localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
      return newTheme;
    });
  }, [isPopupVisible]);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <SCCategoriesPopUp
          style={{ display: isPopupVisible ? "block" : "none" }}
        >
          <div className="PopUpFrame" ref={popupRef}>
            <h1>Categories:</h1>
            <ul style={{ maxHeight: "200px", overflowY: "auto" }}>
              {jobsData.map((job, index) => (
                <li key={index}>
                  <a>{job.categories[0]?.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </SCCategoriesPopUp>
      </ThemeProvider>
    </div>
  );
};
