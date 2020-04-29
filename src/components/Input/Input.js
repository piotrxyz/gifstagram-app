import styled from 'styled-components';

const Input = styled.input`
font-size: 30px;
width: 100%;
height: 50px;
border: transparent;
border-radius: 0;
-webkit-appearance: none;

::placeholder {
    font-size: 20px;
    @media (min-width: 768px) {
        font-size: 30px;
    }
}
`;

export default Input;