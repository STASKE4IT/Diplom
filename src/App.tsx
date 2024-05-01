import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./components/pages/LoginPage/LoginPage";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { ProfilePage } from "./components/pages/ProfilePage/ProfilePage";
import { RegistrationPage } from "./components/pages/RegistrationPage/RegistrationPage";
import { FavoritesPage } from "./components/pages/FavoritesPage/FavoritesPage";
import { SelectedVakancy } from "./components/UI/SelectedVakancy/SelectedVakancy";
import { ThemeProvider } from "styled-components";
import { dark, light } from "@mui/material/styles/createPalette";

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
    element: <SelectedVakancy/>,
  },
]);

function App() {
  return (
    <>
      <div className="App">
        <div>
          <ThemeProvider theme={light}>
          <RouterProvider router={routerConfig} />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
}

export default App;
