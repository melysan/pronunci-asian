import { useRouter } from 'next/router'
import styled from "styled-components";

const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
align-text: center;
width: 280px;
height: 50px;
border-radius: 11px;
background-color: #FC5F6C;
margin-top: 2em;
`;

const BtnHead = styled.h1`
color: #ffffff;
font-size: 24px;
font-weight: bold;

`;

export function RedButton({
    heading='Hi',
    where = '/splashpage'
}) {

   

    const r = useRouter();

    const {page, type} = r.query;

    return (
        <Button
         onClick={
            () => r.push(where)
        }
        >
           <BtnHead>{heading}</BtnHead> 
        </Button>
    )
}