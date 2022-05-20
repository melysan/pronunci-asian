import styled from 'styled-components';

const Heading = styled.h1`
font-size: 24px;
margin-top: 5%;
color: #5C80BC;
margin-top: 5%;
// margin-right: 230px;
`;


export default function Header({
    h1="Heading"
}){

return <Heading>{h1}</Heading>

}