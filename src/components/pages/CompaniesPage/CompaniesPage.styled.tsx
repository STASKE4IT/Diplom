import styled from "styled-components";

export const SCCompaniesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background-color: ${(props) => props.theme.colors.bgc};

  h2 {
    text-align: center;
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 40px;
    margin-top: -50px;
  }
  .CompanyFrame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 100px;
    margin: 50px 0px;
  }
  .CompanyCard {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;
    padding: 15px;
    width: 200px;
    background-color: ${(props) => props.theme.colors.elemsBgc};
  }
  .CompanyCard:hover {
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .CompanyCard p {
    color: ${(props) => props.theme.colors.pColor};
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
