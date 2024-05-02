import { SCRegistrationPage } from "./RegistrationPage.styled";
import { AppButton } from "../../UI/AppButton/AppButton";
import { useRegisterUserMutation } from "../../../api/userApi";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { AppInput } from "../../UI/AppInput/AppInput";

interface IRegisterForm {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}
const registerFormSchema = yup.object({
  name: yup.string().required("Введите имя"),
  email: yup.string().required("Введите E-Mail"),
  phone_number: yup.string().required("Введите номер телефона"),
  password: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
  user_city: yup.string().required("Введите город"),
});

export const RegistrationPage = () => {
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Получаем текущую дату в формате "YYYY-MM-DD"

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
    },
  });

  const navigate = useNavigate();
  const [registerUser, { data }] = useRegisterUserMutation();

  console.log("API RESPONSE", data);

  const onRegisterFormSubmit: SubmitHandler<IRegisterForm> = (data) => {
    registerUser(data);
    console.log("SUBMIT DATA", data);
  };
  useEffect(() => {
    if (data && data.user_id) {
      navigate("/");
      localStorage.setItem("user_id", JSON.stringify(data.user_id));
      console.log("user_id", data.user_id);
    }
    setCurrentDate(new Date().toISOString().split("T")[0]);
  }, [data, navigate]);

  return (
    <SCRegistrationPage>
      <form
        className="registrationForm"
        onSubmit={handleSubmit(onRegisterFormSubmit)}
      >
        <h2>Регистрация</h2>
        <div>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.name}
                errorMessage={errors.name?.message}
                type="text"
                placeholder="Name"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.email}
                errorMessage={errors.email?.message}
                type="text"
                placeholder="E-Mail"
                {...field}
              />
            )}
          />
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.phone_number}
                errorMessage={errors.phone_number?.message}
                type="text"
                placeholder="Phone Number"
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.password}
                errorMessage={errors.password?.message}
                type="password"
                placeholder="Password"
                {...field}
              />
            )}
          />
          <Controller
            name="user_city"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.user_city}
                errorMessage={errors.user_city?.message}
                type="text"
                placeholder="City"
                {...field}
              />
            )}
          />
          <input type="text" placeholder={currentDate}/>
        </div>
        <AppButton type="submit" buttonText="Зарегистрироваться" className="" />
        <Link to="/choise">
          <AppButton type={"button"} buttonText={"Передумал"} className={""} />
        </Link>
      </form>
    </SCRegistrationPage>
  );
};
