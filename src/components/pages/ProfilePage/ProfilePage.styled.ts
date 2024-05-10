import styled, { keyframes } from "styled-components";

const bgMove = keyframes`
   0% {
    background-position-x: 0%;
  }
  100% {
    background-position-x: 100%;
  }
`;

export const SCProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.theme.colors.bgc2});
    background-size: center;
    animation: ${bgMove} 100s alternate infinite;
    z-index: -1;
  }

  .profileInfo {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    display: flex;
    gap: 30px;

    background-color: ${(props) => props.theme.colors.elemsBgc};
    padding: 20px;

    width: 700px;
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};
  }
  .InfoCard {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  p {
    border-bottom: 2px solid gray;
    padding: 5px;
  }
  .UploadedPhoto {
    width: 200px;
    height: 200px;
  }
  h3 {
    border-bottom: 1px solid green;
  }
`;
