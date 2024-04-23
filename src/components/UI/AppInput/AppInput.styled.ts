import { css, styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  width: 18.75vw;
  position: absolute;
  text-align:center;
  padding: 4px;
  background: white;
  border-radius: 5px;
`;

interface IStyledInputProps {
  $isError: boolean;
}

export const SCAppInput = styled.input<IStyledInputProps>`
  outline: 0;
  font-family: inherit;
  padding: 12px 10px;
  background-color: white;
  border-radius: 10px;
  border: 3px solid green;
  width: 250px;
  margin-top:30px;

  ${(props) =>
    props.$isError &&
    css`
      border-color: red;
    `}

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: black;
  }

`;