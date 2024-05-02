import { Header } from "../../UI/Header/Header";
import { SCProfilePage } from "./ProfilePage.styled";
import {
  useAddUserPhotoMutation,
  useGetUserByIdQuery,
} from "../../../api/userApi";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../UI/Theme/Theme";
import { IUserResponse } from "../../../api/types";

export const ProfilePage = () => {
  const user_id = localStorage.getItem("user_id");

  const { data } = useGetUserByIdQuery(Number(user_id)) as {
    data: IUserResponse | undefined;
  };

  const [theme, setTheme] = useState(lightTheme);
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState<string | null>(null);
  const [] = useAddUserPhotoMutation();

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;
    setTheme(savedTheme);

    const uploadedPhotoUrlFromStorage = localStorage.getItem("uploadedPhotoUrl");
    if (uploadedPhotoUrlFromStorage) {
      setUploadedPhotoUrl(uploadedPhotoUrlFromStorage);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === lightTheme ? darkTheme : lightTheme;
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme === darkTheme ? "dark" : "light");
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  const addPhotoFormSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);

    if (!selectedFile) {
      console.error("No file selected");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("post_id", "130");

    try {
      const response = await fetch('http://161.35.153.209:5430/api/add-photo', {
        method: 'POST',
        body: formData,
      });
      const responseData = await response.json();
      console.log('Response data:', responseData); // Выводим данные ответа в консоль
      if (responseData && responseData.status === 1) {
        // Предположим, что имя файла - это message в ответе от сервера
        const fileName = responseData.message; // Предполагаем, что имя файла возвращается сервером
       if (fileName) {
  const uploadedPhotoUrl = `http://161.35.153.209:5430/api/photo/${fileName}`;
  console.log("Uploaded photo URL:", uploadedPhotoUrl); 
  setUploadedPhotoUrl(uploadedPhotoUrl);
  
  localStorage.setItem("uploadedPhotoUrl", uploadedPhotoUrl);
}
 else {
          console.error('Failed to get file name from server response:', responseData);
        }
      } else {
        console.error('Failed to add photo:', responseData);
      }
    } catch (error) {
      console.error('Failed to add photo:', error);
    }

    setLoading(false);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    }
  };

  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <ThemeProvider theme={theme}>
        <SCProfilePage>
          <div className="profileInfo">
            <div className="UploadedPhoto">
              {uploadedPhotoUrl && <img src={uploadedPhotoUrl} alt="Uploaded" />}
            </div>
            <p><strong>Name: </strong>{data?.message.name}</p>
            <p><strong>E-Mail: </strong>{data?.message.mail}</p>
            <p><strong>Phone Number: </strong>{data?.message.phone_number}</p>
            <p><strong>User Id: </strong>{data?.message.user_id}</p>
            <p><strong>City: </strong>{data?.message.city}</p>
            <p><strong>Registration Date: </strong>{formatDate(data?.message.reg_date)}</p>
            <form onSubmit={addPhotoFormSubmit}>
              <input type="file" onChange={handleFileChange} />
              <button type="submit">Загрузить</button>
            </form>
          </div>
        </SCProfilePage>
      </ThemeProvider>
    </>
  );  
};
