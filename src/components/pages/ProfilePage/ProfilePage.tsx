import { Header } from "../../UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";
import { useGetUserByIdQuery } from "../../../api/userApi";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";
import { IUserResponse } from "../../../api/types";

export const ProfilePage = () => {
  const user_id = localStorage.getItem('user_id');

  const { data } = useGetUserByIdQuery(Number(user_id)) as { data: IUserResponse | undefined };

  // Состояние для хранения текущей темы
  const [theme, setTheme] = useState(lightTheme);

  // Загрузка темы из localStorage при монтировании компонента
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
    setTheme(savedTheme);
  }, []);

  // Функция для переключения темы
  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  // Функция для форматирования даты
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <>
      {/* Передаем функцию для переключения темы в Header */}
      <Header toggleTheme={toggleTheme} />
      {/* Применяем текущую тему к странице */}
      <ThemeProvider theme={theme}>
        <SCProfilePage>
          <div className="profileInfo">
            <img src="./src/images/me.jpg" alt="" />
            <p><strong>Name: </strong>{data?.message.name}</p>
            <p><strong>E-Mail: </strong>{data?.message.mail}</p>
            <p><strong>Phone Number: </strong>{data?.message.phone_number}</p>
            <p><strong>User Id: </strong>{data?.message.user_id}</p>
            <p><strong>City: </strong>{data?.message.city}</p>
            <p><strong>Registration Date: </strong>{formatDate(data?.message.reg_date)}</p>
          </div>
        </SCProfilePage>
      </ThemeProvider>
    </>
  );
};
