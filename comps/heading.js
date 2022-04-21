import styled from 'styled-components'

let Heading = styled.h1 `
color:#5C80BC;
font-size: 24px; 
margin-right: 230px;
margin-left: 15px;`;


export default function Header({txt='Heading'}) {
    return <Heading>{txt}</Heading>;
} 