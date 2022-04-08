import styled from "styled-components";

const PageCont = styled.div`
display: flex;
justify-content: center;
// align-items: center;
// background-color: blue;
margin-top: 20em;
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
justify-content: center;
align-items: center;
`; 

const Img = styled.img`
width: 226px;
height: 206px;
margin-bottom: 20em;
`;

export function LogoMain(){
    return (<HomeLogo>
        <Img src='/logomain1.svg'/>
    </HomeLogo>
    )
}


export function SplashCont(){

    return(
    <div>
        <PageCont>
            <HomeCont>
                <HomeLogo>
                <Img src='/logomain1.svg'/>
                </HomeLogo>
            </HomeCont>
        </PageCont>
    </div>
    )
}
