import styled from "styled-components";

const PageCont = styled.div`
display: flex;
justify-content: center;
align-items: center;
`;

const HomeCont = styled.div`
display: flex;
justify-content: center;
background-color: #fafafa;
width: 390px;
height: 844px;
`;

const HomeLogo = styled.div`
// background-color: #F2F5EA;
display: flex;
justify-content: center;
align-items: center;
`; 

const Img = styled.img`
width: 226px;
height: 206px;
margin-bottom: 20em;
`;




export default function Splash(){

    return(
        <PageCont>
            <HomeCont>
                <HomeLogo>
                    <Img src='/logomain1.svg'/>
                </HomeLogo>

            </HomeCont>
        </PageCont>
    )
}
