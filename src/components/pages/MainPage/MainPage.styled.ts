import styled from "styled-components";

export const SCMainPage = styled.div`
  display: flex;
  background-color: rgb(230, 230, 230);
  flex-direction: column;
  h1 {
    margin-top:20px;
    text-align: center;
  }
  .MainPageFrame {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    padding: 30px 50px;
    gap: 50px;
  }
  .jobList {
    background-color: white;
    position: relative;

    width: 250px;
    height: 120px;

    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: 10px;

    padding: 20px 10px;
    color: rgb(63, 63, 63);
  }
  .jobList:hover {
    box-shadow: 0 0 10px black;
  }
  .jobList .favorites {
    position: absolute;
    bottom: -35px;
    right: 0;
  }
  .jobList img {
    position: absolute;
    width: 50px;
    bottom: -30px;
    right: 0px;
  }
  .off {
    display: none;
  }
  .jobList p {
    margin-bottom: 20px;
  }
  .jobList span {
    color: green;
  }
  .jobList button {
    position: absolute;
    bottom: 10px;
    width: 100px;
    height: 30px;
    color: white;
    background-color: rgb(40, 147, 26);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:is(:active) {
      transform: scale(0.95);
      background-color: rgb(2, 170, 47);
    }
  }
`;
