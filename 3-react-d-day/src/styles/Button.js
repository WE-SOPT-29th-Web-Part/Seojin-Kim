import styled from "styled-components";

const Button = styled.button`
  outline: none;
  border: none;
  padding: 12px;
  margin: 12px;
  border-radius: 12px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fafafa;
  box-shadow: 2px 4px 12px #dddddd, inset -2px -2px 8px #dadada;
  -webkit-transition: 0.25s linear 0s;
  -moz-transition: 0.25s linear 0s;
  -o-transition: 0.25s linear 0s;
  transition: 0.25s linear 0s;

  &:active {
    box-shadow: inset 4px 4px 12px #dadada, inset -4px -4px 12px #ffffff;
  }
`;

export { Button };
