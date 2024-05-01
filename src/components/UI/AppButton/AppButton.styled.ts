import styled, { keyframes } from "styled-components";



export const SCAppButton = styled.button`
  width: calc(2.35vw + 91.2px);
  height: calc(0.47vw + 28.24px);
  border-radius: 5px;
  border: 1.5px solid black;
  background-color: rgb(40, 147, 26);
  transition: transform 0.2s ease;
  color: white;
  cursor: pointer;

  &:is(:active) {
    transform: scale(0.95);
    background-color: rgb(2, 170, 47);
  }
`;
