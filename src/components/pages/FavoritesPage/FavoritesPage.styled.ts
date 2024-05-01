import styled from "styled-components";

export const SCFavoritePage = styled.div`
  height: 100vh;
  background-color: lightgray;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 20px;
    text-align: center;
  }
  .FavWorkCardFrame {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 30px 50px;
    gap: 50px;
  }
  .FavWorkCard {
    background-color: white;
    position: relative;

    width: 250px;
    height: 150px;

    display: flex;
    flex-direction: column;
    border: 2px solid gray;
    border-radius: 10px;

    padding: 10px;
  }
  .FavWorkCard p {
    margin-bottom: 30px;
  }
  .FavWorkCard span {
    color: green;
  }
  .FavWorkCard img {
    position: absolute;
    bottom: -20px;
    right: 0px;
    width: 40px;
  }
  .FavWorkCard:hover {
    box-shadow: 0 0 10px black;
  }
  .FavWorkCard button {
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
  .off {
    display: none;
  }
`;
