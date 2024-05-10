import styled, { keyframes } from "styled-components";

const bgMove = keyframes`
   0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
`;

export const SCVakancy = styled.div`
  position: relative;
  height: 100%;

  padding: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.theme.colors.bgc2});
    background-size: center;
    animation: ${bgMove} 100s alternate infinite;
    z-index: -1;
  }
  .VakancyFrame {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    background-color: ${(props) => props.theme.colors.elemsBgc};

    display: flex;
    flex-direction: column;

    gap: 10px 0px;

    padding: 40px;
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .VakancyFrame h2,
  p {
    color: ${(props) => props.theme.colors.pColor};
    line-height: 1.5;

    border: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 20px;
    border-radius: 5px;
  }
  strong,
  li,
  b {
    color: ${(props) => props.theme.colors.ultimateColor};
  }
  .VakancyFrame span {
    color: ${(props) => props.theme.colors.spanColor};
    font-weight: bold;
  }
`;
