import styled from "styled-components";

export const SCCategoriesPopUp = styled.div`
  display: flex;
  justify-content:center;
  padding: 50px;
  
  .PopUpFrame {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  h1 {
    color: ${(props) => props.theme.colors.hoverElemShadow};
  }
`;
