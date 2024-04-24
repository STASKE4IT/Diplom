import styled, { keyframes } from "styled-components";



export const SCAppButton = styled.button`
  width: 125px;
  height: 35px;
  border-radius: 5px;
  border: 1.5px solid black;
  background-color: rgb(40, 147, 26);
  transition: transform 0.3s ease;
  color: white;
  cursor: pointer;

  &:is(:active) {
    transform: scale(0.95);
    background-color: rgb(2, 170, 47);
  }
`;
