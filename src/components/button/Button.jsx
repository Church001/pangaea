import styled from "styled-components";
import { screenSize } from "../../utils/_config.styles";

export const Button = styled.button`
  background: ${props => props.primary ? "#4b5548" : "white"};
  color: ${props => props.primary ? "white" : "#4b5548"};
  width: 100%;
  font-size: 1em;
  padding: 1em 1em;
  border: 0px solid "#4b5548";
  border-radius: 3px;
  cursor: pointer;

  :hover{
    background-color:#2b2e2b;
  }

  ${screenSize.tablet}{
    width:80%;
  }
  ${screenSize.phone}{
    width:70%;
  }

`;
