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
    height: 25px;
    width: 300px;
    padding: 5px;
    
    border-radius:5px;
}
.registrationForm h2{
    text-align: center;
}
`