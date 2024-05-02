import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export const ThemeContext = createContext<string>("light");

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme] = useState<string>(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
