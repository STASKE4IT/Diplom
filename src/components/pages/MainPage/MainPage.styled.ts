import styled from "styled-components";


export const SCMainPage = styled.div`
  display: flex;
  background: ${(props) => props.theme.colors.bgc}; /* Использование цвета фона из темы */
  flex-direction: column;
  height: 100%;
  h1 {
    margin-top:20px;
    text-align: center;
    color: ${(props) => props.theme.colors.titleColor};
  }
  .MainPageFrame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    padding: 30px 50px;
    gap: 50px;
  }
  .jobList {
    background-color:${(props) => props.theme.colors.elemsBgc};
    position: relative;

    width: 250px;
    height: 135px;

    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    padding: 20px 10px;
  }
  .jobList:hover {
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .jobList .favorites {
    position: absolute;
    bottom: -35px;
    right: 0;
  }
  .jobList img {
    position: absolute;
    width: 50px;
    bottom: 5px;
    right: 5px;
    cursor:pointer;
  }
  .off {
    display: none;
  }
  .jobList p {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.pColor};
  }
  .jobList span {
    color: ${(props) => props.theme.colors.spanColor};
  }
  .jobList button {
    position: absolute;
    bottom: 10px;
    width: 100px;
    height: 30px;
    color: ${(props) => props.theme.colors.btnTextColor};
    background-color: ${(props) => props.theme.colors.btnBgc};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:is(:active) {
      transform: scale(0.95);
      background-color: ${(props) => props.theme.colors.activeBtnBgc};
    }
  }
`;
