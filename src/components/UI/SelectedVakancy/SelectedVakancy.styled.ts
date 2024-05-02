import styled from "styled-components";

export const SCVakancy = styled.div`
  padding: 50px;
  background-color: ${(props) => props.theme.colors.bgc};

  .VakancyFrame {
    border: 2px solid ${(props) => props.theme.colors.borderColor};
    border-radius: 10px;

    background-color: ${(props) => props.theme.colors.elemsBgc};

    display: flex;
    flex-direction: column;

    gap: 10px 0px;

    padding: 40px;
    box-shadow: 0 0 50px ${(props) => props.theme.colors.hoverElemShadow};

  }
  .VakancyFrame h2,
  p {
    color: ${(props) => props.theme.colors.pColor};
    line-height: 1.5;
    
    border: 1px solid ${(props) => props.theme.colors.borderColor};
    padding: 20px;
    border-radius:5px;
  }
  strong, li, b {
    color: ${(props) => props.theme.colors.ultimateColor};
  }
  .VakancyFrame span {
    color: ${(props) => props.theme.colors.spanColor};
    font-weight: bold;
}
`;
