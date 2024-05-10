import styled, { keyframes } from "styled-components";

export const animloader = keyframes`
  
  0% {
      left: 0;
      transform: translateX(-100%);
    }
    100% {
      left: 100%;
      transform: translateX(0%);
    }
`;

export const SCLoader2 = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: src= "./src/images/MainFonDark.jpg";
  .GastriFrame {
    position: relative;
    top: 175px;

    width: 100%;
    height: 200px;

    border: 2px solid black;
    border-radius: 15px;
  }

  img {
    position: absolute;
    width: 100px;
  }
  img:nth-child(1) {
    left: 100px;
    top: 70px;
  }
  img:nth-child(2) {
    left: 130px;
    top: 30px;
  }
  img:nth-child(3) {
    left: 150px;
    top: 80px;
  }
  img:nth-child(4) {
    left: 200px;
    top: 60px;
  }
  img:nth-child(7) {
    left: 400px;
    top: 50px;
  }
  img:nth-child(6) {
    left: 550px;
    top: 70px;
  }
  img:nth-child(5) {
    left: 700px;
    top: 50px;
    width: 150px;
  }
  img:nth-child(8) {
    left: 1000px;
    top: 30px;

    width: 200px;
  }

  .loader {
    display: block;
    position: absolute;
    top: 225px;
    height: 202px;
    width: 93%;
    border: 1px solid #fff;
    border-radius: 15px;
    overflow: hidden;
  }
  .loader::after {
    content: "";
    width: 45%;
    height: 100%;
    background: linear-gradient(
      to right,
      #ffffff,
      #4dff50,
      #018c0c,
      #4dff50,
      #ffffff
    );
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    animation: ${animloader} 2s linear infinite;
  }
`;
