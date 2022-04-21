import styled from "styled-components";
import { useRouter } from 'next/router'
import { RedButton } from "./landingbuttons";

const PageCont = styled.div`
display: flex;
justify-content: center;
// align-items: center;
background-color: blue;
// margin-top: 20em;
`;

const HomeCont = styled.div`
display: flex;
justify-content: center;
background-color: #F2F5EA;
width: 390px;
height: 844px;
`;

const HomeLogo = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`; 

const Img = styled.img`
width: 226px;
height: 206px;
// margin-bottom: 10em;
display: flex;
justify-content: center;
`;


export function LogoMain(){

    const r = useRouter();

    const {page, type} = r.query;


    return (
        <div>
        <PageCont>
            <HomeCont>
                <HomeLogo>
                <Img onClick={
        () => r.push('/landingpage')
    
    } 
                src='/logomain1.svg'/>
                </HomeLogo>
            </HomeCont>
        </PageCont>
    </div>
    )
}


export function Logo({
    img = '/logomain1.svg'
}){

    return(
 
        <Img src={img}/>
    )
}
export function Land(){

    return <div>
        <PageCont>
            <HomeCont>
                <HomeLogo>
                <Img src='/logomain1.svg'/>
                <RedButton heading="Introduction" where="/intro"/>
                <RedButton heading="Get Started!"/>
                </HomeLogo>
            </HomeCont>
        </PageCont>
    </div>

}


export function Page() {
    return <PageCont>

    </PageCont>
}

export function InnerpPage() {
    return <HomeCont>

    </HomeCont>
}