import styled from "styled-components";

export const SCMainPage = styled.div`
  display: flex;
  background-color:rgb(230, 230, 230);

  .workFrame {
    padding: 50px;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 50px;
  }

  .workCard {
    background-color: lightgray;

    border: 1px solid black;
    border-radius: 5px;
  }

  .workCard img {
    width: 100%;
    height: 70%;
    border-bottom: 1px solid black;
  }

  .cardText{ 
    display: grid;
    grid-template-columns: 1fr 1fr ;
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
