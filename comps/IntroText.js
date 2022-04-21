import styled from "styled-components";

const IntroHead = styled.h1`
text-align: center;
font-size: 24px;
margin-bottom: 2em;
`;

const IntroSubhead = styled.h2`
text-align: center;
font-size: 16px;
`;

const Paragraph = styled.p`
width: 318px;
height: 103;
text-align: center;
font-size: 16px;
`;

const SubColor = styled.h2`
font-size: 16px;
font-weight: bold;
color: #FC5F6C;
`;

export function Head({
    txt='test',
}){
    return(
        <IntroHead>
            {txt}
        </IntroHead>
    )
}

export function Subhead({
    txt='test'
}) {
    return(
        <IntroSubhead>
            {txt}
        </IntroSubhead>
    )
}

export function Parag({
    txt='test'
}) {

    return(
        <Paragraph>
            {txt}
        </Paragraph>
    )
}

export function Color({
    txt='test'
}) {
    return(
        <SubColor>
            
        </SubColor>
    )
}