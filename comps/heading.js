import styled from 'styled-components'

let Heading = styled.h1 `
color:#5C80BC;
font-size: 25px; 
margin-right: 230px;`;

export default function Header({txt='Heading'}) {
    return <Heading>{txt}</Heading>;
} 