import styled from "styled-components";

export const SCProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  
  background-color:rgb(230, 230, 230);
  height: 100vh;

  .profileInfo {
    border: 2px solid green;
    border-radius: 10px;

    display:flex;
    flex-direction: column;
    gap: 30px;
    
    background-color: lightgray;
    padding: 20px;
    
    width: 300px;
}
  img{
    width: 300px;
  }
  h3{
    border-bottom: 1px solid green;
  }
`;
