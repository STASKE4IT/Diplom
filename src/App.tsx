import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
import { FavoritesPage } from "./components/pages/FavoritesPage/FavoritesPage";
import { SelectedVakancy } from "./components/UI/SelectedVakancy/SelectedVakancy";
import {  theme } from "./components/UI/Theme/Theme";
import { ThemeProvider } from "styled-components";
import { ChoisePage } from "./components/pages/qoch/ChoisePage";
import { CategoriesPopUp } from "./components/pages/Categories/CategoriesPopUp";
import { Companies } from "./components/pages/CompaniesPage/Companies";
import { Coaches } from "./components/pages/CoachesPage/CoachesPage";

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
    path: "/categories",
    element: <CategoriesPopUp/>,
  },
  {
    path: "/companies",
    element:<Companies/>
  },
  {
    path: "/coaches",
    element:<Coaches/>
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

