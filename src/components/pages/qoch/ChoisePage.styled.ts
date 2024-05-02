import styled from "styled-components";

export const SCChoise = styled.div`
  height: 100vh;
  background-color: lightGray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .cumBackFrame {
    position: relative;
    width: 800px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    gap: 30px;

    border: solid 2px black;
    border-radius: 10px;
    padding: 20px;
  }
  p {
    font-size: 30px;
  }
  button {
    width: 100px;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: rgb(40, 147, 26);
    color: white;

    &:is(:active) {
      transform: scale(0.95);
      background-color: rgb(2, 170, 47);
    }
  }
  img {
    width: 50px;
    transform: rotate(180deg);
  }

  .splashImage {
    transform: rotate(270deg);
    position: absolute;
    left: 320px;
    top: 260px;
  }
  
`;
