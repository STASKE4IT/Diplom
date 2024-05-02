import { SCRegistrationPage } from "./RegistrationPage.styled";
import { AppButton } from "../../UI/AppButton/AppButton";
import { useRegisterUserMutation } from "../../../api/userApi";
import { Controller, Resolver, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { AppInput } from "../../UI/AppInput/AppInput";
import { IRegistrationForm } from "../../../api/types";

const registrationFormSchema = yup.object({
  email: yup.string().required("Введите E-Mail"),
  password: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
  name: yup.string().required("Введите имя"),
  phone_number: yup.string().required("Введите номер телефона"),
  user_city: yup.string().required("Введите город"),
});

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  ); // Получаем текущую дату в формате "YYYY-MM-DD"

  const [registerUser, { data }] = useRegisterUserMutation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema) as unknown as Resolver<
      IRegistrationForm,
      any
    >,
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      password: "",
      user_city: "",
      reg_date: currentDate,
    },
  });

  useEffect(() => {
    if (data) {
      navigate("/");
      localStorage.setItem("user_id", JSON.stringify(data.user_id));
      console.log("user_id", data.user_id);
    }
    setCurrentDate(new Date().toISOString().split("T")[0]); // Обновляем текущую дату при загрузке компонента
  }, [data, navigate]);

  const onRegistrationFormSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    registerUser(data);
  };

  return (
    <SCRegistrationPage>
      <form
        className="registrationForm"
        onSubmit={handleSubmit(onRegistrationFormSubmit)}
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
          <Controller
            name="reg_date"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={!!errors.reg_date}
                errorMessage={errors.reg_date?.message}
                type="text"
                placeholder="Registration Date"
                {...field}
                readOnly
              />
            )}
          />
        </div>
        <Link to="/">
          <AppButton
            type="submit"
            buttonText="Зарегистрироваться"
            className=""
          />
        </Link>
        <Link to="/choise">
          <AppButton type={"button"} buttonText={"Передумал"} className={""} />
        </Link>
      </form>
    </SCRegistrationPage>
  );
};
