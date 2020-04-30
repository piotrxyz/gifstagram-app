import styled, { css } from 'styled-components';

const Input = styled.input.attrs(props => ({
  color: props.color || "black",
}))`

font-size: 20px;
width: 100%;
height: 50px;
border: transparent;
border-radius: 0;
-webkit-appearance: none;

${props =>
    props.results &&
    css`
    background: transparent;
    color: ${props => props.color};
    width: 20px;
    height: 25px;
    font-size: 12px;
    margin-left: 5px;

    ::placeholder {
      color: ${props => props.color}
}
  `};

  ${props =>
    props.language &&
    css`
    background: transparent;
    color: ${props => props.color};
    width: 50px;
    height: 25px;
    font-size: 12px;
    margin-left: 5px;

    ::placeholder {
      color: ${props => props.color}
}
  `};

`;

export default Input;