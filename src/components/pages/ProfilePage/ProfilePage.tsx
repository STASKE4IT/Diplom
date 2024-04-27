import { RootState } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../../UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";


export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.userSlice.user);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    mail: user?.mail || "",
    phone_number: user?.phone_number || "",
    user_id: user?.user_id || "",
    city: user?.city || "",
    reg_date: user?.reg_date || "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <Header />
      <SCProfilePage>
        <div className="profileInfo">
          <img src="./src/images/me.jpg" alt="" />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
          />
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            readOnly
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="reg_date"
            value={formData.reg_date}
            onChange={handleChange}
            readOnly
          />
        </div>
      </SCProfilePage>
    </>
  );
};
