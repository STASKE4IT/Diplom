import styled, { keyframes } from "styled-components";



export const SCAppButton = styled.button`
  width: 125px;
  height: 35px;
  margin-top: 40px;
  border-radius: 5px;
  background-color: rgb(40, 147, 26);
  border: none;
  transition: transform 0.3s ease;


  &:is(:active) {
    transform: scale(0.95);
    background-color: rgb(2, 170, 47);
  }
`;
