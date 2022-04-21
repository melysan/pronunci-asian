import styled from 'styled-components';

const Details = styled.p`
font-size: 14px;
color: #5C80BC;
display: flex;
justify-content: center; 
`


export default function DetailText({
    p="Details"
}){

return <Details>{p}</Details>

}