import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useLoginUserMutation } from "../../../api/userApi";
import { useEffect, useState } from "react";
import { SCLoginPage } from "./LoginPage.styled";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton } from "../../UI/AppButton/AppButton";

const loginFormSchema = yup.object({
  useremail: yup.string().required("Введите E-Mail"),
  userpassword: yup
    .string()
    .min(8, "Не менее 8 символов")
    .required("Введите пароль"),
});

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
    defaultValues: { useremail: "", userpassword: "" },
  });

  const navigate = useNavigate();
  const [loginUser, { data, error, isLoading, isSuccess }] =
    useLoginUserMutation();
  const [, setLoading] = useState(false);

  useEffect(() => {
    if (isSuccess && data && data.status === 1) {
      localStorage.setItem("user_id", JSON.stringify(data.user_id));
      navigate("/main");
      console.log(data);
    } else if (error) {
      console.log("Произошла ошибка:", error);
    }
  }, [data, isSuccess, error, navigate]);

  const onLoginFormSubmit: SubmitHandler<{
    useremail: string;
    userpassword: string;
  }> = (data) => {
    setLoading(true);
    loginUser({ email: data.useremail, password: data.userpassword })
      .then((response) => {
        setLoading(false);
        if ("data" in response) {
          const responseData = response.data;
          if (responseData && responseData.status === 1) {
            localStorage.setItem(
              "user_id",
              JSON.stringify(responseData.user_id)
            );
            console.log(responseData);
            navigate("/main");
          } else {
            alert("Неверный логин или пароль")
            console.log("Ошибка входа: Неверный логин или пароль");
          }
        } else {
          alert("Произошла ошибка")
          console.log("Произошла ошибка:", response.error);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log("Произошла ошибка:", error);
      });
  };

  return (
    <SCLoginPage>
      {isLoading && <div className="loader"></div>}
      <img src="./src/images/logo3.png" alt="" id="logo3" />
      <form onSubmit={handleSubmit(onLoginFormSubmit)} className="login">
        <img src="./src/images/logo2.png" alt="" id="logo" />
        <div className="authorisation">
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={errors.useremail ? true : false}
                errorMessage={errors.useremail?.message}
                type={"email"}
                placeholder={"E-mail"}
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <AppInput
                isError={errors.userpassword ? true : false}
                errorMessage={errors.userpassword?.message}
                type={"password"}
                placeholder={"Password"}
                {...field}
              />
            )}
          />
        </div>
        <AppButton type="submit" buttonText={"LogIn"} className={""} />
        <div className="registration">
          <span>
            <Link to="/registration">Registration</Link>
          </span>
        </div>
      </form>
    </SCLoginPage>
  );
};
