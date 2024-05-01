import styled from "styled-components";

export const SCVakancy = styled.div`
  padding: 50px;
  background-color: lightgray;

  .VakancyFrame {
    border: 2px solid black;
    border-radius: 10px;

    background-color: white;

    display: flex;
    flex-direction: column;

    gap: 10px 0px;

    padding: 40px;
  }
  .VakancyFrame h2,
  p {
    color: black;
    line-height: 1.5;
    
    border: 1px solid lightgray;
    padding: 20px;
    border-radius:5px;
  }
  .VakancyFrame span {
    color: green;
    font-weight: bold;
}
`;
