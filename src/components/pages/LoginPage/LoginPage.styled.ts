import styled, { keyframes } from "styled-components";

const animation = keyframes`
from {
  transform: rotate(0deg);
}
to {
  transform: rotate(360deg);
}
`;

const exampleAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const waveAnimation = keyframes`
  0% {
    transform: translateY(-100%) scaleY(1);
  }
  100% {
    transform: translateY(0) scaleY(1);
  }
  `;

export const SCLoginPage = styled.div`
  background: url("./src/images/fon2.jpg") center/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .login {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(255, 255, 255, 0);

    /* box-shadow: 0 0 30px gray; */
    /* border-radius: 10px; */

    width: 480px;
    height: 450px;
  }
  .authorisation {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: calc(2.35vw - 8.8px);
    margin-bottom: 45px;
  }

  #logo {
    margin-top: calc(-7.04vw + 116.4px);
    width: calc(4.7vw + 82.4px);
    animation: ${exampleAnimation} 1s alternate infinite;
  }
  #logo3 {
    position: absolute;
    top: calc(3.8vw - 54.1px);
    right: 0;
    width: calc(14.1vw + 347.2px);
    animation: ${waveAnimation} 3s alternate,
      ${exampleAnimation} 5s alternate infinite;
  }
  .registration {
    margin-top: 40px;
    font-size: 13px;
    margin-left: calc(-49.3vw + 424.86px);
  }
  .loader {
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 125px;
    right: 510px;

    border-radius: 10rem;
    border: 3px solid white;

    background: linear-gradient(#04c80e, #00a67f, #000000);
    box-shadow: 0px 0px 100px -50px black;
    animation: ${animation} 1s linear infinite;
  }

  .loader::before {
    position: absolute;
    content: "";
    background: #fff;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 10rem;
    border: 3px solid white;
    box-shadow: inset 0px 0px 100px -70px #111;
  }
`;
