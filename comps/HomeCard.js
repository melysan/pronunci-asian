import styled from 'styled-components';


const Card = styled.div`
width: 340px;
height: 170px;
background-color: ${props=>props.bg_color};
border-radius: 20px;
padding-top: 10px;
padding-left: 20px;
margin: 10px;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;`;

const CardDescription = styled.p`
color: #FFFFFF;
font-size: 14px;`

const CardHeading = styled.h1`
color: #FFFFFF;
font-weight: bold;
font-size: 24px;`

const CallToAction = styled.div`
background-color: #FFFFFF;
width: 80px;
height: 28px;
border-radius: 24px;
display: flex;
justify-content: center; /* align horizontal */
align-items: center; /* align vertical */
`

const Verb = styled.h2`
color: ${props=>props.verb_color};
font-size:16px;
font-weight: bold;
`
export default function HomeCard({
    cardbg="#FC5F6C",
    verbcolor="#FC5F6C",
    heading="Pronounce Asian Names",
    carddescription="Learn how to pronounce Asian names and the meaning behind them.",
    verb="Learn"
}){

return <Card bg_color={cardbg}>
    <CardHeading>{heading}</CardHeading>
    <CardDescription>{carddescription}</CardDescription>
    <CallToAction><Verb verb_color={verbcolor}>{verb}</Verb></CallToAction>
</Card>

}