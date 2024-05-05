import styled, { keyframes } from "styled-components";

const bgMove = keyframes`
   0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
`;
export const SCFavoritePage = styled.div`
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
    background: url(${(props) => props.theme.colors.bgc});
    background-size: cover;
    animation: ${bgMove} 5s alternate infinite;
    z-index: -1;
  }
  h1 {
    margin-top: -20px;
    margin-bottom: -20px;
    text-align: center;
    color: ${(props) => props.theme.colors.titleColor};
    font-size: 40px;
  }
  .FavWorkCardFrame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    gap: 50px;
  }
  .FavWorkCard {
    background-color: ${(props) => props.theme.colors.elemsBgc};
    position: relative;

    width: 250px;
    height: 135px;

    display: flex;
    flex-direction: column;
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    padding: 20px 10px;
  }
  .FavWorkCard:hover {
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .FavWorkCard p {
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.pColor};
  }
  .FavWorkCard span {
    color: ${(props) => props.theme.colors.spanColor};
  }
  .FavWorkCard img {
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 50px;
    cursor: pointer;
  }
  .FavWorkCard img:nth-of-type(1) {
    display: none;
  }
  .FavWorkCard button {
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
  .off {
    display: none;
  }
`;
