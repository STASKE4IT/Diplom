import styled, { keyframes } from "styled-components";

const exampleAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const ColorChange = keyframes`
0%     {transform:scaleX(var(--s,1)) translate(0) rotate(0)}
  20% {transform:scaleX(var(--s,1)) translate(50%) rotate(0)}
  50% {transform:scaleX(var(--s,1)) translate(50%) rotate(90deg)}
  70%    {transform:scaleX(var(--s,1)) translate(50%) rotate(90deg)}
  100%   {transform:scaleX(var(--s,1)) translate(0) rotate(200deg)}
`;

export const SCHeader = styled.div`
  height: 100px;
  position: relative;
  display: flex;
  gap: 20px;
  align-items: center;

  border-bottom: 2px solid green;
  background: url("./src/images/fon1.jpg") center/cover no-repeat;
  opacity: 1;

  .a {
    display: flex;
    text-decoration: none;
    color: white;
    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;
    border-radius: 10px;
    padding: 8px;

    background-color: rgba(20, 112, 0, 0.7);
    justify-content: center;
    align-items: center;
    gap: 5px;

    &:hover {
      color: rgb(0, 61, 0);
      font-weight: bold;
      text-decoration: underline;
    }
  }

  .a img {
    width: 20px;
  }

  #navigation {
    display: flex;
    gap: 30px;
    margin-left: 25px;
    margin-right: 250px;
  }

  .logoPart {
    display: flex;
    align-items: center;
  }

  #logo {
    width: 150px;
    margin-left: 20px;
    animation: ${exampleAnimation} 1s alternate infinite;
  }

  .profileBtn {
    width: 50px;
    height: 50px;

    margin-left: 25px;

    border: 2px solid green;
    border-radius: 100px;

    background-image: url("./src/images/me.jpg");
    background-size: cover;

    cursor: pointer;
  }
  .LogOutBtn {
    width: calc(2.35vw + 91.2px);
    height: calc(0.47vw + 28.24px);

    margin-left: 0px;
    
    border-radius: 5px;
    border: 1.5px solid black;
    background-color: rgb(40, 147, 26);
    
    color: white;
    
    transition: transform 0.2s ease;
    cursor: pointer;
    &:is(:active) {
      transform: scale(0.95);
      background-color: rgb(2, 170, 47);
    }
  }
  .ChangeThemeFrame {
    position: relative;
    bottom: 0px;
    right: 150px;
    background-color: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .ChangeThemeBtn {
    width: 50px;

    position: absolute;
    bottom: -50px;
    right: -40px;

    margin-top: 10px;
  }
  .animate {
    animation: ${ColorChange} 1s alternate infinite;
  }
  p {
    position: absolute;
    bottom: -25px;
    right: 0px;
    background-color: rgba(20, 112, 0, 0.7);

    padding: 5px;
    color: white;

    border-left: 2px solid lightGray;
    border-right: 2px solid lightGray;
    border-radius: 10px;

    text-align: center;
    &:is(:hover) {
      color: black;
      font-weight: bold;
    }
  }
  .off {
    display: none;
  }
`;
