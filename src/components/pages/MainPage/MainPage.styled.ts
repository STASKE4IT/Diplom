import styled from "styled-components";

export const SCMainPage = styled.div`
  display: flex;
  background-color: rgb(230, 230, 230);

  padding: 30px;

  .OfferNum {
    color: red;
    margin-bottom: 20px;
    text-align: right;
  }

  .workCardFrame {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }

  .workCard {
    background-color: lightgray;
    width: 400px;

    border: 1px solid black;
    border-radius: 5px;
  }

  .workCard img {
    width: 100%;
    height: 70%;
    border-bottom: 1px solid black;
  }

  .cardText {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.5fr 0.5fr;
    grid-template-areas:
      "b d"
      "c e";
    gap: 20px;

    padding: 10px;
  }

  .cardText span:nth-of-type(1) {
    grid-area: b;
  }
  .cardText span:nth-of-type(2) {
    grid-area: d;
  }
  .cardText p:nth-of-type(1) {
    grid-area: c;
  }
  .cardText p:nth-of-type(2) {
    grid-area: e;
  }

  .MainPageFrame {
    display: flex;
    flex-wrap: wrap;

    gap: 50px;
  }
  .jobList {
    position: relative;

    width: 200px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

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
  .jobList span {
    color: green;
  }
`;
