import styled, { keyframes } from "styled-components";

const bgMove = keyframes`
   0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
`;

export const SCSelectedCompanyPage = styled.div`
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
    background-size: cover;
    animation: ${bgMove} 100s alternate infinite;
    z-index: -1; 
  }
  h2 {
    text-align: center;
    margin-top: -50px;
    margin-bottom: 50px;
    font-size: 50px;
    color: ${(props) => props.theme.colors.titleColor};
  }
  p {
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 5px;
    border-radius: 10px;

    color: ${(props) => props.theme.colors.pColor};
  }
  span {
    color: ${(props) => props.theme.colors.spanColor};
  }
  .CompanyFrame {
    display: flex;
    flex-direction: column;
    gap: 20px 0;

    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: 20px;
  }
  #logo {
    width: 300px;
  }
  .CompanyImg {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  .CompanyImg img {
    width: 370px;
    border-radius: 10px;
  }
`;
