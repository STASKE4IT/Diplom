import styled from "styled-components";

export const SCProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.bgc};
  height: 100vh;

  .profileInfo {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    gap: 30px;

    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: 20px;

    width: 300px;
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  p {
    border-bottom: 2px solid gray;
    padding: 5px;
  }
  img {
    width: 300px;
  }
  h3 {
    border-bottom: 1px solid green;
  }
`;
