import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
import { FavoritesPage } from "./components/pages/FavoritesPage/FavoritesPage";
import { SelectedVakancy } from "./components/pages/SelectedVakancyPage/SelectedVakancyPage";
import {  theme } from "./components/UI/Theme/Theme";
import { ThemeProvider } from "styled-components";
import { ChoisePage } from "./components/pages/qoch/ChoisePage";
import { CompaniesPage } from "./components/pages/CompaniesPage/CompaniesPage";
import { CoachesPage } from "./components/pages/CoachesPage/CoachesPage";
import { SelectedCompanyPage } from "./components/pages/CompaniesPage/SelectedPage/SelectedCompanyPage";
import { Loader2 } from "./components/UI/Loader2/Loader2";
import { LoadersPage } from "./components/UI/Loaders/LoadersPage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/vakancy/:id",
    element: <SelectedVakancy />,
  },
  {
    path: "/choise",
    element: <ChoisePage/>,
  },
  {
    path: "/companies",
    element:<CompaniesPage/>
  },
  {
    path: "/company/:id", // Добавьте параметр маршрута companyId
    element:<SelectedCompanyPage/>
  },
  {
    path: "/coaches",
    element:<CoachesPage/>
  },
  {
    path: "/loader2",
    element:<Loader2/>
  },
  {
    path: "/loaders",
    element:<LoadersPage/>
  },
]);


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div>
          <RouterProvider router={routerConfig} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

