import { css, styled } from "styled-components";

export const ErrorMessage = styled.p`
  color: red;
  position: absolute;
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