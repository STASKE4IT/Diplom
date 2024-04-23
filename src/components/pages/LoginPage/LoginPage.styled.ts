import styled, { keyframes } from "styled-components";

const exampleAnimation = keyframes`
  0%   { opacity: 0.5; }
  100% { opacity: 1; }
`;

export const SCLoginPage = styled.div`
  background: url("./src/images/fon2.jpg") center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0);
    

    /* box-shadow: 0 0 30px gray; */
    border-radius: 10px;

    width: 480px;
    height: 450px;
  }
  .authorisation {
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  margin-top: 40px;
  }

  #logo {
    width: 150px;
    animation: ${exampleAnimation} 1s alternate infinite;
  }

  .registration {
    margin-top: 20px;
    font-size: 13px;
  }
`;
