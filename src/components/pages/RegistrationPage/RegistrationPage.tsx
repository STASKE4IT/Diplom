import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../../store/slices/UserSlice";
import { SCRegistrationPage } from "./RegistrationPage.styled";
import { AppButton } from "../../UI/AppButton/AppButton";
import { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RootState } from "@reduxjs/toolkit/query";

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    phone_number: "",
    city: "",
    reg_date: new Date().toISOString().split("T")[0], // Получаем текущую дату и преобразуем ее в строку формата "гггг-мм-дд"
  });

  interface IRegisterForm {
    useremail: string;
    userpassword: string;
    userphonenumber: string;
    usercity: string;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    dispatch(changeUser(formData));
  };

const navigate = useNavigate()

  const onRegistrationFormSubmit: SubmitHandler<IRegisterForm> = (data) => {
    data ? navigate("/main") : navigate("/");
  }

  return (
    <SCRegistrationPage>
      <form onSubmit={handleSubmit} className="registrationForm">
        <h2>Регистрация</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введите имя"
        />
        <input
          type="text"
          name="mail"
          value={formData.mail}
          onChange={handleChange}
          placeholder="Введите e-mail"
        />
        <input
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
          placeholder="Введите номер телефона"
        />
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Город"
        />
        <input type="text" name="reg_date" value={formData.reg_date} readOnly placeholder="Дата регистрации"/>{" "}
        {/* Поле даты регистрации, только для чтения */}
        <AppButton type="submit" buttonText="Зарегистрироваться" className="" />
      </form>
    </SCRegistrationPage>
  );
};
