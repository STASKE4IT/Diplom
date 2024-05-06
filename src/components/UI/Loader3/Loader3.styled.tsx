import styled, { keyframes } from "styled-components";

const animation = keyframes`
from {
transform: rotate(0deg);
}
to {
transform: rotate(360deg);
}
`;

export const SCLoader3 = styled.div`

  .loader {
    position: absolute;
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;

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
