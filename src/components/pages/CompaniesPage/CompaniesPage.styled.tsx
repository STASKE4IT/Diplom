import styled, { keyframes } from "styled-components";

const bgMove = keyframes`
   0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
`;

export const SCCompaniesPage = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 50px;
  gap: 50px 0px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.theme.colors.bgc}) no-repeat;
    background-size: center;
    animation: ${bgMove} 70s alternate infinite;
    z-index: -1; 
  }
  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 40px;
    margin-top:-20px;
    margin-bottom: 30px;
  }
  .CompanyFrame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 50px;
  }
  .CompanyCard {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;
    padding: 15px;

    width: 250px;
    height: 100px;

    background-color: ${(props) => props.theme.colors.elemsBgc};
  }
  .CompanyCard:hover {
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .CompanyCard p {
    color: ${(props) => props.theme.colors.pColor};
  }
  .CompanyCard span{
    color: ${(props) => props.theme.colors.spanColor}
  }
  .CompanyLogo {
    width: 150px;
    margin-top: 10px;
  }
  .Pagination{
    display:flex;
    gap: 5px;
  }
  Button {
    width: 50px;
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
  }
  button:hover {
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
`;
