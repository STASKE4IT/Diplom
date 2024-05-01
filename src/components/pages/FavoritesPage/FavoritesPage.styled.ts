import styled from "styled-components";

export const SCFavoritePage = styled.div`
  height: 100vh;
  background-color: lightgray;

  h1 {
    text-align: center;
  }
  .FavWorkCardFrame {
    padding: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
  .FavWorkCard {
    background-color: white;
    position: relative;

    width: 250px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 2px solid gray;
    border-radius: 10px;

    padding: 10px;
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
  .off {
    display: none;
  }
`;
