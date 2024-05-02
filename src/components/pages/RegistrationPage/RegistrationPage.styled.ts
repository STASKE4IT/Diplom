import styled from "styled-components";

export const SCRegistrationPage = styled.div`
display: flex;
gap: 20px;
justify-content:center;
align-items: center;

height: 100vh;

.registrationForm{
    display: flex;
    flex-direction:column;
    background-color:lightgray;
    
    align-items:center;

    width: 600px;
    gap: 20px;
    padding: 25px;

    border-radius:5px;
}
.registrationForm input{
    outline: 0;
  font-family: inherit;
  padding: 12px 10px;
  background-color: white;
  border-radius: 10px;
  border: 3px solid green;
  width: calc(4.7vw + 182.4px);
  margin-top:30px;
}
.registrationForm h2{
    text-align: center;
}
`