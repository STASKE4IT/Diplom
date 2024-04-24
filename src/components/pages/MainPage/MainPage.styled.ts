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
`;
