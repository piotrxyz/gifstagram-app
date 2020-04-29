import styled from 'styled-components';

const Wrapper = styled.section`
display: grid;
grid-column-gap: 10px;
grid-row-gap: 10px;
margin-top: 10%;

@media (min-width: 768px) {
width: 90%;
margin: auto;
margin-top: 5%;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: auto;
grid-column-gap: 10px;
grid-row-gap: 10px;
justify-content: center;
padding-bottom: 5%;
}
`

export default Wrapper;
