import styled, { keyframes } from "styled-components";

const exampleAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

export const SCHeader = styled.div`
  height: 100px;

  display: flex;
  gap: 50px;
  align-items: center;

  border-bottom: 2px solid green;
  background: url("./src/images/fon1.jpg") center/cover no-repeat;
  opacity: 1;

  .a {
    text-decoration: none;
    color: green;

    border-left: 2px solid lightgray;
    border-right: 2px solid lightgray;

    padding: 8px;
  }

  #navigation {
    display: flex;
    gap: 30px;
    margin-left: 25px;
    margin-right: 250px;
  }

  .logoPart {
    display: flex;
    align-items:center;
  }

  #logo {
    width: 150px;
    margin-left: 75px;
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
  
`;
