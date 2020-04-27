import styled from 'styled-components';
import search from '../../img/search.svg';

const Button = styled.button`
background: url(${search}) no-repeat center;
background-size: 30px;
background-color: white;
font-size: 30px;
max-width: 50px;
height: 50px;
border: transparent;
font-family: sans-serif;
cursor: pointer;
@media (min-width: 768px) {
    width: 10%;
}
`;

export default Button;
