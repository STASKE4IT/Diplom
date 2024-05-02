import { AppButton } from "../../UI/AppButton/AppButton";
import { AppInput } from "../../UI/AppInput/AppInput";
import { SCLoginPage } from "./LoginPage.styled";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { useLoginUserMutation } from "../../../api/userApi";
import { useEffect, useState } from "react"; 
import { Loader } from "../../UI/Loader/Loader";

interface ILoginForm {
  useremail: string;
  userpassword: string;
}

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
  const [loading, setLoading] = useState(false); 

  useEffect(() => {
    
    if (isSuccess && data && data.status === 1) {
      localStorage.setItem("user_id", JSON.stringify(data.user_id));
      navigate("/main");
    }else{
      error
    }
  }, [data, isSuccess, navigate]);

  const onLoginFormSubmit: SubmitHandler<ILoginForm> = (data) => {
    setLoading(true); 
    loginUser({ email: data.useremail, password: data.userpassword })
      .then(() => setLoading(false)) 
      .catch(() => setLoading(false));
  };

  return (
    <SCLoginPage>      
      {isLoading && <Loader/>}
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
