import styled, { css } from 'styled-components';

const Select = styled.select.attrs(props => ({
  width: props.width || "40px",
}))`
  width: 18px;
  /* margin-left: 3px;
  margin-right: 3px; */
	display: block;
	font-size: 12px;
  color: black;
  background: transparent;
  border: transparent;
  outline: transparent;
	-moz-appearance: none;
	-webkit-appearance: none;
  appearance: none;
    
::-ms-expand {
	display: none;
}

 option {
   font-size: 12px;
   font-family: 'Segoe UI';
}

${props => props.rating && css`
    background: transparent;
    width: ${props => props.width};
    font-size: 12px;
    
    ::placeholder {
      color: ${props => props.color};
}
  `};
`

export default Select;