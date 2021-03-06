import styled, { css } from 'styled-components';

const Input = styled.input.attrs(props => ({
  color: props.color || "black",
}))`

padding-left: 2%;
font-size: 20px;
width: 100%;
height: 50px;
border: transparent;
border-radius: 0;
-webkit-appearance: none;

${props => props.limit && css`
    background: transparent;
    color: ${props => props.color};
    width: 20px;
    height: 25px;
    font-size: 12px;

    ::placeholder {
      color: ${props => props.color};
      opacity: 1;
}
  `};

  ${props => props.off && css`
    background: transparent;
    color: ${props => props.color};
    width: 16px;
    height: 25px;
    font-size: 12px;

    ::placeholder {
      color: ${props => props.color};
      opacity: 1;
}
  `};
`;

export default Input;