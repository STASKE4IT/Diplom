import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
   0% {
    opacity: 0;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const SCCategoriesPopUp = styled.div`
  .PopUpFrame {
    position: absolute;
    top: 70px;
    left: 560px;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 250px;
    z-index: 1;
    animation: ${slideDown} 0.3s ease forwards;
    opacity: 0;
    &.visible {
      opacity: 1;
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 10px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.pColor};
    cursor: pointer;
    transition: font-size 0.3s ease;
  }
  a:hover {
    text-decoration: underline;
    font-size: 15px;
  }

  h1 {
    color: ${(props) => props.theme.colors.titleColor};
  }
`;
