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
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 50px;
    gap: 50px;
  }
  .jobList {
    position: relative;

    width: 250px;
    height: 120px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    border-radius: 10px;
    border: 2px solid gray;

    padding: 20px 10px;
    background-color: white;
    color: rgb(63, 63, 63);

    /* gap: 50px; */
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
    z-index: 1;
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
