import styled from 'styled-components';
import github from '../../img/github.svg';

const GithubLink = styled.a`
display: block;
background: url(${github}) no-repeat center;
background-size: 20px;
margin: auto;
width: 20px;
height: 20px;
margin-bottom: 5px;
transition: all .5s;
&:hover {
    transform: scale(1.2);
    filter: invert(100%);
}
`

export default GithubLink;
